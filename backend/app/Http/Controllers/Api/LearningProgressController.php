<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\UserProgress;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class LearningProgressController extends Controller
{
    private const LEVELS = ['debutant', 'intermediaire', 'avance'];

    /**
     * GET /api/me/learning-progress
     * Returns pedagogical progress by language, theme and level.
     */
    public function index(Request $request): JsonResponse
    {
        $user = $request->user();
        $languages = Language::with(['themes.words'])->orderBy('id')->get();
        $progress = $this->progressByLanguageThemeLevel($user->id);
        $reviews = $this->reviewsByLanguageThemeLevel($user->id);

        $payload = $languages->map(function (Language $language) use ($progress, $reviews) {
            $themeRows = $language->themes
                ->sortBy('id')
                ->values()
                ->map(function ($theme) use ($language, $progress, $reviews) {
                    $levels = collect(self::LEVELS)->map(function (string $level) use ($language, $theme, $progress, $reviews) {
                        $wordCount = $theme->words->where('level', $level)->count();
                        $key = $this->compoundKey($language->id, $theme->key, $level);
                        $reviewKey = $this->compoundKey($language->code, $theme->key, $level);
                        $progressRow = $progress->get($key);
                        $reviewRow = $reviews->get($reviewKey);

                        return $this->levelPayload(
                            $level,
                            $wordCount,
                            (int) ($progressRow->best_score ?? 0),
                            (int) ($progressRow->total_seen ?? 0),
                            (int) ($reviewRow->srs_total ?? 0),
                            (int) ($reviewRow->srs_due ?? 0),
                        );
                    })->values()->all();

                    return [
                        'key' => $theme->key,
                        'name' => $theme->name,
                        'emoji' => $theme->emoji,
                        'levels' => $levels,
                    ];
                })->all();

            return [
                'code' => $language->code,
                'name' => $language->name,
                'flag' => $language->flag,
                'summary' => $this->summaryPayload($themeRows),
                'themes' => $themeRows,
            ];
        })->all();

        return response()->json(['languages' => $payload]);
    }

    /**
     * @return Collection<string, UserProgress>
     */
    private function progressByLanguageThemeLevel(int $userId): Collection
    {
        return UserProgress::where('user_id', $userId)
            ->get()
            ->keyBy(fn (UserProgress $progress) => $this->compoundKey(
                $progress->language_id,
                $progress->theme_key,
                $progress->level,
            ));
    }

    /**
     * @return Collection<string, \stdClass>
     */
    private function reviewsByLanguageThemeLevel(int $userId): Collection
    {
        return DB::table('word_reviews')
            ->join('words', 'words.id', '=', 'word_reviews.word_id')
            ->join('themes', 'themes.id', '=', 'words.theme_id')
            ->where('word_reviews.user_id', $userId)
            ->groupBy('word_reviews.language_code', 'themes.key', 'words.level')
            ->select([
                'word_reviews.language_code',
                'themes.key as theme_key',
                'words.level',
                DB::raw('COUNT(*) as srs_total'),
                DB::raw('SUM(CASE WHEN word_reviews.next_review_at <= ? THEN 1 ELSE 0 END) as srs_due'),
            ])
            ->addBinding(Carbon::now(), 'select')
            ->get()
            ->keyBy(fn ($row) => $this->compoundKey($row->language_code, $row->theme_key, $row->level));
    }

    private function levelPayload(
        string $level,
        int $wordCount,
        int $bestScore,
        int $totalSeen,
        int $srsTotal,
        int $srsDue,
    ): array {
        $coverage = $wordCount > 0 ? min(1, $totalSeen / $wordCount) : 0;
        $mastery = $wordCount > 0
            ? (int) round((($bestScore / 100) * 0.7 + $coverage * 0.3) * 100)
            : 0;

        return [
            'level' => $level,
            'word_count' => $wordCount,
            'best_score' => $bestScore,
            'total_seen' => $totalSeen,
            'coverage_percent' => (int) round($coverage * 100),
            'mastery_percent' => $mastery,
            'status' => $this->status($wordCount, $bestScore, $totalSeen, $mastery, $srsDue),
            'srs_total' => $srsTotal,
            'srs_due' => $srsDue,
        ];
    }

    private function status(int $wordCount, int $bestScore, int $totalSeen, int $mastery, int $srsDue): string
    {
        if ($wordCount === 0) {
            return 'unavailable';
        }

        if ($srsDue > 0 && $totalSeen > 0) {
            return 'review';
        }

        if ($mastery >= 85 && $bestScore >= 80 && $totalSeen >= $wordCount) {
            return 'mastered';
        }

        if ($bestScore > 0 || $totalSeen > 0) {
            return 'in_progress';
        }

        return 'not_started';
    }

    /**
     * @param  array<int, array{levels: array<int, array<string, mixed>>}>  $themes
     */
    private function summaryPayload(array $themes): array
    {
        $levels = collect($themes)->flatMap(fn (array $theme) => $theme['levels'])
            ->filter(fn (array $level) => $level['word_count'] > 0)
            ->values();

        $count = max($levels->count(), 1);
        $next = $levels
            ->filter(fn (array $level) => in_array($level['status'], ['review', 'in_progress', 'not_started'], true))
            ->sortBy([
                fn (array $a, array $b) => $this->statusPriority($a['status']) <=> $this->statusPriority($b['status']),
                fn (array $a, array $b) => $a['mastery_percent'] <=> $b['mastery_percent'],
            ])
            ->first();

        return [
            'available_levels' => $levels->count(),
            'mastered_levels' => $levels->where('status', 'mastered')->count(),
            'in_progress_levels' => $levels->where('status', 'in_progress')->count(),
            'review_levels' => $levels->where('status', 'review')->count(),
            'not_started_levels' => $levels->where('status', 'not_started')->count(),
            'average_mastery' => (int) round($levels->sum('mastery_percent') / $count),
            'srs_due' => $levels->sum('srs_due'),
            'next_status' => $next['status'] ?? null,
            'next_level' => $next['level'] ?? null,
        ];
    }

    private function statusPriority(string $status): int
    {
        return match ($status) {
            'review' => 0,
            'in_progress' => 1,
            'not_started' => 2,
            default => 3,
        };
    }

    private function compoundKey(int|string $language, string $theme, string $level): string
    {
        return $language.'|'.$theme.'|'.$level;
    }
}

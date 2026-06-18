<?php

namespace App\Assemblers;

use App\Enums\LearningLevel;
use App\Models\Language;
use App\Repositories\LearningProgressRepository;
use Illuminate\Support\Collection;

class LearningProgressPayloadAssembler
{
    public function __construct(
        private readonly LearningProgressRepository $repository,
    ) {}

    /**
     * @param  Collection<int, Language>  $languages
     * @param  Collection<string, mixed>  $progress
     * @param  Collection<string, mixed>  $reviews
     * @return array{languages: array<int, array<string, mixed>>}
     */
    public function assemble(Collection $languages, Collection $progress, Collection $reviews): array
    {
        $payload = $languages->map(function (Language $language) use ($progress, $reviews) {
            $themeRows = $language->themes
                ->sortBy('id')
                ->values()
                ->map(function ($theme) use ($language, $progress, $reviews) {
                    $levels = collect(LearningLevel::values())->map(function (string $level) use ($language, $theme, $progress, $reviews) {
                        $wordCount = $theme->words->where('level', $level)->count();
                        $key = $this->repository->compoundKey($language->id, $theme->key, $level);
                        $reviewKey = $this->repository->compoundKey($language->code, $theme->key, $level);
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

        return ['languages' => $payload];
    }

    /**
     * @return array<string, mixed>
     */
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
     * @return array<string, mixed>
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
}

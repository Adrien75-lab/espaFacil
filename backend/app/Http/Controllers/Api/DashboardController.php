<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserBadge;
use App\Models\UserStat;
use App\Models\WordReview;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class DashboardController extends Controller
{
    /**
     * GET /api/me/dashboard
     * Retourne toutes les stats agrégées de l'utilisateur.
     */
    public function index(Request $request): JsonResponse
    {
        $user = $request->user();

        // --- Stats toutes langues ---
        $stats = UserStat::with('language')
            ->where('user_id', $user->id)
            ->get();

        $totalXp = $stats->sum('xp');
        $totalSessions = $stats->sum('sessions');

        // XP history agrégée (toutes langues, 30 jours)
        $xpHistory = [];
        foreach ($stats as $s) {
            foreach ($s->xp_history ?? [] as $date => $xp) {
                $xpHistory[$date] = ($xpHistory[$date] ?? 0) + $xp;
            }
        }
        krsort($xpHistory);
        $xpHistory = array_slice($xpHistory, 0, 30, true);
        // On remplit les 30 derniers jours avec 0 si absent
        $xpHistory = $this->fillDays($xpHistory, 30);

        // --- Streak global (max streak actuel toutes langues) ---
        $currentStreak = 0;
        foreach ($stats as $s) {
            $streak = $this->computeStreak($s->activity_days ?? []);
            $currentStreak = max($currentStreak, $streak);
        }

        // --- Badges (toutes langues, dédoublonnés) ---
        $badges = UserBadge::where('user_id', $user->id)
            ->select('badge_key', 'language_id', 'unlocked_at')
            ->get()
            ->map(fn ($b) => [
                'key' => $b->badge_key,
                'language_id' => $b->language_id,
                'unlocked_at' => $b->unlocked_at,
            ]);

        // --- SRS stats ---
        $srsStats = WordReview::where('user_id', $user->id)
            ->selectRaw('language_code,
                COUNT(*) as total_words,
                SUM(times_seen) as total_seen,
                SUM(times_correct) as total_correct,
                SUM(times_wrong) as total_wrong,
                SUM(CASE WHEN next_review_at <= ? THEN 1 ELSE 0 END) as due_count', [Carbon::now()])
            ->groupBy('language_code')
            ->get();

        // --- Par langue ---
        $langStats = $stats->map(function ($s) use ($srsStats) {
            $srs = $srsStats->firstWhere('language_code', $s->language->code);

            return [
                'code' => $s->language->code,
                'name' => $s->language->name,
                'flag' => $s->language->flag,
                'xp' => $s->xp,
                'sessions' => $s->sessions,
                'max_serie' => $s->max_serie,
                'current_streak' => $this->computeStreak($s->activity_days ?? []),
                'activity_days' => $s->activity_days ?? [],
                'srs_due' => $srs?->due_count ?? 0,
                'srs_total' => $srs?->total_words ?? 0,
            ];
        })->sortByDesc('xp')->values();

        // XP agrégé par mode (toutes langues)
        $modeXp = [];
        foreach ($stats as $s) {
            foreach ($s->mode_xp ?? [] as $mode => $xp) {
                $modeXp[$mode] = ($modeXp[$mode] ?? 0) + $xp;
            }
        }

        return response()->json([
            'user' => ['name' => $user->name, 'email' => $user->email],
            'total_xp' => $totalXp,
            'total_sessions' => $totalSessions,
            'current_streak' => $currentStreak,
            'xp_history' => $xpHistory,  // [{date, xp}] trié ASC
            'badges' => $badges,
            'languages' => $langStats,
            'mode_xp' => $modeXp,
        ]);
    }

    private function computeStreak(array $days): int
    {
        if (empty($days)) {
            return 0;
        }
        $today = Carbon::today()->toDateString();
        $yesterday = Carbon::yesterday()->toDateString();
        $latest = end($days);
        if ($latest !== $today && $latest !== $yesterday) {
            return 0;
        }

        $streak = 1;
        $current = Carbon::parse($latest);
        for ($i = count($days) - 2; $i >= 0; $i--) {
            $prev = Carbon::parse($days[$i]);
            if ($current->diffInDays($prev) === 1) {
                $streak++;
                $current = $prev;
            } else {
                break;
            }
        }

        return $streak;
    }

    /** Remplit les N derniers jours manquants avec 0, retourne [{date, xp}] ASC */
    private function fillDays(array $hist, int $days): array
    {
        $result = [];
        for ($i = $days - 1; $i >= 0; $i--) {
            $date = Carbon::today()->subDays($i)->toDateString();
            $result[] = ['date' => $date, 'xp' => $hist[$date] ?? 0];
        }

        return $result;
    }
}

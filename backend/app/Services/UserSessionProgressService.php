<?php

namespace App\Services;

use App\Enums\ExerciseMode;
use App\Models\Language;
use App\Models\User;
use App\Models\UserBadge;
use App\Models\UserProgress;
use App\Models\UserStat;
use Illuminate\Support\Carbon;

class UserSessionProgressService
{
    public function __construct(
        private readonly LingoRewardService $lingos,
        private readonly StreakService $streaks,
    ) {}

    /**
     * @param  array{language: string, theme: string, level: string, mode: string, score: int, xp_gained: int, correct: int, total: int}  $data
     * @return array<string, mixed>
     */
    public function record(User $user, array $data): array
    {
        $language = Language::where('code', $data['language'])->firstOrFail();
        $today = Carbon::today()->toDateString();
        $stat = $this->statFor($user->id, $language->id);
        $days = $this->activityDaysWithToday($stat->activity_days ?? [], $today);
        $streak = $this->streaks->compute($days);

        $this->updateStat($stat, $data, $days, $today, $streak);
        $this->updateProgress($user->id, $language->id, $data);

        $newBadges = $this->checkBadges($user->id, $language->id, $stat, $data);
        $xpToday = $this->xpToday($user->id, $today);
        $goal = $user->daily_goal_xp ?? 50;
        $lingoRewards = $this->lingos->awardForSession($user, $data, $xpToday, $goal, $streak);

        return [
            'stat' => $stat->fresh(),
            'streak' => $streak,
            'new_badges' => $newBadges,
            'lingos_gained' => $lingoRewards['gained'],
            'lingo_rewards' => $lingoRewards['rewards'],
            'lingos_balance' => $user->fresh()->lingos_balance,
            'next_lingo_bonus' => $this->lingos->nextDailyBonus($xpToday, $goal),
        ];
    }

    private function statFor(int $userId, int $languageId): UserStat
    {
        return UserStat::firstOrCreate(
            ['user_id' => $userId, 'language_id' => $languageId],
            ['xp' => 0, 'sessions' => 0, 'max_serie' => 0, 'phrases_sessions' => 0, 'activity_days' => []]
        );
    }

    /**
     * @param  array<int, string>  $days
     * @return array<int, string>
     */
    private function activityDaysWithToday(array $days, string $today): array
    {
        if (! in_array($today, $days, true)) {
            $days[] = $today;
        }

        sort($days);

        return $days;
    }

    /**
     * @param  array{mode: string, xp_gained: int}  $data
     * @param  array<int, string>  $days
     */
    private function updateStat(UserStat $stat, array $data, array $days, string $today, int $streak): void
    {
        $stat->xp += $data['xp_gained'];
        $stat->sessions += 1;
        $stat->max_serie = max($stat->max_serie, $streak);
        if ($data['mode'] === ExerciseMode::FillBlank->value) {
            $stat->phrases_sessions += 1;
        }
        $stat->activity_days = $days;

        $history = $stat->xp_history ?? [];
        $history[$today] = ($history[$today] ?? 0) + $data['xp_gained'];
        krsort($history);
        $stat->xp_history = array_slice($history, 0, 30, true);

        $modeXp = $stat->mode_xp ?? [];
        $modeXp[$data['mode']] = ($modeXp[$data['mode']] ?? 0) + $data['xp_gained'];
        $stat->mode_xp = $modeXp;

        $stat->save();
    }

    /**
     * @param  array{theme: string, level: string, score: int, total: int}  $data
     */
    private function updateProgress(int $userId, int $languageId, array $data): void
    {
        $progress = UserProgress::firstOrCreate(
            [
                'user_id' => $userId,
                'language_id' => $languageId,
                'theme_key' => $data['theme'],
                'level' => $data['level'],
            ],
            ['best_score' => 0, 'total_seen' => 0]
        );

        if ($data['score'] > $progress->best_score) {
            $progress->best_score = $data['score'];
        }
        $progress->total_seen += $data['total'];
        $progress->save();
    }

    private function xpToday(int $userId, string $today): int
    {
        return (int) UserStat::where('user_id', $userId)
            ->get()
            ->sum(fn (UserStat $stat) => ($stat->xp_history ?? [])[$today] ?? 0);
    }

    /**
     * @param  array{score: int}  $data
     * @return array<int, string>
     */
    private function checkBadges(int $userId, int $languageId, UserStat $stat, array $data): array
    {
        $definitions = [
            'first_session' => fn () => $stat->sessions >= 1,
            'score_perfect' => fn () => $data['score'] === 100,
            'xp_100' => fn () => $stat->xp >= 100,
            'xp_500' => fn () => $stat->xp >= 500,
            'sessions_10' => fn () => $stat->sessions >= 10,
            'serie_3' => fn () => $stat->max_serie >= 3,
            'serie_7' => fn () => $stat->max_serie >= 7,
            'phrases_master' => fn () => $stat->phrases_sessions >= 20,
        ];

        $existing = UserBadge::where('user_id', $userId)
            ->where('language_id', $languageId)
            ->pluck('badge_key')
            ->toArray();

        $newBadges = [];
        foreach ($definitions as $key => $check) {
            if (in_array($key, $existing, true) || ! $check()) {
                continue;
            }

            UserBadge::create([
                'user_id' => $userId,
                'language_id' => $languageId,
                'badge_key' => $key,
                'unlocked_at' => now(),
            ]);
            $newBadges[] = $key;
        }

        return $newBadges;
    }
}

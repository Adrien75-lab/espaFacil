<?php

namespace App\Services;

use App\Models\User;
use App\Models\UserStat;
use App\Repositories\UserProgressRepository;
use Illuminate\Support\Carbon;

class TodaySummaryService
{
    public function __construct(
        private readonly LingoRewardService $lingos,
        private readonly StreakService $streaks,
        private readonly UserProgressRepository $progress,
    ) {}

    /**
     * @return array<string, mixed>
     */
    public function payloadFor(User $user): array
    {
        $today = Carbon::today()->toDateString();
        $stats = $this->progress->statsForUser($user->id);
        $xpToday = 0;
        $currentStreak = 0;

        foreach ($stats as $stat) {
            /** @var UserStat $stat */
            $history = $stat->xp_history ?? [];
            $xpToday += $history[$today] ?? 0;
            $currentStreak = max($currentStreak, $this->streaks->compute($stat->activity_days ?? []));
        }

        $goal = $user->daily_goal_xp ?? 50;

        return [
            'xp_today' => $xpToday,
            'daily_goal' => $goal,
            'goal_reached' => $xpToday >= $goal,
            'streak' => $currentStreak,
            'played_today' => $xpToday > 0,
            'lingos_balance' => $user->lingos_balance ?? 0,
            'lingos_today' => $this->lingos->earnedToday($user->id),
            'next_lingo_bonus' => $this->lingos->nextDailyBonus($xpToday, $goal),
        ];
    }
}

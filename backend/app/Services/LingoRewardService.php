<?php

namespace App\Services;

use App\Models\User;
use App\Models\UserLingoReward;
use Illuminate\Support\Carbon;

class LingoRewardService
{
    /**
     * @var array<int, array{multiplier: int, key: string, amount: int, label: string}>
     */
    private const DAILY_MILESTONES = [
        ['multiplier' => 1, 'key' => 'daily_goal_1x', 'amount' => 5, 'label' => 'Objectif atteint'],
        ['multiplier' => 2, 'key' => 'daily_goal_2x', 'amount' => 8, 'label' => 'Objectif doublé'],
        ['multiplier' => 5, 'key' => 'daily_goal_5x', 'amount' => 15, 'label' => 'Objectif x5'],
        ['multiplier' => 10, 'key' => 'daily_goal_10x', 'amount' => 30, 'label' => 'Objectif x10'],
    ];

    /**
     * @return array{gained: int, rewards: array<int, array{key: string, label: string, amount: int}>}
     */
    private const LEVEL_LINGOS = [
        'debutant' => 2,
        'intermediaire' => 4,
        'avance' => 6,
    ];

    public function awardForSession(User $user, array $session, int $xpToday, int $dailyGoal, int $streak): array
    {
        $today = Carbon::today()->toDateString();

        $levelLingos = self::LEVEL_LINGOS[$session['level'] ?? 'debutant'] ?? 2;
        $user->increment('lingos_balance', $levelLingos);

        $rewards = [
            ['key' => 'session_complete', 'label' => 'Session terminée', 'amount' => $levelLingos],
            ...$this->dailyMilestoneRewards($user, $xpToday, $dailyGoal, $today),
            ...$this->perfectSessionReward($user, $session, $today),
            ...$this->streakRewards($user, $streak, $today),
        ];

        return [
            'gained' => array_sum(array_column($rewards, 'amount')),
            'rewards' => $rewards,
        ];
    }

    /**
     * @return array<int, array{key: string, label: string, amount: int}>
     */
    private function dailyMilestoneRewards(User $user, int $xpToday, int $dailyGoal, string $today): array
    {
        $rewards = [];
        foreach (self::DAILY_MILESTONES as $milestone) {
            if ($dailyGoal <= 0 || $xpToday < $dailyGoal * $milestone['multiplier']) {
                continue;
            }

            $reward = $this->awardDaily($user, $milestone['key'], $milestone['amount'], $milestone['label'], $today, [
                'xp_today' => $xpToday,
                'daily_goal' => $dailyGoal,
            ]);
            if ($reward !== null) {
                $rewards[] = $reward;
            }
        }

        return $rewards;
    }

    /**
     * @return array<int, array{key: string, label: string, amount: int}>
     */
    private function perfectSessionReward(User $user, array $session, string $today): array
    {
        if ((int) $session['score'] !== 100) {
            return [];
        }

        $reward = $this->awardDaily($user, 'perfect_session', 3, 'Session parfaite', $today, [
            'mode' => $session['mode'],
            'language' => $session['language'],
        ]);

        return $reward === null ? [] : [$reward];
    }

    /**
     * @return array<int, array{key: string, label: string, amount: int}>
     */
    private function streakRewards(User $user, int $streak, string $today): array
    {
        $amount = [3 => 10, 7 => 20, 14 => 35, 30 => 75][$streak] ?? null;
        if ($amount === null) {
            return [];
        }

        $reward = $this->awardDaily($user, 'streak_'.$streak, $amount, 'Série '.$streak.' jours', $today, [
            'streak' => $streak,
        ]);

        return $reward === null ? [] : [$reward];
    }

    /**
     * @return array{key: string, label: string, amount: int}|null
     */
    private function awardDaily(User $user, string $key, int $amount, string $label, string $today, array $metadata): ?array
    {
        $existing = UserLingoReward::where('user_id', $user->id)
            ->where('reward_key', $key)
            ->whereDate('earned_on', $today)
            ->exists();

        if ($existing) {
            return null;
        }

        UserLingoReward::create([
            'user_id' => $user->id,
            'reward_key' => $key,
            'earned_on' => $today,
            'amount' => $amount,
            'metadata' => $metadata,
        ]);

        $user->increment('lingos_balance', $amount);

        return ['key' => $key, 'label' => $label, 'amount' => $amount];
    }

    /**
     * @return array{multiplier: int, xp_required: int, remaining_xp: int, amount: int, label: string}|null
     */
    public function nextDailyBonus(int $xpToday, int $dailyGoal): ?array
    {
        if ($dailyGoal <= 0) {
            return null;
        }

        foreach (self::DAILY_MILESTONES as $milestone) {
            $required = $dailyGoal * $milestone['multiplier'];
            if ($xpToday < $required) {
                return [
                    'multiplier' => $milestone['multiplier'],
                    'xp_required' => $required,
                    'remaining_xp' => $required - $xpToday,
                    'amount' => $milestone['amount'],
                    'label' => $milestone['label'],
                ];
            }
        }

        return null;
    }

    public function earnedToday(int $userId): int
    {
        return (int) UserLingoReward::where('user_id', $userId)
            ->whereDate('earned_on', Carbon::today())
            ->sum('amount');
    }
}

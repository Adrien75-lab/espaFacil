<?php

namespace App\Assemblers;

use App\Models\User;
use App\Models\UserStat;
use App\Services\LingoRewardService;

class UserSessionResultAssembler
{
    public function __construct(
        private readonly LingoRewardService $lingos,
    ) {}

    /**
     * @param  array<int, string>  $newBadges
     * @param  array{gained: int, rewards: array<int, array{key: string, label: string, amount: int}>}  $lingoRewards
     * @return array<string, mixed>
     */
    public function assemble(
        User $user,
        UserStat $stat,
        int $streak,
        array $newBadges,
        array $lingoRewards,
        int $xpToday,
        int $goal,
    ): array {
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
}

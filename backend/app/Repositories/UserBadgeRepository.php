<?php

namespace App\Repositories;

use App\Models\UserBadge;
use App\Models\UserStat;
use Illuminate\Support\Collection;

class UserBadgeRepository
{
    /**
     * @return Collection<int, string>
     */
    public function keysForLanguage(int $userId, int $languageId): Collection
    {
        return UserBadge::where('user_id', $userId)
            ->where('language_id', $languageId)
            ->pluck('badge_key');
    }

    /**
     * @param  array{score: int}  $session
     * @return array<int, string>
     */
    public function unlockForSession(int $userId, int $languageId, UserStat $stat, array $session): array
    {
        $definitions = [
            'first_session' => fn () => $stat->sessions >= 1,
            'score_perfect' => fn () => $session['score'] === 100,
            'xp_100' => fn () => $stat->xp >= 100,
            'xp_500' => fn () => $stat->xp >= 500,
            'sessions_10' => fn () => $stat->sessions >= 10,
            'serie_3' => fn () => $stat->max_serie >= 3,
            'serie_7' => fn () => $stat->max_serie >= 7,
            'phrases_master' => fn () => $stat->phrases_sessions >= 20,
        ];

        $existing = $this->keysForLanguage($userId, $languageId)->all();
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

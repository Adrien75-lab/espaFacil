<?php

namespace App\Repositories;

use App\Models\UserProgress;
use App\Models\UserStat;
use Illuminate\Support\Collection;

class UserProgressRepository
{
    public function statFor(int $userId, int $languageId): UserStat
    {
        return UserStat::firstOrCreate(
            ['user_id' => $userId, 'language_id' => $languageId],
            ['xp' => 0, 'sessions' => 0, 'max_serie' => 0, 'phrases_sessions' => 0, 'activity_days' => []]
        );
    }

    /**
     * @return Collection<int, UserStat>
     */
    public function statsForUser(int $userId): Collection
    {
        return UserStat::where('user_id', $userId)->get();
    }

    /**
     * @return Collection<int, UserProgress>
     */
    public function progressRowsForLanguage(int $userId, int $languageId): Collection
    {
        return UserProgress::where('user_id', $userId)
            ->where('language_id', $languageId)
            ->get(['theme_key', 'level', 'best_score', 'total_seen']);
    }

    /**
     * @param  array{theme: string, level: string, score: int, total: int}  $data
     */
    public function recordThemeProgress(int $userId, int $languageId, array $data): void
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

    public function xpForDate(int $userId, string $date): int
    {
        return (int) $this->statsForUser($userId)
            ->sum(fn (UserStat $stat) => ($stat->xp_history ?? [])[$date] ?? 0);
    }
}

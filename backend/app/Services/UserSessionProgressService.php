<?php

namespace App\Services;

use App\Assemblers\UserSessionResultAssembler;
use App\Enums\ExerciseMode;
use App\Models\Language;
use App\Models\User;
use App\Models\UserStat;
use App\Repositories\UserBadgeRepository;
use App\Repositories\UserProgressRepository;
use Illuminate\Support\Carbon;

class UserSessionProgressService
{
    public function __construct(
        private readonly LingoRewardService $lingos,
        private readonly StreakService $streaks,
        private readonly UserProgressRepository $progress,
        private readonly UserBadgeRepository $badges,
        private readonly UserSessionResultAssembler $result,
    ) {}

    /**
     * @param  array{language: string, theme: string, level: string, mode: string, score: int, xp_gained: int, correct: int, total: int}  $data
     * @return array<string, mixed>
     */
    public function record(User $user, array $data): array
    {
        $language = Language::where('code', $data['language'])->firstOrFail();
        $today = Carbon::today()->toDateString();
        $stat = $this->progress->statFor($user->id, $language->id);
        $days = $this->activityDaysWithToday($stat->activity_days ?? [], $today);
        $streak = $this->streaks->compute($days);

        $this->updateStat($stat, $data, $days, $today, $streak);
        $this->progress->recordThemeProgress($user->id, $language->id, $data);

        $newBadges = $this->badges->unlockForSession($user->id, $language->id, $stat, $data);
        $xpToday = $this->progress->xpForDate($user->id, $today);
        $goal = $user->daily_goal_xp ?? 50;
        $lingoRewards = $this->lingos->awardForSession($user, $data, $xpToday, $goal, $streak);

        return $this->result->assemble($user, $stat, $streak, $newBadges, $lingoRewards, $xpToday, $goal);
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
}

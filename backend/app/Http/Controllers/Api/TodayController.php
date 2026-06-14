<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserStat;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class TodayController extends Controller
{
    /**
     * GET /api/me/today
     * XP gagné aujourd'hui (toutes langues) + objectif + streak.
     */
    public function index(Request $request): JsonResponse
    {
        $user = $request->user();
        $today = Carbon::today()->toDateString();

        $stats = UserStat::where('user_id', $user->id)->get();

        // XP aujourd'hui = somme de xp_history[$today] sur toutes les langues
        $xpToday = 0;
        $currentStreak = 0;
        foreach ($stats as $s) {
            $hist = $s->xp_history ?? [];
            $xpToday += $hist[$today] ?? 0;
            $streak = $this->computeStreak($s->activity_days ?? []);
            $currentStreak = max($currentStreak, $streak);
        }

        $goal = $user->daily_goal_xp ?? 50;

        return response()->json([
            'xp_today' => $xpToday,
            'daily_goal' => $goal,
            'goal_reached' => $xpToday >= $goal,
            'streak' => $currentStreak,
            'played_today' => $xpToday > 0,
        ]);
    }

    /**
     * PUT /api/me/goal
     * Met à jour l'objectif quotidien.
     */
    public function updateGoal(Request $request): JsonResponse
    {
        $data = $request->validate([
            'daily_goal_xp' => 'required|integer|in:20,50,100,200',
        ]);

        $request->user()->update(['daily_goal_xp' => $data['daily_goal_xp']]);

        return response()->json(['daily_goal' => $data['daily_goal_xp']]);
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
            if ((int) $current->diffInDays($prev) === 1) {
                $streak++;
                $current = $prev;
            } else {
                break;
            }
        }

        return $streak;
    }
}

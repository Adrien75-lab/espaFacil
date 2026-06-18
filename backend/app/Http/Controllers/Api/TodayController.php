<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserStat;
use App\Services\LingoRewardService;
use App\Services\StreakService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class TodayController extends Controller
{
    public function index(Request $request, LingoRewardService $lingos, StreakService $streaks): JsonResponse
    {
        $user = $request->user();
        $today = Carbon::today()->toDateString();
        $stats = UserStat::where('user_id', $user->id)->get();

        $xpToday = 0;
        $currentStreak = 0;
        foreach ($stats as $stat) {
            $history = $stat->xp_history ?? [];
            $xpToday += $history[$today] ?? 0;
            $currentStreak = max($currentStreak, $streaks->compute($stat->activity_days ?? []));
        }

        $goal = $user->daily_goal_xp ?? 50;

        return response()->json([
            'xp_today' => $xpToday,
            'daily_goal' => $goal,
            'goal_reached' => $xpToday >= $goal,
            'streak' => $currentStreak,
            'played_today' => $xpToday > 0,
            'lingos_balance' => $user->lingos_balance ?? 0,
            'lingos_today' => $lingos->earnedToday($user->id),
            'next_lingo_bonus' => $lingos->nextDailyBonus($xpToday, $goal),
        ]);
    }

    public function updateGoal(Request $request): JsonResponse
    {
        $data = $request->validate([
            'daily_goal_xp' => 'required|integer|in:20,50,100,200',
        ]);

        $request->user()->update(['daily_goal_xp' => $data['daily_goal_xp']]);

        return response()->json(['daily_goal' => $data['daily_goal_xp']]);
    }
}

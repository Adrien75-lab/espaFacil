<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserStat;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LeaderboardController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        // Top 20 users by total XP (sum across all languages)
        $top = DB::table('user_stats')
            ->join('users', 'users.id', '=', 'user_stats.user_id')
            ->select('users.id', 'users.name', DB::raw('SUM(user_stats.xp) as total_xp'))
            ->groupBy('users.id', 'users.name')
            ->orderByDesc('total_xp')
            ->limit(20)
            ->get()
            ->map(fn ($row, $i) => [
                'rank'     => $i + 1,
                'id'       => $row->id,
                'name'     => $row->name,
                'total_xp' => (int) $row->total_xp,
            ]);

        // Rank of the authenticated user (if any)
        $myRank = null;
        $myXp   = null;
        $user   = $request->user();

        if ($user) {
            $myXp = (int) UserStat::where('user_id', $user->id)->sum('xp');

            // Count users with more XP
            $above = DB::table('user_stats')
                ->select('user_id', DB::raw('SUM(xp) as total_xp'))
                ->groupBy('user_id')
                ->havingRaw('SUM(xp) > ?', [$myXp])
                ->count();

            $myRank = $above + 1;
        }

        return response()->json([
            'leaderboard' => $top,
            'my_rank'     => $myRank,
            'my_xp'       => $myXp,
        ]);
    }
}

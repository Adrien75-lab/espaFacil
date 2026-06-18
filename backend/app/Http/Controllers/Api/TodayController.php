<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\TodaySummaryService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TodayController extends Controller
{
    public function index(Request $request, TodaySummaryService $today): JsonResponse
    {
        return response()->json($today->payloadFor($request->user()));
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

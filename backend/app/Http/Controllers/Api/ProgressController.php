<?php

namespace App\Http\Controllers\Api;

use App\Enums\ExerciseMode;
use App\Enums\LearningLevel;
use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\UserBadge;
use App\Models\UserProgress;
use App\Models\UserStat;
use App\Services\UserSessionProgressService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProgressController extends Controller
{
    public function show(Request $request): JsonResponse
    {
        $language = Language::where('code', $request->query('language', 'es'))->firstOrFail();
        $user = $request->user();

        $stat = UserStat::firstOrCreate(
            ['user_id' => $user->id, 'language_id' => $language->id],
            ['xp' => 0, 'sessions' => 0, 'max_serie' => 0, 'phrases_sessions' => 0, 'activity_days' => []]
        );

        $progress = UserProgress::where('user_id', $user->id)
            ->where('language_id', $language->id)
            ->get(['theme_key', 'level', 'best_score', 'total_seen']);

        $badges = UserBadge::where('user_id', $user->id)
            ->where('language_id', $language->id)
            ->pluck('badge_key');

        return response()->json(compact('stat', 'progress', 'badges'));
    }

    public function session(Request $request, UserSessionProgressService $progress): JsonResponse
    {
        $data = $request->validate([
            'language' => 'required|string|size:2',
            'theme' => 'required|string',
            'level' => 'required|in:'.implode(',', LearningLevel::values()),
            'mode' => 'required|in:'.implode(',', ExerciseMode::values()),
            'score' => 'required|integer|min:0|max:100',
            'xp_gained' => 'required|integer|min:0',
            'correct' => 'required|integer|min:0',
            'total' => 'required|integer|min:1',
        ]);

        return response()->json($progress->record($request->user(), $data));
    }
}

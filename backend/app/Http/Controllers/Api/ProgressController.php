<?php

namespace App\Http\Controllers\Api;

use App\Enums\ExerciseMode;
use App\Enums\LearningLevel;
use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Repositories\UserBadgeRepository;
use App\Repositories\UserProgressRepository;
use App\Services\UserSessionProgressService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProgressController extends Controller
{
    public function show(Request $request, UserProgressRepository $progress, UserBadgeRepository $badges): JsonResponse
    {
        $language = Language::where('code', $request->query('language', 'es'))->firstOrFail();
        $user = $request->user();

        $stat = $progress->statFor($user->id, $language->id);
        $progressRows = $progress->progressRowsForLanguage($user->id, $language->id);
        $badgeKeys = $badges->keysForLanguage($user->id, $language->id);

        return response()->json([
            'stat' => $stat,
            'progress' => $progressRows,
            'badges' => $badgeKeys,
        ]);
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

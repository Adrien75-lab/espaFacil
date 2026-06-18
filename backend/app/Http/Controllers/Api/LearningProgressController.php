<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\LearningProgressService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LearningProgressController extends Controller
{
    public function index(Request $request, LearningProgressService $progress): JsonResponse
    {
        return response()->json($progress->payloadForUser($request->user()->id));
    }
}

<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ConjugationController;
use App\Http\Controllers\Api\CustomWordController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\DialogueController;
use App\Http\Controllers\Api\GrammarController;
use App\Http\Controllers\Api\LanguageController;
use App\Http\Controllers\Api\LeaderboardController;
use App\Http\Controllers\Api\ProgressController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\StoryController;
use App\Http\Controllers\Api\TodayController;
use App\Http\Controllers\Api\WordController;
use Illuminate\Support\Facades\Route;

// Auth (SPA stateful via Sanctum cookie)
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/user', [AuthController::class, 'user'])->middleware('auth:sanctum');

// Protected: progression + mots perso
Route::middleware('auth:sanctum')->prefix('me')->group(function () {
    Route::get('/progress', [ProgressController::class,  'show']);
    Route::post('/session', [ProgressController::class,  'session']);
    Route::get('/custom-words', [CustomWordController::class, 'index']);
    Route::post('/custom-words', [CustomWordController::class, 'store']);
    Route::delete('/custom-words/{id}', [CustomWordController::class, 'destroy']);

    // Dashboard + aujourd'hui
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::get('/today', [TodayController::class, 'index']);
    Route::put('/goal', [TodayController::class, 'updateGoal']);

    // SRS
    Route::post('/reviews', [ReviewController::class, 'record']);
    Route::get('/reviews/due', [ReviewController::class, 'due']);
    Route::get('/reviews/difficult', [ReviewController::class, 'difficult']);
});

// Leaderboard — public, $request->user() resolved by Sanctum if cookie present
Route::get('/leaderboard', [LeaderboardController::class, 'index']);

// Contenu public : dialogues et histoires
Route::get('/dialogues', [DialogueController::class, 'index']);
Route::get('/stories', [StoryController::class,   'index']);
Route::get('/conjugations', [ConjugationController::class, 'index']);

// Public: catalogue
Route::prefix('languages')->group(function () {
    Route::get('/', [LanguageController::class, 'index']);
    Route::get('/{code}', [LanguageController::class, 'show']);
    Route::get('/{code}/themes', [LanguageController::class, 'themes']);
    Route::get('/{code}/themes/{themeKey}/words', [WordController::class, 'byTheme']);
    Route::get('/{code}/words', [WordController::class, 'byLanguage']);
    Route::get('/{code}/grammar', [GrammarController::class, 'show']);
});

<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LanguageController;
use App\Http\Controllers\Api\WordController;
use App\Http\Controllers\Api\GrammarController;

Route::prefix('languages')->group(function () {
    Route::get('/',                                      [LanguageController::class, 'index']);
    Route::get('/{code}',                               [LanguageController::class, 'show']);
    Route::get('/{code}/themes',                        [LanguageController::class, 'themes']);
    Route::get('/{code}/themes/{themeKey}/words',       [WordController::class, 'byTheme']);
    Route::get('/{code}/words',                         [WordController::class, 'byLanguage']);
    Route::get('/{code}/grammar',                       [GrammarController::class, 'show']);
});

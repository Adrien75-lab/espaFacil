<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\LanguageResource;
use App\Http\Resources\ThemeResource;
use App\Models\Language;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class LanguageController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return LanguageResource::collection(Language::all());
    }

    public function show(string $code): LanguageResource|JsonResponse
    {
        $lang = Language::with('themes')->where('code', $code)->first();
        if (! $lang) {
            return response()->json(['error' => 'Language not found'], 404);
        }

        return new LanguageResource($lang);
    }

    public function themes(string $code): AnonymousResourceCollection|JsonResponse
    {
        $lang = Language::where('code', $code)->first();
        if (! $lang) {
            return response()->json(['error' => 'Language not found'], 404);
        }

        $themes = $lang->themes()
            ->withCount([
                'words as words_debutant' => fn (Builder $query) => $query->where('level', 'debutant'),
                'words as words_intermediaire' => fn (Builder $query) => $query->where('level', 'intermediaire'),
                'words as words_avance' => fn (Builder $query) => $query->where('level', 'avance'),
                'words as examples_debutant' => fn (Builder $query) => $query->where('level', 'debutant')
                    ->whereNotNull('example_sentence')->where('example_sentence', '!=', ''),
                'words as examples_intermediaire' => fn (Builder $query) => $query->where('level', 'intermediaire')
                    ->whereNotNull('example_sentence')->where('example_sentence', '!=', ''),
                'words as examples_avance' => fn (Builder $query) => $query->where('level', 'avance')
                    ->whereNotNull('example_sentence')->where('example_sentence', '!=', ''),
            ])
            ->get();

        return ThemeResource::collection($themes);
    }
}

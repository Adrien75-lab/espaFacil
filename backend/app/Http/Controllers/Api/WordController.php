<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\WordResource;
use App\Models\Language;
use App\Models\Theme;
use App\Models\Word;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class WordController extends Controller
{
    public function byTheme(Request $request, string $code, string $themeKey): AnonymousResourceCollection|JsonResponse
    {
        $lang = Language::where('code', $code)->first();
        if (!$lang) return response()->json(['error' => 'Language not found'], 404);

        $theme = Theme::where('language_id', $lang->id)->where('key', $themeKey)->first();
        if (!$theme) return response()->json(['error' => 'Theme not found'], 404);

        $query = Word::where('theme_id', $theme->id);
        if ($request->filled('level')) {
            $query->where('level', $request->level);
        }
        return WordResource::collection($query->get());
    }

    public function byLanguage(Request $request, string $code): AnonymousResourceCollection|JsonResponse
    {
        $lang = Language::where('code', $code)->first();
        if (!$lang) return response()->json(['error' => 'Language not found'], 404);

        $query = Word::where('language_id', $lang->id);
        if ($request->filled('level'))     $query->where('level', $request->level);
        if ($request->filled('theme_key')) {
            $theme = Theme::where('language_id', $lang->id)->where('key', $request->theme_key)->first();
            if ($theme) $query->where('theme_id', $theme->id);
        }
        return WordResource::collection($query->get());
    }
}

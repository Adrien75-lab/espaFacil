<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\LanguageResource;
use App\Http\Resources\ThemeResource;
use App\Models\Language;
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
        if (!$lang) return response()->json(['error' => 'Language not found'], 404);
        return new LanguageResource($lang);
    }

    public function themes(string $code): AnonymousResourceCollection|JsonResponse
    {
        $lang = Language::where('code', $code)->first();
        if (!$lang) return response()->json(['error' => 'Language not found'], 404);
        return ThemeResource::collection($lang->themes);
    }
}

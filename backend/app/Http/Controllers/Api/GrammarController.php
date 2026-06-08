<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\GrammarTipResource;
use App\Models\Language;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class GrammarController extends Controller
{
    public function show(string $code): AnonymousResourceCollection|JsonResponse
    {
        $lang = Language::where('code', $code)->first();
        if (!$lang) return response()->json(['error' => 'Language not found'], 404);

        $tips = $lang->grammarTips()->orderBy('sort_order')->get();
        return GrammarTipResource::collection($tips);
    }
}

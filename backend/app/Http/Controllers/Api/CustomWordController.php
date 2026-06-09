<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CustomWord;
use App\Models\Language;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CustomWordController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $lang  = Language::where('code', $request->query('language', 'es'))->firstOrFail();
        $words = CustomWord::where('user_id', $request->user()->id)
            ->where('language_id', $lang->id)
            ->get();
        return response()->json($words);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'language'       => 'required|string|size:2',
            'term'           => 'required|string|max:255',
            'translation_fr' => 'required|string|max:255',
        ]);

        $lang = Language::where('code', $data['language'])->firstOrFail();
        $word = CustomWord::create([
            'user_id'        => $request->user()->id,
            'language_id'    => $lang->id,
            'term'           => $data['term'],
            'translation_fr' => $data['translation_fr'],
        ]);

        return response()->json($word, 201);
    }

    public function destroy(Request $request, int $id): JsonResponse
    {
        CustomWord::where('id', $id)
            ->where('user_id', $request->user()->id)
            ->firstOrFail()
            ->delete();
        return response()->json(null, 204);
    }
}

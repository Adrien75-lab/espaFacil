<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ConjugationVerb;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ConjugationController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $lang = $request->string('lang', 'es')->toString();

        $verbs = ConjugationVerb::query()
            ->with('forms')
            ->where('lang', $lang)
            ->orderBy('sort_order')
            ->get()
            ->map(fn (ConjugationVerb $verb) => [
                'infinitive' => $verb->infinitive,
                'translation' => $verb->translation_fr,
                'tenses' => $verb->forms
                    ->groupBy('tense')
                    ->map(fn ($forms) => $forms->map(fn ($form) => [
                        'pronoun' => $form->pronoun,
                        'form' => $form->form,
                    ])->values()),
            ]);

        return response()->json($verbs);
    }
}

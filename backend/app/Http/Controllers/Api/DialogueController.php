<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Dialogue;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class DialogueController extends Controller
{
    /**
     * GET /api/dialogues?lang=es
     * Retourne tous les scénarios d'une langue avec leurs étapes.
     */
    public function index(Request $request): JsonResponse
    {
        $lang = $request->query('lang', 'es');

        $dialogues = Dialogue::with('steps')
            ->where('lang', $lang)
            ->orderBy('sort_order')
            ->get()
            ->map(fn($d) => [
                'id'       => $d->scenario_key,
                'emoji'    => $d->emoji,
                'title'    => $d->title,
                'title_fr' => $d->title_fr,
                'steps'    => $d->steps->map(fn($s) => array_filter([
                    'type'          => $s->type,
                    'speaker'       => $s->speaker,
                    'text'          => $s->text,
                    'fr'            => $s->fr,
                    'options'       => $s->options,
                    'correctIndex'  => $s->correct_index,
                ], fn($v) => $v !== null))->values(),
            ]);

        return response()->json($dialogues);
    }
}

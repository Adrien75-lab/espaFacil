<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Story;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class StoryController extends Controller
{
    /**
     * GET /api/stories?lang=es
     * Retourne toutes les histoires d'une langue avec tokens et questions.
     */
    public function index(Request $request): JsonResponse
    {
        $lang  = $request->query('lang', 'es');
        $level = $request->query('level');

        $query = Story::with(['tokens', 'questions'])
            ->where('lang', $lang);

        if ($level !== null) {
            $query->where('level', (int) $level);
        }

        $stories = $query->orderBy('sort_order')
            ->get()
            ->map(fn($s) => [
                'id'        => $s->story_key,
                'emoji'     => $s->emoji,
                'title_fr'  => $s->title_fr,
                'level'     => $s->level,
                'tokens'    => $s->tokens->map(fn($t) => array_filter([
                    'text'   => $t->text,
                    'fr'     => $t->fr,
                    'punct'  => $t->is_punct ?: null,
                ], fn($v) => $v !== null && $v !== ''))->values(),
                'questions' => $s->questions->map(fn($q) => [
                    'question_fr'   => $q->question_fr,
                    'options'       => $q->options,
                    'correctIndex'  => $q->correct_index,
                ])->values(),
            ]);

        return response()->json($stories);
    }
}

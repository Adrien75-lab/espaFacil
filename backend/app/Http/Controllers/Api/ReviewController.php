<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\Word;
use App\Models\WordReview;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class ReviewController extends Controller
{
    /**
     * POST /api/me/reviews
     * Body: { word_id, language_code, correct }
     * Met à jour la planification SM-2 de ce mot.
     */
    public function record(Request $request): JsonResponse
    {
        $data = $request->validate([
            'word_id'       => 'required|integer|exists:words,id',
            'language_code' => 'required|string|max:8',
            'correct'       => 'required|boolean',
        ]);

        $review = WordReview::firstOrNew([
            'user_id' => $request->user()->id,
            'word_id' => $data['word_id'],
        ]);

        if (!$review->exists) {
            $review->language_code = $data['language_code'];
            $review->ease          = 2.5;
            $review->interval      = 1;
            $review->repetitions   = 0;
        }

        $review->times_seen++;
        $review->last_result = $data['correct'];

        if ($data['correct']) {
            $review->times_correct++;
            // SM-2: bonne réponse
            if ($review->repetitions === 0) {
                $review->interval = 1;
            } elseif ($review->repetitions === 1) {
                $review->interval = 6;
            } else {
                $review->interval = (int) round($review->interval * $review->ease);
            }
            $review->repetitions++;
            // EF' = EF + (0.1 − (5−q)*(0.08+(5−q)*0.02)) avec q=5 pour correct
            $review->ease = max(1.3, $review->ease + 0.1);
        } else {
            $review->times_wrong++;
            // SM-2: mauvaise réponse → reset
            $review->interval    = 1;
            $review->repetitions = 0;
            $review->ease        = max(1.3, $review->ease - 0.2);
        }

        $review->next_review_at = Carbon::now()->addDays($review->interval);
        $review->save();

        return response()->json([
            'interval'       => $review->interval,
            'next_review_at' => $review->next_review_at,
            'ease'           => round($review->ease, 2),
        ]);
    }

    /**
     * GET /api/me/reviews/due?language=xx&limit=20
     * Mots à réviser maintenant (next_review_at <= now).
     */
    public function due(Request $request): JsonResponse
    {
        $lang  = $request->query('language', '');
        $limit = min((int) $request->query('limit', 20), 100);

        $reviews = WordReview::with('word.theme')
            ->where('user_id', $request->user()->id)
            ->where('language_code', $lang)
            ->where('next_review_at', '<=', Carbon::now())
            ->orderBy('next_review_at')
            ->limit($limit)
            ->get();

        $words = $reviews->map(fn ($r) => $this->wordPayload($r->word, $r));

        return response()->json([
            'count' => $words->count(),
            'words' => $words,
        ]);
    }

    /**
     * GET /api/me/reviews/difficult?language=xx&limit=20
     * Mots les plus difficiles (taux d'échec élevé, min 3 vus).
     */
    public function difficult(Request $request): JsonResponse
    {
        $lang  = $request->query('language', '');
        $limit = min((int) $request->query('limit', 20), 100);

        $reviews = WordReview::with('word.theme')
            ->where('user_id', $request->user()->id)
            ->where('language_code', $lang)
            ->where('times_seen', '>=', 3)
            ->orderByRaw('CAST(times_wrong AS FLOAT) / CAST(times_seen AS FLOAT) DESC')
            ->limit($limit)
            ->get();

        $words = $reviews->map(fn ($r) => $this->wordPayload($r->word, $r));

        return response()->json([
            'count' => $words->count(),
            'words' => $words,
        ]);
    }

    private function wordPayload(Word $word, WordReview $review): array
    {
        return [
            'id'             => $word->id,
            'term'           => $word->term,
            'translation_fr' => $word->translation_fr,
            'transliteration'=> $word->transliteration,
            'clue'           => $word->clue,
            'example_sentence'=> $word->example_sentence,
            'example_gloss'  => $word->example_gloss ?? null,
            'theme_key'      => optional($word->theme)->key,
            'level'          => $word->level,
            // SRS meta
            'times_seen'     => $review->times_seen,
            'times_correct'  => $review->times_correct,
            'times_wrong'    => $review->times_wrong,
            'ease'           => round($review->ease, 2),
            'next_review_at' => $review->next_review_at,
        ];
    }
}

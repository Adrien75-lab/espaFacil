<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\UserBadge;
use App\Models\UserProgress;
use App\Models\UserStat;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class ProgressController extends Controller
{
    public function show(Request $request): JsonResponse
    {
        $lang = Language::where('code', $request->query('language', 'es'))->firstOrFail();
        $user = $request->user();

        $stat = UserStat::firstOrCreate(
            ['user_id' => $user->id, 'language_id' => $lang->id],
            ['xp' => 0, 'sessions' => 0, 'max_serie' => 0, 'phrases_sessions' => 0, 'activity_days' => []]
        );

        $progress = UserProgress::where('user_id', $user->id)
            ->where('language_id', $lang->id)
            ->get(['theme_key', 'level', 'best_score', 'total_seen']);

        $badges = UserBadge::where('user_id', $user->id)
            ->where('language_id', $lang->id)
            ->pluck('badge_key');

        return response()->json(compact('stat', 'progress', 'badges'));
    }

    public function session(Request $request): JsonResponse
    {
        $data = $request->validate([
            'language'  => 'required|string|size:2',
            'theme'     => 'required|string',
            'level'     => 'required|in:debutant,intermediaire,avance',
            'mode'      => 'required|in:quiz,cards,fill-blank,listen,speak,sentence-builder,dictee,paires,dialogue',
            'score'     => 'required|integer|min:0|max:100',
            'xp_gained' => 'required|integer|min:0',
            'correct'   => 'required|integer|min:0',
            'total'     => 'required|integer|min:1',
        ]);

        $lang  = Language::where('code', $data['language'])->firstOrFail();
        $user  = $request->user();
        $today = Carbon::today()->toDateString();

        // --- Stats ---
        $stat = UserStat::firstOrCreate(
            ['user_id' => $user->id, 'language_id' => $lang->id],
            ['xp' => 0, 'sessions' => 0, 'max_serie' => 0, 'phrases_sessions' => 0, 'activity_days' => []]
        );

        $days = $stat->activity_days ?? [];
        if (!in_array($today, $days)) {
            $days[] = $today;
            sort($days);
        }

        $streak = $this->computeStreak($days);

        $stat->xp        += $data['xp_gained'];
        $stat->sessions  += 1;
        $stat->max_serie  = max($stat->max_serie, $streak);
        if ($data['mode'] === 'fill-blank') $stat->phrases_sessions += 1;
        $stat->activity_days = $days;

        // XP history : map date → xp cumulé du jour (30 derniers jours)
        $hist = $stat->xp_history ?? [];
        $hist[$today] = ($hist[$today] ?? 0) + $data['xp_gained'];
        // Garder seulement les 30 dernières clés
        krsort($hist);
        $stat->xp_history = array_slice($hist, 0, 30, true);

        $stat->save();

        // --- Progress ---
        $prog = UserProgress::firstOrCreate(
            ['user_id' => $user->id, 'language_id' => $lang->id,
             'theme_key' => $data['theme'], 'level' => $data['level']],
            ['best_score' => 0, 'total_seen' => 0]
        );
        if ($data['score'] > $prog->best_score) $prog->best_score = $data['score'];
        $prog->total_seen += $data['total'];
        $prog->save();

        // --- Badges ---
        $newBadges = $this->checkBadges($user->id, $lang->id, $stat, $data);

        return response()->json([
            'stat'       => $stat->fresh(),
            'streak'     => $streak,
            'new_badges' => $newBadges,
        ]);
    }

    private function computeStreak(array $days): int
    {
        if (empty($days)) return 0;
        $today     = Carbon::today()->toDateString();
        $yesterday = Carbon::yesterday()->toDateString();
        $latest    = end($days);
        if ($latest !== $today && $latest !== $yesterday) return 0;

        $streak  = 1;
        $current = Carbon::parse($latest);
        for ($i = count($days) - 2; $i >= 0; $i--) {
            $prev = Carbon::parse($days[$i]);
            if ($current->diffInDays($prev) === 1) {
                $streak++;
                $current = $prev;
            } else {
                break;
            }
        }
        return $streak;
    }

    private function checkBadges(int $userId, int $langId, UserStat $stat, array $data): array
    {
        $definitions = [
            'first_session'  => fn() => $stat->sessions >= 1,
            'score_perfect'  => fn() => $data['score'] === 100,
            'xp_100'         => fn() => $stat->xp >= 100,
            'xp_500'         => fn() => $stat->xp >= 500,
            'sessions_10'    => fn() => $stat->sessions >= 10,
            'serie_3'        => fn() => $stat->max_serie >= 3,
            'serie_7'        => fn() => $stat->max_serie >= 7,
            'phrases_master' => fn() => $stat->phrases_sessions >= 20,
        ];

        $existing = UserBadge::where('user_id', $userId)
            ->where('language_id', $langId)
            ->pluck('badge_key')->toArray();

        $newBadges = [];
        foreach ($definitions as $key => $check) {
            if (!in_array($key, $existing) && $check()) {
                UserBadge::create([
                    'user_id'     => $userId,
                    'language_id' => $langId,
                    'badge_key'   => $key,
                    'unlocked_at' => now(),
                ]);
                $newBadges[] = $key;
            }
        }
        return $newBadges;
    }
}

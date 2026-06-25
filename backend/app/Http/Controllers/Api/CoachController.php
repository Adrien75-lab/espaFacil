<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserStat;
use App\Models\WordReview;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class CoachController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $user = $request->user();
        $tips = [];

        $stats = UserStat::with('language')
            ->where('user_id', $user->id)
            ->get();

        $now = Carbon::now();
        $today = Carbon::today()->toDateString();

        $dueCount = WordReview::where('user_id', $user->id)
            ->where('next_review_at', '<=', $now)
            ->count();

        if ($dueCount > 0) {
            $tips[] = [
                'type' => 'srs',
                'icon' => '🔁',
                'message' => $dueCount === 1
                    ? '1 mot est à réviser aujourd\'hui !'
                    : "$dueCount mots sont à réviser aujourd'hui !",
                'action' => '/review',
                'action_label' => 'Réviser',
                'priority' => 10,
            ];
        }

        $difficult = WordReview::where('user_id', $user->id)
            ->where('times_seen', '>=', 3)
            ->whereRaw('times_wrong > times_correct')
            ->limit(3)
            ->get();

        if ($difficult->isNotEmpty()) {
            $words = $difficult->pluck('term')->take(3)->join(', ');
            $tips[] = [
                'type' => 'difficult',
                'icon' => '💪',
                'message' => "Tu as du mal avec : $words. Entraîne-toi dessus !",
                'action' => '/difficult',
                'action_label' => 'S\'entraîner',
                'priority' => 8,
            ];
        }

        foreach ($stats as $stat) {
            $streak = $this->computeStreak($stat->activity_days ?? []);
            if ($streak >= 1) {
                $lastDay = end($stat->activity_days) ?: '';
                if ($lastDay !== $today) {
                    $tips[] = [
                        'type' => 'streak_danger',
                        'icon' => '🔥',
                        'message' => "Ta série de {$streak} jour" . ($streak > 1 ? 's' : '') . " en {$stat->language->name} est en danger !",
                        'action' => '/',
                        'action_label' => 'Jouer',
                        'priority' => 9,
                    ];
                }
            }
        }

        $modeXp = [];
        foreach ($stats as $s) {
            foreach ($s->mode_xp ?? [] as $mode => $xp) {
                $modeXp[$mode] = ($modeXp[$mode] ?? 0) + $xp;
            }
        }
        $allModes = ['quiz', 'cards', 'fill-blank', 'listen', 'speak', 'sentence-builder', 'dictee', 'paires', 'dialogue', 'anagram', 'stories', 'conjugaison', 'traduction', 'devinette'];
        $modeLabels = [
            'quiz' => 'Quiz', 'cards' => 'Flashcards', 'fill-blank' => 'Phrases à trous',
            'listen' => 'Écoute', 'speak' => 'Parler', 'sentence-builder' => 'Constructeur',
            'dictee' => 'Dictée', 'paires' => 'Paires', 'dialogue' => 'Dialogues',
            'anagram' => 'Anagrammes', 'stories' => 'Histoires', 'conjugaison' => 'Conjugaison',
            'traduction' => 'Traduction', 'devinette' => 'Devinettes',
        ];
        $unusedModes = array_filter($allModes, fn ($m) => ($modeXp[$m] ?? 0) === 0);
        if (!empty($unusedModes)) {
            $suggest = array_rand(array_flip($unusedModes));
            $label = $modeLabels[$suggest] ?? $suggest;
            $tips[] = [
                'type' => 'discover_mode',
                'icon' => '✨',
                'message' => "Tu n'as pas encore essayé le mode $label — ça pourrait booster ta mémoire !",
                'action' => '/' . $suggest,
                'action_label' => 'Essayer',
                'priority' => 3,
            ];
        }

        $totalSessions = $stats->sum('sessions');
        if ($totalSessions === 0) {
            $tips[] = [
                'type' => 'first_session',
                'icon' => '🚀',
                'message' => 'Bienvenue ! Lance ta première session pour commencer à progresser.',
                'action' => '/',
                'action_label' => 'C\'est parti',
                'priority' => 10,
            ];
        }

        $weakThemes = WordReview::where('user_id', $user->id)
            ->where('times_seen', '>=', 2)
            ->selectRaw('theme_key, AVG(CASE WHEN times_seen > 0 THEN CAST(times_wrong AS FLOAT) / times_seen ELSE 0 END) as error_rate, COUNT(*) as cnt')
            ->groupBy('theme_key')
            ->having('cnt', '>=', 3)
            ->orderByDesc('error_rate')
            ->first();

        if ($weakThemes && $weakThemes->error_rate > 0.4) {
            $tips[] = [
                'type' => 'weak_theme',
                'icon' => '📖',
                'message' => "Tu fais souvent des erreurs sur le thème « {$weakThemes->theme_key} » — révise-le !",
                'action' => '/',
                'action_label' => 'Réviser',
                'priority' => 6,
            ];
        }

        if ($totalSessions > 0 && $dueCount === 0 && empty($difficult->toArray())) {
            $tips[] = [
                'type' => 'encouragement',
                'icon' => '🌟',
                'message' => 'Tout est à jour ! Continue comme ça, tu progresses bien.',
                'action' => null,
                'action_label' => null,
                'priority' => 1,
            ];
        }

        usort($tips, fn ($a, $b) => $b['priority'] - $a['priority']);

        return response()->json(['tips' => array_slice($tips, 0, 4)]);
    }

    private function computeStreak(array $days): int
    {
        if (empty($days)) {
            return 0;
        }
        $today = Carbon::today()->toDateString();
        $yesterday = Carbon::yesterday()->toDateString();
        $latest = end($days);
        if ($latest !== $today && $latest !== $yesterday) {
            return 0;
        }
        $streak = 1;
        $current = Carbon::parse($latest);
        for ($i = count($days) - 2; $i >= 0; $i--) {
            $prev = Carbon::parse($days[$i]);
            if ((int) $current->diffInDays($prev) === 1) {
                $streak++;
                $current = $prev;
            } else {
                break;
            }
        }
        return $streak;
    }
}

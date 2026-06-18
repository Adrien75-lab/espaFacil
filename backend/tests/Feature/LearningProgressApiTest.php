<?php

namespace Tests\Feature;

use App\Models\Language;
use App\Models\Theme;
use App\Models\User;
use App\Models\UserProgress;
use App\Models\Word;
use App\Models\WordReview;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LearningProgressApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_learning_progress_exposes_pedagogical_statuses(): void
    {
        $user = User::factory()->create();
        $language = Language::create([
            'code' => 'es',
            'name' => 'Espagnol',
            'flag' => '🇪🇸',
            'voice_locale' => 'es-ES',
        ]);
        $theme = Theme::create([
            'language_id' => $language->id,
            'key' => 'restaurant',
            'name' => 'Restaurant',
            'emoji' => '🍽️',
        ]);

        $debutantWords = collect(range(1, 10))->map(fn (int $index) => Word::create([
            'language_id' => $language->id,
            'theme_id' => $theme->id,
            'level' => 'debutant',
            'term' => 'mot '.$index,
            'translation_fr' => 'mot '.$index,
        ]));
        Word::create([
            'language_id' => $language->id,
            'theme_id' => $theme->id,
            'level' => 'intermediaire',
            'term' => 'servilleta',
            'translation_fr' => 'serviette',
        ]);
        Word::create([
            'language_id' => $language->id,
            'theme_id' => $theme->id,
            'level' => 'avance',
            'term' => 'reserva',
            'translation_fr' => 'réservation',
        ]);

        UserProgress::create([
            'user_id' => $user->id,
            'language_id' => $language->id,
            'theme_key' => 'restaurant',
            'level' => 'debutant',
            'best_score' => 90,
            'total_seen' => 10,
        ]);
        UserProgress::create([
            'user_id' => $user->id,
            'language_id' => $language->id,
            'theme_key' => 'restaurant',
            'level' => 'intermediaire',
            'best_score' => 90,
            'total_seen' => 1,
        ]);

        WordReview::create([
            'user_id' => $user->id,
            'word_id' => $debutantWords->first()->id,
            'language_code' => 'es',
            'next_review_at' => now()->subDay(),
            'times_seen' => 3,
            'times_correct' => 2,
            'times_wrong' => 1,
        ]);

        $this->actingAs($user)
            ->getJson('/api/me/learning-progress')
            ->assertOk()
            ->assertJsonPath('languages.0.code', 'es')
            ->assertJsonPath('languages.0.summary.available_levels', 3)
            ->assertJsonPath('languages.0.summary.review_levels', 1)
            ->assertJsonPath('languages.0.themes.0.key', 'restaurant')
            ->assertJsonPath('languages.0.themes.0.levels.0.status', 'review')
            ->assertJsonPath('languages.0.themes.0.levels.0.mastery_percent', 93)
            ->assertJsonPath('languages.0.themes.0.levels.1.status', 'mastered')
            ->assertJsonPath('languages.0.themes.0.levels.2.status', 'not_started');
    }
}

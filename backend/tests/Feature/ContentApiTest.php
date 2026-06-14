<?php

namespace Tests\Feature;

use Database\Seeders\ConjugationSeeder;
use Database\Seeders\DialogueSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class ContentApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_dialogues_are_exposed_by_language(): void
    {
        $this->seed(DialogueSeeder::class);

        $this->getJson('/api/dialogues?lang=es')
            ->assertOk()
            ->assertJsonCount(20)
            ->assertJsonPath('0.id', 'es-cafe')
            ->assertJsonPath('8.id', 'es-airport')
            ->assertJsonCount(6, '8.steps')
            ->assertJsonPath('8.steps.1.type', 'choice')
            ->assertJsonPath('8.steps.1.options.0.text', 'Está en la primera planta.')
            ->assertJsonPath('8.steps.3.type', 'choice')
            ->assertJsonPath('8.steps.3.options.1.text', 'No, eso es todo, gracias.')
            ->assertJsonPath('8.steps.5.type', 'choice')
            ->assertJsonPath('8.steps.5.options.2.text', 'Igualmente, hasta luego.')
            ->assertJsonStructure(['*' => ['id', 'emoji', 'title', 'title_fr', 'steps']]);

        $choiceCounts = DB::table('dialogues')
            ->join('dialogue_steps', 'dialogue_steps.dialogue_id', '=', 'dialogues.id')
            ->where('dialogues.sort_order', '>=', 8)
            ->where('dialogue_steps.type', 'choice')
            ->groupBy('dialogues.id')
            ->selectRaw('dialogues.id, count(*) as choices')
            ->pluck('choices', 'dialogues.id');

        $this->assertCount(168, $choiceCounts);
        foreach ($choiceCounts as $choiceCount) {
            $this->assertSame(3, (int) $choiceCount);
        }
    }

    public function test_conjugations_are_exposed_by_language(): void
    {
        $this->seed(ConjugationSeeder::class);

        $this->getJson('/api/conjugations?lang=es')
            ->assertOk()
            ->assertJsonCount(6)
            ->assertJsonPath('0.infinitive', 'ser')
            ->assertJsonStructure(['*' => ['infinitive', 'translation', 'tenses']]);
    }

    public function test_content_seeders_can_be_run_more_than_once(): void
    {
        $this->seed([DialogueSeeder::class, ConjugationSeeder::class]);
        $this->seed([DialogueSeeder::class, ConjugationSeeder::class]);

        $this->assertDatabaseCount('dialogues', 280);
        $this->assertDatabaseCount('conjugation_verbs', 84);
        $this->assertDatabaseCount('conjugation_forms', 1512);
    }
}

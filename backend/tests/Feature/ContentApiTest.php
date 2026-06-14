<?php

namespace Tests\Feature;

use Database\Seeders\ConjugationSeeder;
use Database\Seeders\DialogueSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContentApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_dialogues_are_exposed_by_language(): void
    {
        $this->seed(DialogueSeeder::class);

        $this->getJson('/api/dialogues?lang=es')
            ->assertOk()
            ->assertJsonCount(8)
            ->assertJsonPath('0.id', 'es-cafe')
            ->assertJsonStructure(['*' => ['id', 'emoji', 'title', 'title_fr', 'steps']]);
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

        $this->assertDatabaseCount('dialogues', 112);
        $this->assertDatabaseCount('conjugation_verbs', 84);
        $this->assertDatabaseCount('conjugation_forms', 1512);
    }
}

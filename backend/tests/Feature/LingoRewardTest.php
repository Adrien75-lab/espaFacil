<?php

namespace Tests\Feature;

use App\Models\Language;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LingoRewardTest extends TestCase
{
    use RefreshDatabase;

    public function test_session_awards_lingos_for_daily_milestones_without_duplicates(): void
    {
        $user = User::factory()->create(['daily_goal_xp' => 20]);
        Language::create([
            'code' => 'es',
            'name' => 'Espagnol',
            'flag' => '🇪🇸',
            'voice_locale' => 'es-ES',
        ]);

        $payload = [
            'language' => 'es',
            'theme' => 'restaurant',
            'level' => 'debutant',
            'mode' => 'quiz',
            'score' => 100,
            'xp_gained' => 20,
            'correct' => 4,
            'total' => 4,
        ];

        $this->actingAs($user)
            ->postJson('/api/me/session', $payload)
            ->assertOk()
            ->assertJsonPath('lingos_gained', 8)
            ->assertJsonPath('lingos_balance', 8);

        $this->actingAs($user)
            ->postJson('/api/me/session', $payload)
            ->assertOk()
            ->assertJsonPath('lingos_gained', 8)
            ->assertJsonPath('lingos_balance', 16)
            ->assertJsonPath('next_lingo_bonus.remaining_xp', 60);

        $this->assertDatabaseHas('user_lingo_rewards', [
            'user_id' => $user->id,
            'reward_key' => 'daily_goal_1x',
            'amount' => 5,
        ]);
        $this->assertDatabaseHas('user_lingo_rewards', [
            'user_id' => $user->id,
            'reward_key' => 'daily_goal_2x',
            'amount' => 8,
        ]);
        $this->assertDatabaseCount('user_lingo_rewards', 3);
    }
}

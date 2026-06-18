<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedInteger('lingos_balance')->default(0)->after('daily_goal_xp');
        });

        Schema::create('user_lingo_rewards', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('reward_key', 80);
            $table->unsignedSmallInteger('amount');
            $table->date('earned_on');
            $table->json('metadata')->nullable();
            $table->timestamps();
            $table->unique(['user_id', 'reward_key', 'earned_on']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_lingo_rewards');

        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('lingos_balance');
        });
    }
};

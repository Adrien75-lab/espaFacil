<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('user_stats', function (Blueprint $table) {
            // JSON map { "quiz": 120, "cards": 45, "dialogue": 80, ... }
            $table->json('mode_xp')->nullable()->after('xp_history');
        });
    }

    public function down(): void
    {
        Schema::table('user_stats', function (Blueprint $table) {
            $table->dropColumn('mode_xp');
        });
    }
};

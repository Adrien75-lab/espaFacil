<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('user_stats', function (Blueprint $table) {
            // JSON map { "2026-06-10": 35, "2026-06-11": 72, ... } — 30 derniers jours max
            $table->json('xp_history')->nullable()->after('activity_days');
        });
    }

    public function down(): void
    {
        Schema::table('user_stats', function (Blueprint $table) {
            $table->dropColumn('xp_history');
        });
    }
};

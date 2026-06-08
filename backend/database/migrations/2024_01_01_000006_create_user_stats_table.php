<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('user_stats', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('language_id')->constrained()->cascadeOnDelete();
            $table->unsignedInteger('xp')->default(0);
            $table->unsignedSmallInteger('sessions')->default(0);
            $table->unsignedSmallInteger('max_serie')->default(0);
            $table->unsignedSmallInteger('phrases_sessions')->default(0);
            $table->json('activity_days')->nullable();
            $table->timestamps();
            $table->unique(['user_id', 'language_id']);
        });
    }
    public function down(): void { Schema::dropIfExists('user_stats'); }
};

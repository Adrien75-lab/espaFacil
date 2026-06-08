<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('user_progress', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('language_id')->constrained()->cascadeOnDelete();
            $table->string('theme_key', 50);
            $table->enum('level', ['debutant', 'intermediaire', 'avance']);
            $table->unsignedTinyInteger('best_score')->default(0);
            $table->unsignedSmallInteger('total_seen')->default(0);
            $table->timestamps();
            $table->unique(['user_id', 'language_id', 'theme_key', 'level']);
        });
    }
    public function down(): void { Schema::dropIfExists('user_progress'); }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('dialogues', function (Blueprint $table) {
            $table->id();
            $table->string('lang', 5)->index();
            $table->string('scenario_key', 60)->index();
            $table->string('emoji', 10);
            $table->string('title', 120);
            $table->string('title_fr', 120);
            $table->unsignedTinyInteger('sort_order')->default(0);
            $table->timestamps();

            $table->unique(['lang', 'scenario_key']);
        });

        Schema::create('dialogue_steps', function (Blueprint $table) {
            $table->id();
            $table->foreignId('dialogue_id')->constrained()->cascadeOnDelete();
            $table->unsignedSmallInteger('position');
            $table->enum('type', ['line', 'choice']);
            $table->char('speaker', 1)->nullable();   // 'A' ou 'B' pour les lignes
            $table->text('text');                      // texte dans la langue cible
            $table->text('fr');                        // traduction française
            $table->json('options')->nullable();       // [{text, fr}] pour les choix
            $table->unsignedTinyInteger('correct_index')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('dialogue_steps');
        Schema::dropIfExists('dialogues');
    }
};

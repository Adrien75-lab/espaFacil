<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('conjugation_verbs', function (Blueprint $table) {
            $table->id();
            $table->string('lang', 5)->index();
            $table->string('infinitive', 120);
            $table->string('translation_fr', 120);
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->timestamps();

            $table->unique(['lang', 'infinitive']);
        });

        Schema::create('conjugation_forms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('verb_id')->constrained('conjugation_verbs')->cascadeOnDelete();
            $table->string('tense', 80);
            $table->string('pronoun', 120);
            $table->string('form', 180);
            $table->unsignedSmallInteger('position');
            $table->timestamps();

            $table->unique(['verb_id', 'tense', 'position']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('conjugation_forms');
        Schema::dropIfExists('conjugation_verbs');
    }
};

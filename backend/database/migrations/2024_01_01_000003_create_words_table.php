<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('words', function (Blueprint $table) {
            $table->id();
            $table->foreignId('language_id')->constrained()->cascadeOnDelete();
            $table->foreignId('theme_id')->constrained()->cascadeOnDelete();
            $table->enum('level', ['debutant', 'intermediaire', 'avance']);
            $table->string('term', 255);
            $table->string('translation_fr', 255);
            $table->string('transliteration', 255)->nullable();
            $table->string('clue', 255)->nullable();
            $table->text('example_sentence')->nullable();
            $table->text('mnemonic')->nullable();
            $table->timestamps();
            $table->index(['language_id', 'theme_id', 'level']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('words');
    }
};

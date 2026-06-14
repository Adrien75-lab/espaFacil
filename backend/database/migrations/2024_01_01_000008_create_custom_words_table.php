<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('custom_words', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('language_id')->constrained()->cascadeOnDelete();
            $table->string('term', 255);
            $table->string('translation_fr', 255);
            $table->timestamps();
            $table->index(['user_id', 'language_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('custom_words');
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('stories', function (Blueprint $table) {
            $table->id();
            $table->string('lang', 5)->index();
            $table->string('story_key', 60);
            $table->string('emoji', 10);
            $table->string('title_fr', 120);
            $table->unsignedTinyInteger('sort_order')->default(0);
            $table->timestamps();

            $table->unique(['lang', 'story_key']);
        });

        Schema::create('story_tokens', function (Blueprint $table) {
            $table->id();
            $table->foreignId('story_id')->constrained()->cascadeOnDelete();
            $table->unsignedSmallInteger('position');
            $table->string('text', 200);
            $table->string('fr', 200)->default('');
            $table->boolean('is_punct')->default(false);
        });

        Schema::create('story_questions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('story_id')->constrained()->cascadeOnDelete();
            $table->unsignedTinyInteger('position');
            $table->text('question_fr');
            $table->json('options');          // [{text: string, fr: string}]
            $table->unsignedTinyInteger('correct_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('story_questions');
        Schema::dropIfExists('story_tokens');
        Schema::dropIfExists('stories');
    }
};

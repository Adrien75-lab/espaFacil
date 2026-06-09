<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('word_reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('word_id')->constrained()->cascadeOnDelete();
            $table->string('language_code', 8)->index();

            // SM-2 fields
            $table->float('ease')->default(2.5);        // EF: facilité (min 1.3)
            $table->unsignedSmallInteger('interval')->default(1);      // jours jusqu'à prochaine révision
            $table->unsignedSmallInteger('repetitions')->default(0);   // révisions consécutives réussies

            $table->dateTime('next_review_at')->nullable()->index();
            $table->boolean('last_result')->nullable();

            $table->unsignedInteger('times_seen')->default(0);
            $table->unsignedInteger('times_correct')->default(0);
            $table->unsignedInteger('times_wrong')->default(0);

            $table->timestamps();

            $table->unique(['user_id', 'word_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('word_reviews');
    }
};

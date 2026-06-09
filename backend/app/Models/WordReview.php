<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WordReview extends Model
{
    protected $fillable = [
        'user_id', 'word_id', 'language_code',
        'ease', 'interval', 'repetitions',
        'next_review_at', 'last_result',
        'times_seen', 'times_correct', 'times_wrong',
    ];

    protected $casts = [
        'next_review_at' => 'datetime',
        'last_result'    => 'boolean',
        'ease'           => 'float',
    ];

    public function user(): BelongsTo { return $this->belongsTo(User::class); }
    public function word(): BelongsTo { return $this->belongsTo(Word::class); }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $user_id
 * @property int $word_id
 * @property string $language_code
 * @property float $ease
 * @property int $interval
 * @property int $repetitions
 * @property Carbon|null $next_review_at
 * @property bool|null $last_result
 * @property int $times_seen
 * @property int $times_correct
 * @property int $times_wrong
 * @property-read int $total_words
 * @property-read int $total_seen
 * @property-read int $total_correct
 * @property-read int $total_wrong
 * @property-read int $due_count
 */
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
        'last_result' => 'boolean',
        'ease' => 'float',
    ];

    /**
     * @return BelongsTo<User, $this>
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return BelongsTo<Word, $this>
     */
    public function word(): BelongsTo
    {
        return $this->belongsTo(Word::class);
    }
}

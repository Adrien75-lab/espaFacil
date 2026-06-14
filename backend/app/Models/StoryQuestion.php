<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $story_id
 * @property int $position
 * @property string $question_fr
 * @property array<int, mixed> $options
 * @property int $correct_index
 */
class StoryQuestion extends Model
{
    public $timestamps = false;

    protected $fillable = ['story_id', 'position', 'question_fr', 'options', 'correct_index'];

    protected $casts = ['options' => 'array'];

    /**
     * @return BelongsTo<Story, $this>
     */
    public function story(): BelongsTo
    {
        return $this->belongsTo(Story::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $story_id
 * @property int $position
 * @property string $text
 * @property string $fr
 * @property bool $is_punct
 */
class StoryToken extends Model
{
    public $timestamps = false;

    protected $fillable = ['story_id', 'position', 'text', 'fr', 'is_punct'];

    protected $casts = ['is_punct' => 'boolean'];

    /**
     * @return BelongsTo<Story, $this>
     */
    public function story(): BelongsTo
    {
        return $this->belongsTo(Story::class);
    }
}

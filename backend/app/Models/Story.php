<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string $lang
 * @property string $story_key
 * @property string $emoji
 * @property string $title_fr
 * @property int $sort_order
 * @property int $level
 */
class Story extends Model
{
    protected $fillable = ['lang', 'story_key', 'emoji', 'title_fr', 'sort_order', 'level'];

    /**
     * @return HasMany<StoryToken, $this>
     */
    public function tokens(): HasMany
    {
        return $this->hasMany(StoryToken::class)->orderBy('position');
    }

    /**
     * @return HasMany<StoryQuestion, $this>
     */
    public function questions(): HasMany
    {
        return $this->hasMany(StoryQuestion::class)->orderBy('position');
    }
}

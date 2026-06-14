<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StoryToken extends Model
{
    public $timestamps = false;

    protected $fillable = ['story_id', 'position', 'text', 'fr', 'is_punct'];

    protected $casts = ['is_punct' => 'boolean'];

    public function story(): BelongsTo
    {
        return $this->belongsTo(Story::class);
    }
}

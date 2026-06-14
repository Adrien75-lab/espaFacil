<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DialogueStep extends Model
{
    protected $fillable = ['dialogue_id', 'position', 'type', 'speaker', 'text', 'fr', 'options', 'correct_index'];

    protected $casts = ['options' => 'array'];

    public function dialogue(): BelongsTo
    {
        return $this->belongsTo(Dialogue::class);
    }
}

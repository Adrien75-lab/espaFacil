<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $dialogue_id
 * @property int $position
 * @property string $type
 * @property string|null $speaker
 * @property string $text
 * @property string $fr
 * @property array<int, mixed>|null $options
 * @property int|null $correct_index
 */
class DialogueStep extends Model
{
    protected $fillable = ['dialogue_id', 'position', 'type', 'speaker', 'text', 'fr', 'options', 'correct_index'];

    protected $casts = ['options' => 'array'];

    /**
     * @return BelongsTo<Dialogue, $this>
     */
    public function dialogue(): BelongsTo
    {
        return $this->belongsTo(Dialogue::class);
    }
}

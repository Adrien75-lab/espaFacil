<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $language_id
 * @property string $section_title
 * @property array<int, mixed> $items
 * @property int $sort_order
 */
class GrammarTip extends Model
{
    protected $fillable = ['language_id', 'section_title', 'items', 'sort_order'];

    protected $casts = ['items' => 'array'];

    /**
     * @return BelongsTo<Language, $this>
     */
    public function language(): BelongsTo
    {
        return $this->belongsTo(Language::class);
    }
}

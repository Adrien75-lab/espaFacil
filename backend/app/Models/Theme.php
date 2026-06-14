<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property int $language_id
 * @property string $key
 * @property string $name
 * @property string $emoji
 * @property-read int $words_debutant
 * @property-read int $words_intermediaire
 * @property-read int $words_avance
 * @property-read int $examples_debutant
 * @property-read int $examples_intermediaire
 * @property-read int $examples_avance
 */
class Theme extends Model
{
    protected $fillable = ['language_id', 'key', 'name', 'emoji'];

    /**
     * @return BelongsTo<Language, $this>
     */
    public function language(): BelongsTo
    {
        return $this->belongsTo(Language::class);
    }

    /**
     * @return HasMany<Word, $this>
     */
    public function words(): HasMany
    {
        return $this->hasMany(Word::class);
    }
}

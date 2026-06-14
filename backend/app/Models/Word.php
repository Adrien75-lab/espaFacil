<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $language_id
 * @property int $theme_id
 * @property string $level
 * @property string $term
 * @property string $translation_fr
 * @property string|null $transliteration
 * @property string|null $clue
 * @property string|null $example_sentence
 * @property string|null $mnemonic
 * @property string|null $example_gloss
 */
class Word extends Model
{
    protected $fillable = [
        'language_id', 'theme_id', 'level', 'term', 'translation_fr',
        'transliteration', 'clue', 'example_sentence', 'mnemonic',
    ];

    /**
     * @return BelongsTo<Language, $this>
     */
    public function language(): BelongsTo
    {
        return $this->belongsTo(Language::class);
    }

    /**
     * @return BelongsTo<Theme, $this>
     */
    public function theme(): BelongsTo
    {
        return $this->belongsTo(Theme::class);
    }
}

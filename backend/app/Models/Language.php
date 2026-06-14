<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string $code
 * @property string $name
 * @property string $flag
 * @property string $voice_locale
 * @property bool $is_rtl
 * @property bool $has_variants
 * @property array<int, mixed>|null $variants
 */
class Language extends Model
{
    protected $fillable = ['code', 'name', 'flag', 'voice_locale', 'is_rtl', 'has_variants', 'variants'];

    protected $casts = ['is_rtl' => 'boolean', 'has_variants' => 'boolean', 'variants' => 'array'];

    /**
     * @return HasMany<Theme, $this>
     */
    public function themes(): HasMany
    {
        return $this->hasMany(Theme::class);
    }

    /**
     * @return HasMany<Word, $this>
     */
    public function words(): HasMany
    {
        return $this->hasMany(Word::class);
    }

    /**
     * @return HasMany<GrammarTip, $this>
     */
    public function grammarTips(): HasMany
    {
        return $this->hasMany(GrammarTip::class);
    }
}

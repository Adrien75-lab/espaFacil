<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string $lang
 * @property string $infinitive
 * @property string $translation_fr
 * @property int $sort_order
 */
class ConjugationVerb extends Model
{
    protected $fillable = ['lang', 'infinitive', 'translation_fr', 'sort_order'];

    /**
     * @return HasMany<ConjugationForm, $this>
     */
    public function forms(): HasMany
    {
        return $this->hasMany(ConjugationForm::class, 'verb_id')
            ->orderBy('tense')
            ->orderBy('position');
    }
}

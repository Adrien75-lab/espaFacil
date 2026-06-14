<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ConjugationVerb extends Model
{
    protected $fillable = ['lang', 'infinitive', 'translation_fr', 'sort_order'];

    public function forms(): HasMany
    {
        return $this->hasMany(ConjugationForm::class, 'verb_id')
            ->orderBy('tense')
            ->orderBy('position');
    }
}

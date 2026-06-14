<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ConjugationForm extends Model
{
    protected $fillable = ['verb_id', 'tense', 'pronoun', 'form', 'position'];

    public function verb(): BelongsTo
    {
        return $this->belongsTo(ConjugationVerb::class, 'verb_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $verb_id
 * @property string $tense
 * @property string $pronoun
 * @property string $form
 * @property int $position
 */
class ConjugationForm extends Model
{
    protected $fillable = ['verb_id', 'tense', 'pronoun', 'form', 'position'];

    /**
     * @return BelongsTo<ConjugationVerb, $this>
     */
    public function verb(): BelongsTo
    {
        return $this->belongsTo(ConjugationVerb::class, 'verb_id');
    }
}

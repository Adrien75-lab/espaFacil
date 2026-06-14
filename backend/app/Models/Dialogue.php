<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Dialogue extends Model
{
    protected $fillable = ['lang', 'scenario_key', 'emoji', 'title', 'title_fr', 'sort_order'];

    public function steps(): HasMany
    {
        return $this->hasMany(DialogueStep::class)->orderBy('position');
    }
}

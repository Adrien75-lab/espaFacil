<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string $lang
 * @property string $scenario_key
 * @property string $emoji
 * @property string $title
 * @property string $title_fr
 * @property int $sort_order
 */
class Dialogue extends Model
{
    protected $fillable = ['lang', 'scenario_key', 'emoji', 'title', 'title_fr', 'sort_order'];

    /**
     * @return HasMany<DialogueStep, $this>
     */
    public function steps(): HasMany
    {
        return $this->hasMany(DialogueStep::class)->orderBy('position');
    }
}

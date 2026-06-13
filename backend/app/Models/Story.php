<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Story extends Model {
    protected $fillable = ['lang','story_key','emoji','title_fr','sort_order','level'];

    public function tokens(): HasMany {
        return $this->hasMany(StoryToken::class)->orderBy('position');
    }

    public function questions(): HasMany {
        return $this->hasMany(StoryQuestion::class)->orderBy('position');
    }
}

<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StoryQuestion extends Model {
    public $timestamps = false;
    protected $fillable = ['story_id','position','question_fr','options','correct_index'];
    protected $casts   = ['options' => 'array'];

    public function story(): BelongsTo {
        return $this->belongsTo(Story::class);
    }
}

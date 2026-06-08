<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GrammarTip extends Model {
    protected $fillable = ['language_id','section_title','items','sort_order'];
    protected $casts = ['items'=>'array'];

    public function language(): BelongsTo { return $this->belongsTo(Language::class); }
}

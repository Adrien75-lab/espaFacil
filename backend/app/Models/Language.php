<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Language extends Model {
    protected $fillable = ['code','name','flag','voice_locale','is_rtl','has_variants','variants'];
    protected $casts = ['is_rtl'=>'boolean','has_variants'=>'boolean','variants'=>'array'];

    public function themes(): HasMany   { return $this->hasMany(Theme::class); }
    public function words(): HasMany    { return $this->hasMany(Word::class); }
    public function grammarTips(): HasMany { return $this->hasMany(GrammarTip::class); }
}

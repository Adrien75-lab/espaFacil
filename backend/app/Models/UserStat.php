<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserStat extends Model
{
    protected $fillable = ['user_id', 'language_id', 'xp', 'sessions', 'max_serie', 'phrases_sessions', 'activity_days', 'xp_history'];

    protected $casts = ['activity_days' => 'array', 'xp_history' => 'array'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function language(): BelongsTo
    {
        return $this->belongsTo(Language::class);
    }
}

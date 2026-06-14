<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $user_id
 * @property int $language_id
 * @property int $xp
 * @property int $sessions
 * @property int $max_serie
 * @property int $phrases_sessions
 * @property array<int, string>|null $activity_days
 * @property array<string, int>|null $xp_history
 * @property array<string, int>|null $mode_xp
 */
class UserStat extends Model
{
    protected $fillable = ['user_id', 'language_id', 'xp', 'sessions', 'max_serie', 'phrases_sessions', 'activity_days', 'xp_history', 'mode_xp'];

    protected $casts = ['activity_days' => 'array', 'xp_history' => 'array', 'mode_xp' => 'array'];

    /**
     * @return BelongsTo<User, $this>
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return BelongsTo<Language, $this>
     */
    public function language(): BelongsTo
    {
        return $this->belongsTo(Language::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $user_id
 * @property int $language_id
 * @property string $theme_key
 * @property string $level
 * @property int $best_score
 * @property int $total_seen
 */
class UserProgress extends Model
{
    protected $fillable = ['user_id', 'language_id', 'theme_key', 'level', 'best_score', 'total_seen'];

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

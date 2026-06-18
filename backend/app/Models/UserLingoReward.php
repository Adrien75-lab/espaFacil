<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $user_id
 * @property string $reward_key
 * @property int $amount
 * @property Carbon $earned_on
 * @property array<string, mixed>|null $metadata
 */
class UserLingoReward extends Model
{
    protected $fillable = ['user_id', 'reward_key', 'amount', 'earned_on', 'metadata'];

    protected $casts = [
        'earned_on' => 'date',
        'metadata' => 'array',
    ];

    /**
     * @return BelongsTo<User, $this>
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

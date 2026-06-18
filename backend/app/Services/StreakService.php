<?php

namespace App\Services;

use Illuminate\Support\Carbon;

class StreakService
{
    /**
     * @param  array<int, string>  $days
     */
    public function compute(array $days): int
    {
        if (empty($days)) {
            return 0;
        }

        sort($days);

        $today = Carbon::today()->toDateString();
        $yesterday = Carbon::yesterday()->toDateString();
        $latest = end($days);
        if ($latest !== $today && $latest !== $yesterday) {
            return 0;
        }

        $streak = 1;
        $current = Carbon::parse($latest);
        for ($i = count($days) - 2; $i >= 0; $i--) {
            $previous = Carbon::parse($days[$i]);
            if ((int) $current->diffInDays($previous) !== 1) {
                break;
            }

            $streak++;
            $current = $previous;
        }

        return $streak;
    }
}

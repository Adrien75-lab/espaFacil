<?php

namespace App\Enums;

enum LearningLevel: string
{
    case Debutant = 'debutant';
    case Intermediaire = 'intermediaire';
    case Avance = 'avance';

    /**
     * @return array<int, string>
     */
    public static function values(): array
    {
        return array_map(fn (self $level) => $level->value, self::cases());
    }
}

<?php

namespace App\Enums;

enum ExerciseMode: string
{
    case Quiz = 'quiz';
    case Cards = 'cards';
    case FillBlank = 'fill-blank';
    case Listen = 'listen';
    case Speak = 'speak';
    case SentenceBuilder = 'sentence-builder';
    case Dictee = 'dictee';
    case Paires = 'paires';
    case Dialogue = 'dialogue';
    case Anagram = 'anagram';
    case Stories = 'stories';
    case Conjugaison = 'conjugaison';
    case Traduction = 'traduction';
    case Devinette = 'devinette';

    /**
     * @return array<int, string>
     */
    public static function values(): array
    {
        return array_map(fn (self $mode) => $mode->value, self::cases());
    }
}

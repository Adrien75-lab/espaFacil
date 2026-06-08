<?php
namespace App\Http\Resources;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WordResource extends JsonResource {
    public function toArray(Request $request): array {
        return [
            'id'               => $this->id,
            'level'            => $this->level,
            'term'             => $this->term,
            'translation_fr'   => $this->translation_fr,
            'transliteration'  => $this->transliteration,
            'clue'             => $this->clue,
            'example_sentence' => $this->example_sentence,
        ];
    }
}

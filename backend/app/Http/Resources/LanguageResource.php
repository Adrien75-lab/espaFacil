<?php

namespace App\Http\Resources;

use App\Models\Language;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin Language
 */
class LanguageResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'code' => $this->code,
            'name' => $this->name,
            'flag' => $this->flag,
            'voice_locale' => $this->voice_locale,
            'is_rtl' => (bool) $this->is_rtl,
            'has_variants' => (bool) $this->has_variants,
            'variants' => $this->variants,
            'themes' => ThemeResource::collection($this->whenLoaded('themes')),
        ];
    }
}

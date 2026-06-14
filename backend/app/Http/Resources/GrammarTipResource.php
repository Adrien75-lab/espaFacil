<?php

namespace App\Http\Resources;

use App\Models\GrammarTip;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin GrammarTip
 */
class GrammarTipResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'section_title' => $this->section_title,
            'items' => $this->items,
            'sort_order' => $this->sort_order,
        ];
    }
}

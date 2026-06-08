<?php
namespace App\Http\Resources;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GrammarTipResource extends JsonResource {
    public function toArray(Request $request): array {
        return [
            'section_title' => $this->section_title,
            'items'         => $this->items,
            'sort_order'    => $this->sort_order,
        ];
    }
}

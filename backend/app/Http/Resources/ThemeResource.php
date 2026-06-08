<?php
namespace App\Http\Resources;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ThemeResource extends JsonResource {
    public function toArray(Request $request): array {
        return [
            'key'   => $this->key,
            'name'  => $this->name,
            'emoji' => $this->emoji,
            'words' => WordResource::collection($this->whenLoaded('words')),
        ];
    }
}

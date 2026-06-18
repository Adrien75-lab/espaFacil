<?php

namespace App\Services;

use App\Assemblers\LearningProgressPayloadAssembler;
use App\Repositories\LearningProgressRepository;

class LearningProgressService
{
    public function __construct(
        private readonly LearningProgressRepository $repository,
        private readonly LearningProgressPayloadAssembler $assembler,
    ) {}

    /**
     * @return array{languages: array<int, array<string, mixed>>}
     */
    public function payloadForUser(int $userId): array
    {
        return $this->assembler->assemble(
            $this->repository->languagesWithThemesAndWords(),
            $this->repository->progressByLanguageThemeLevel($userId),
            $this->repository->reviewsByLanguageThemeLevel($userId),
        );
    }
}

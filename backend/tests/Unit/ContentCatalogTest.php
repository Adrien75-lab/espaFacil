<?php

namespace Tests\Unit;

use JsonException;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

class ContentCatalogTest extends TestCase
{
    /**
     * @throws JsonException
     */
    #[DataProvider('catalogProvider')]
    public function test_catalogs_cover_every_language_without_duplicate_keys(
        string $filename,
        int $expectedLanguages,
        string $identityField,
    ): void {
        $path = dirname(__DIR__, 2).'/database/data/'.$filename;
        $catalog = json_decode(file_get_contents($path), true, flags: JSON_THROW_ON_ERROR);

        $this->assertCount($expectedLanguages, $catalog);

        foreach ($catalog as $entries) {
            $keys = array_column($entries, $identityField);
            $this->assertSame($keys, array_values(array_unique($keys)));
        }
    }

    public static function catalogProvider(): array
    {
        return [
            'dialogues' => ['dialogues.json', 14, 'id'],
            'conjugaisons' => ['conjugations.json', 14, 'infinitive'],
        ];
    }

    public function test_dialogue_expansions_have_twelve_scenarios_for_every_language(): void
    {
        $path = dirname(__DIR__, 2).'/database/data/dialogue_expansions.json';
        $catalog = json_decode(file_get_contents($path), true, flags: JSON_THROW_ON_ERROR);

        $this->assertCount(12, $catalog['scenarios']);
        $this->assertCount(14, $catalog['languages']);

        foreach ($catalog['languages'] as $content) {
            $this->assertCount(12, $content['titles']);
            $this->assertCount(12, $content['prompts']);
            $this->assertCount(12, $content['responses']);
        }
    }
}

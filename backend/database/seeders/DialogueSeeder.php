<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use RuntimeException;

class DialogueSeeder extends Seeder
{
    public function run(): void
    {
        $catalog = $this->loadJson('dialogues.json');
        $expansions = $this->loadJson('dialogue_expansions.json');

        foreach ($this->expandDialogues($expansions) as $lang => $dialogues) {
            $catalog[$lang] = [...($catalog[$lang] ?? []), ...$dialogues];
        }

        DB::transaction(function () use ($catalog) {
            $retainedDialogueIds = [];
            $now = now();

            foreach ($catalog as $lang => $dialogues) {
                foreach ($dialogues as $sortOrder => $dialogue) {
                    DB::table('dialogues')->updateOrInsert(
                        ['lang' => $lang, 'scenario_key' => $dialogue['id']],
                        [
                            'emoji' => $dialogue['emoji'],
                            'title' => $dialogue['title'],
                            'title_fr' => $dialogue['title_fr'],
                            'sort_order' => $sortOrder,
                            'created_at' => $now,
                            'updated_at' => $now,
                        ],
                    );

                    $dialogueId = DB::table('dialogues')
                        ->where('lang', $lang)
                        ->where('scenario_key', $dialogue['id'])
                        ->value('id');

                    $retainedDialogueIds[] = $dialogueId;
                    DB::table('dialogue_steps')->where('dialogue_id', $dialogueId)->delete();

                    $steps = array_map(fn ($step, $position) => [
                        'dialogue_id' => $dialogueId,
                        'position' => $position,
                        'type' => $step['type'],
                        'speaker' => $step['speaker'] ?? null,
                        'text' => $step['text'],
                        'fr' => $step['fr'],
                        'options' => isset($step['options'])
                            ? json_encode($step['options'], JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR)
                            : null,
                        'correct_index' => $step['correctIndex'] ?? null,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ], $dialogue['steps'], array_keys($dialogue['steps']));

                    if ($steps !== []) {
                        DB::table('dialogue_steps')->insert($steps);
                    }
                }
            }

            DB::table('dialogues')->whereNotIn('id', $retainedDialogueIds)->delete();
        });
    }

    private function loadJson(string $filename): array
    {
        $data = json_decode(
            file_get_contents(database_path('data/'.$filename)),
            true,
            flags: JSON_THROW_ON_ERROR,
        );

        if (! is_array($data)) {
            throw new RuntimeException("Le catalogue {$filename} est invalide.");
        }

        return $data;
    }

    private function expandDialogues(array $expansions): array
    {
        $expanded = [];
        $scenarios = $expansions['scenarios'];
        $french = $expansions['french'];

        foreach ($expansions['languages'] as $lang => $content) {
            foreach ($scenarios as $index => [$slug, $emoji, $titleFr]) {
                $distractorIndexes = [($index + 3) % 12, ($index + 6) % 12, ($index + 9) % 12];
                $distractors = array_map(
                    fn (int $distractorIndex) => [
                        'text' => $content['responses'][$distractorIndex],
                        'fr' => $french['responses'][$distractorIndex],
                    ],
                    $distractorIndexes,
                );
                $mainCorrectIndex = $index % 4;
                $followUpCorrectIndex = ($index + 1) % 4;
                $closingCorrectIndex = ($index + 2) % 4;

                $expanded[$lang][] = [
                    'id' => $lang.'-'.$slug,
                    'emoji' => $emoji,
                    'title' => $content['titles'][$index],
                    'title_fr' => $titleFr,
                    'steps' => [
                        [
                            'type' => 'line',
                            'speaker' => 'A',
                            'text' => $content['prompts'][$index],
                            'fr' => $french['prompts'][$index],
                        ],
                        [
                            'type' => 'choice',
                            'text' => $content['prompts'][$index],
                            'fr' => $french['prompts'][$index],
                            'options' => $this->buildOptions(
                                $content['responses'][$index],
                                $french['responses'][$index],
                                $distractors,
                                $mainCorrectIndex,
                            ),
                            'correctIndex' => $mainCorrectIndex,
                        ],
                        [
                            'type' => 'line',
                            'speaker' => 'A',
                            'text' => $content['followUpPrompt'],
                            'fr' => $french['followUpPrompt'],
                        ],
                        [
                            'type' => 'choice',
                            'text' => $content['followUpPrompt'],
                            'fr' => $french['followUpPrompt'],
                            'options' => $this->buildOptions(
                                $content['followUpResponse'],
                                $french['followUpResponse'],
                                $distractors,
                                $followUpCorrectIndex,
                            ),
                            'correctIndex' => $followUpCorrectIndex,
                        ],
                        [
                            'type' => 'line',
                            'speaker' => 'A',
                            'text' => $content['closingPrompt'],
                            'fr' => $french['closingPrompt'],
                        ],
                        [
                            'type' => 'choice',
                            'text' => $content['closingPrompt'],
                            'fr' => $french['closingPrompt'],
                            'options' => $this->buildOptions(
                                $content['closingResponse'],
                                $french['closingResponse'],
                                $distractors,
                                $closingCorrectIndex,
                            ),
                            'correctIndex' => $closingCorrectIndex,
                        ],
                    ],
                ];
            }
        }

        return $expanded;
    }

    private function buildOptions(
        string $correctText,
        string $correctFrench,
        array $distractors,
        int $correctIndex,
    ): array {
        $options = $distractors;
        array_splice($options, $correctIndex, 0, [[
            'text' => $correctText,
            'fr' => $correctFrench,
        ]]);

        return $options;
    }
}

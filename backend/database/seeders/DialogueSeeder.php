<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use RuntimeException;

class DialogueSeeder extends Seeder
{
    public function run(): void
    {
        $catalog = json_decode(
            file_get_contents(database_path('data/dialogues.json')),
            true,
            flags: JSON_THROW_ON_ERROR,
        );

        if (! is_array($catalog)) {
            throw new RuntimeException('Le catalogue de dialogues est invalide.');
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
}

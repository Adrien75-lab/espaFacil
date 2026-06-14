<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use RuntimeException;

class ConjugationSeeder extends Seeder
{
    public function run(): void
    {
        $catalog = json_decode(
            file_get_contents(database_path('data/conjugations.json')),
            true,
            flags: JSON_THROW_ON_ERROR,
        );

        if (! is_array($catalog)) {
            throw new RuntimeException('Le catalogue de conjugaisons est invalide.');
        }

        DB::transaction(function () use ($catalog) {
            $retainedVerbIds = [];
            $now = now();

            foreach ($catalog as $lang => $verbs) {
                foreach ($verbs as $sortOrder => $verb) {
                    DB::table('conjugation_verbs')->updateOrInsert(
                        ['lang' => $lang, 'infinitive' => $verb['infinitive']],
                        [
                            'translation_fr' => $verb['translation'],
                            'sort_order' => $sortOrder,
                            'created_at' => $now,
                            'updated_at' => $now,
                        ],
                    );

                    $verbId = DB::table('conjugation_verbs')
                        ->where('lang', $lang)
                        ->where('infinitive', $verb['infinitive'])
                        ->value('id');

                    $retainedVerbIds[] = $verbId;
                    DB::table('conjugation_forms')->where('verb_id', $verbId)->delete();

                    $forms = [];
                    foreach ($verb['tenses'] as $tense => $entries) {
                        foreach ($entries as $position => $entry) {
                            $forms[] = [
                                'verb_id' => $verbId,
                                'tense' => $tense,
                                'pronoun' => $entry['pronoun'],
                                'form' => $entry['form'],
                                'position' => $position,
                                'created_at' => $now,
                                'updated_at' => $now,
                            ];
                        }
                    }

                    if ($forms !== []) {
                        DB::table('conjugation_forms')->insert($forms);
                    }
                }
            }

            DB::table('conjugation_verbs')->whereNotIn('id', $retainedVerbIds)->delete();
        });
    }
}

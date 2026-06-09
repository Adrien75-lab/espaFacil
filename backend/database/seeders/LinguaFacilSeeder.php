<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LinguaFacilSeeder extends Seeder
{
    public function run(): void
    {
        $data = json_decode(
            file_get_contents(database_path('data/linguafacil.json')),
            true
        );

        // --- Languages ---
        DB::table('languages')->delete();
        foreach ($data['languages'] as $lang) {
            DB::table('languages')->insertOrIgnore([
                'code'         => $lang['code'],
                'name'         => $lang['name'],
                'flag'         => $lang['flag'],
                'voice_locale' => $lang['voice_locale'],
                'is_rtl'       => $lang['is_rtl'] ? 1 : 0,
                'has_variants' => $lang['has_variants'] ? 1 : 0,
                'variants'     => $lang['variants'] ? json_encode($lang['variants']) : null,
                'created_at'   => now(),
                'updated_at'   => now(),
            ]);
        }

        $langIds = DB::table('languages')->pluck('id', 'code');

        // --- Themes ---
        DB::table('themes')->delete();
        $themeIds = [];
        foreach ($data['themes'] as $theme) {
            $id = DB::table('themes')->insertGetId([
                'language_id' => $langIds[$theme['language_code']],
                'key'         => $theme['key'],
                'name'        => $theme['name'],
                'emoji'       => $theme['emoji'],
                'created_at'  => now(),
                'updated_at'  => now(),
            ]);
            $themeIds[$theme['language_code'] . '.' . $theme['key']] = $id;
        }

        // --- Words ---
        DB::table('words')->delete();
        $wordsBatch = [];
        foreach ($data['words'] as $word) {
            $wordsBatch[] = [
                'language_id'     => $langIds[$word['language_code']],
                'theme_id'        => $themeIds[$word['language_code'] . '.' . $word['theme_key']],
                'level'           => $word['level'],
                'term'            => $word['term'],
                'translation_fr'  => $word['translation_fr'],
                'transliteration' => $word['transliteration'],
                'clue'            => $word['clue'],
                'example_sentence'=> $word['example_sentence'],
                'example_gloss'   => isset($word['example_gloss']) ? json_encode($word['example_gloss']) : null,
                'mnemonic'        => null,
                'created_at'      => now(),
                'updated_at'      => now(),
            ];
            if (count($wordsBatch) >= 200) {
                DB::table('words')->insert($wordsBatch);
                $wordsBatch = [];
            }
        }
        if ($wordsBatch) DB::table('words')->insert($wordsBatch);

        // --- Grammar tips ---
        DB::table('grammar_tips')->delete();
        foreach ($data['grammar_tips'] as $tip) {
            DB::table('grammar_tips')->insert([
                'language_id'   => $langIds[$tip['language_code']],
                'section_title' => $tip['section_title'],
                'items'         => json_encode($tip['items']),
                'sort_order'    => $tip['sort_order'],
                'created_at'    => now(),
                'updated_at'    => now(),
            ]);
        }

        $this->command->info('Seeded: ' . count($data['languages']) . ' langs, ' .
            count($data['themes']) . ' themes, ' . count($data['words']) . ' words, ' .
            count($data['grammar_tips']) . ' grammar tips.');
    }
}

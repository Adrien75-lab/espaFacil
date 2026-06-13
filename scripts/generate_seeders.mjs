/**
 * generate_seeders.mjs
 * Lit dialogues.ts et stories.ts, génère les seeders PHP Laravel.
 * Usage : node scripts/generate_seeders.mjs
 */

import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const __dir   = dirname(fileURLToPath(import.meta.url))
const root    = join(__dir, '..')

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Échappe les apostrophes pour PHP single-quote */
const esc = s => String(s ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'")

/**
 * Charge un fichier .ts et évalue la variable exportée.
 * Stratégie : slicing depuis le marqueur helper (avant toute déclaration TS)
 * pour éviter les problèmes de stripping d'interfaces/types multi-lignes.
 */
function loadTS(filePath, varName, startMarker) {
  let src = readFileSync(filePath, 'utf8')
  const start = src.indexOf(startMarker)
  if (start === -1) throw new Error(`Marqueur "${startMarker}" introuvable dans ${filePath}`)
  src = src.slice(start)
  src = src
    .replace(/: 'A' \| 'B'/g, '')
    .replace(/: \{ text: string; fr: string \}\[\]/g, '')
    .replace(/: string(\[\])?/g, '')
    .replace(/: number/g, '')
    .replace(/: boolean/g, '')
    .replace(/\?:/g, ':')
    .replace(/\): \w+(\[\])? =>/g, ') =>')
    .replace(/: Record<[^>]+>/g, '')
    .replace(/StoryToken\[\]/g, '')
    .replace(/DialogueStep\[\]/g, '')
    .replace(/: Story\[\]/g, '')
    .replace(/export const /g, 'const ')
  // eslint-disable-next-line no-eval
  return eval('(function(){\n' + src + '\nreturn ' + varName + ';\n})()')
}

// ─── Questions de compréhension (3 par histoire) ──────────────────────────────

const QUESTIONS = {
  cafe: [
    {
      question_fr: 'Où est-ce que le personnage s\'assoit ?',
      options: [
        { text: 'Près de la fenêtre' },
        { text: 'Au bar' },
        { text: 'Dehors en terrasse' },
        { text: 'Dans le couloir' },
      ],
      correct_index: 0,
    },
    {
      question_fr: 'Que commande le personnage ?',
      options: [
        { text: 'Un thé et un gâteau' },
        { text: 'Un café et un croissant' },
        { text: 'Un jus d\'orange' },
        { text: 'Rien, il repart' },
      ],
      correct_index: 1,
    },
    {
      question_fr: 'Comment le serveur accueille-t-il le client ?',
      options: [
        { text: 'Il est en colère' },
        { text: 'Il ignore le client' },
        { text: 'Il arrive et sourit' },
        { text: 'Il est absent' },
      ],
      correct_index: 2,
    },
  ],
  parc: [
    {
      question_fr: 'Avec qui le personnage se promène-t-il ?',
      options: [
        { text: 'Avec un ami' },
        { text: 'Avec son chien' },
        { text: 'Seul' },
        { text: 'Avec ses enfants' },
      ],
      correct_index: 1,
    },
    {
      question_fr: 'Comment est le temps dans le parc ?',
      options: [
        { text: 'Il pleut' },
        { text: 'Il y a du brouillard' },
        { text: 'Il fait beau et chaud' },
        { text: 'Il y a de la neige' },
      ],
      correct_index: 2,
    },
    {
      question_fr: 'Que fait le personnage à la fin ?',
      options: [
        { text: 'Il joue avec les enfants' },
        { text: 'Il s\'assoit sur un banc et se repose' },
        { text: 'Il rentre immédiatement' },
        { text: 'Il achète de la nourriture' },
      ],
      correct_index: 1,
    },
  ],
  marche: [
    {
      question_fr: 'À quel moment le personnage va-t-il au marché ?',
      options: [
        { text: 'Le soir' },
        { text: 'Le week-end' },
        { text: 'Chaque matin' },
        { text: 'Le midi' },
      ],
      correct_index: 2,
    },
    {
      question_fr: 'Qu\'est-ce que le personnage n\'achète PAS ?',
      options: [
        { text: 'Des fruits' },
        { text: 'Des légumes' },
        { text: 'Du poisson' },
        { text: 'Du pain' },
      ],
      correct_index: 2,
    },
    {
      question_fr: 'Comment le personnage rentre-t-il chez lui ?',
      options: [
        { text: 'En colère' },
        { text: 'Triste' },
        { text: 'Pressé' },
        { text: 'Content(e)' },
      ],
      correct_index: 3,
    },
  ],
  ecole: [
    {
      question_fr: 'Quand le personnage arrive-t-il à l\'école ?',
      options: [
        { text: 'En retard' },
        { text: 'Tôt' },
        { text: 'À midi' },
        { text: 'Le soir' },
      ],
      correct_index: 1,
    },
    {
      question_fr: 'Que fait le personnage en classe ?',
      options: [
        { text: 'Il dort' },
        { text: 'Il joue' },
        { text: 'Il ouvre son cahier et écoute' },
        { text: 'Il mange' },
      ],
      correct_index: 2,
    },
    {
      question_fr: 'Que fait le personnage à la fin de la journée ?',
      options: [
        { text: 'Il reste à l\'école' },
        { text: 'Il va au parc' },
        { text: 'Il range ses affaires et rentre' },
        { text: 'Il attend ses parents' },
      ],
      correct_index: 2,
    },
  ],
  restaurant2: [
    {
      question_fr: 'Où le personnage choisit-il de s\'asseoir ?',
      options: [
        { text: 'Au bar' },
        { text: 'En terrasse' },
        { text: 'Près de la fenêtre' },
        { text: 'Dans un coin sombre' },
      ],
      correct_index: 2,
    },
    {
      question_fr: 'Que recommande le serveur ?',
      options: [
        { text: 'La spécialité de la maison' },
        { text: 'Le plat du jour' },
        { text: 'Le dessert' },
        { text: 'Une boisson' },
      ],
      correct_index: 1,
    },
    {
      question_fr: 'Comment se sent le personnage après le repas ?',
      options: [
        { text: 'Déçu' },
        { text: 'Encore affamé' },
        { text: 'Malade' },
        { text: 'Satisfait' },
      ],
      correct_index: 3,
    },
  ],
  aeroport: [
    {
      question_fr: 'Que montre le personnage au contrôle ?',
      options: [
        { text: 'Son billet' },
        { text: 'Sa valise' },
        { text: 'Son passeport' },
        { text: 'Sa carte d\'embarquement' },
      ],
      correct_index: 2,
    },
    {
      question_fr: 'Où le personnage attend-il son vol ?',
      options: [
        { text: 'Dans un taxi' },
        { text: 'Dans la salle d\'embarquement' },
        { text: 'À l\'entrée de l\'aéroport' },
        { text: 'Dans un restaurant' },
      ],
      correct_index: 1,
    },
    {
      question_fr: 'Quand l\'avion décolle-t-il ?',
      options: [
        { text: 'Avec du retard' },
        { text: 'En avance' },
        { text: 'À l\'heure' },
        { text: 'Le lendemain' },
      ],
      correct_index: 2,
    },
  ],
}

function getQuestions(storyKey) {
  const k = storyKey.toLowerCase()
  if (k.includes('cafe') || k.includes('kafe') || k.includes('kissa') ||
      k.includes('cofee') || k.includes('kaffe') || k.includes('canting') || k.includes('kissa'))
    return QUESTIONS.cafe
  if (k.includes('parc') || k.includes('park') || k.includes('kouen') ||
      k.includes('gongwon') || k.includes('gongyuan') || k.includes('hadiqua') ||
      k.includes('parque') || k.includes('parco'))
    return QUESTIONS.parc
  if (k.includes('school') || k.includes('schule') || k.includes('scuola') ||
      k.includes('escola') || k.includes('ecole') || k.includes('szkola') ||
      k.includes('okul') || k.includes('shkola') || k.includes('gakko') ||
      k.includes('hakgyo') || k.includes('xuexiao') || k.includes('madrasa') ||
      k.includes('vidyalay') || k.includes('escuela'))
    return QUESTIONS.ecole
  if (k.includes('restaurant') || k.includes('restoran') || k.includes('ristorante') ||
      k.includes('restaurante') || k.includes('restauracja') || k.includes('sikdang') ||
      k.includes('matam') || k.includes('resutoran') || k.includes('canting'))
    return QUESTIONS.restaurant2
  if (k.includes('airport') || k.includes('aeroport') || k.includes('aeropuerto') ||
      k.includes('flughafen') || k.includes('aeroporto') || k.includes('luchthaven') ||
      k.includes('lotnisko') || k.includes('havalimani') || k.includes('kuko') ||
      k.includes('gonghang') || k.includes('jichang') || k.includes('matar') ||
      k.includes('havai'))
    return QUESTIONS.aeroport
  return QUESTIONS.marche
}

// ─── Générer DialogueSeeder.php ───────────────────────────────────────────────

function generateDialogueSeeder(dialogues) {
  const L = []
  L.push(`<?php`)
  L.push(`namespace Database\\Seeders;`)
  L.push(``)
  L.push(`use Illuminate\\Database\\Seeder;`)
  L.push(`use Illuminate\\Support\\Facades\\DB;`)
  L.push(``)
  L.push(`class DialogueSeeder extends Seeder`)
  L.push(`{`)
  L.push(`    public function run(): void`)
  L.push(`    {`)
  L.push(`        $driver = DB::connection()->getDriverName();`)
  L.push(`        if ($driver === 'sqlite') {`)
  L.push(`            DB::statement('PRAGMA foreign_keys = OFF');`)
  L.push(`            DB::table('dialogue_steps')->delete();`)
  L.push(`            DB::table('dialogues')->delete();`)
  L.push(`            DB::statement('PRAGMA foreign_keys = ON');`)
  L.push(`        } else {`)
  L.push(`            DB::statement('SET FOREIGN_KEY_CHECKS=0');`)
  L.push(`            DB::table('dialogue_steps')->truncate();`)
  L.push(`            DB::table('dialogues')->truncate();`)
  L.push(`            DB::statement('SET FOREIGN_KEY_CHECKS=1');`)
  L.push(`        }`)
  L.push(``)
  L.push(`        $now = now();`)
  L.push(``)

  for (const [lang, scenarios] of Object.entries(dialogues)) {
    L.push(`        // ── ${lang.toUpperCase()} ──`)
    scenarios.forEach((scenario, sortOrder) => {
      L.push(`        $dialogue = DB::table('dialogues')->insertGetId([`)
      L.push(`            'lang'         => '${esc(lang)}',`)
      L.push(`            'scenario_key' => '${esc(scenario.id)}',`)
      L.push(`            'emoji'        => '${esc(scenario.emoji)}',`)
      L.push(`            'title'        => '${esc(scenario.title)}',`)
      L.push(`            'title_fr'     => '${esc(scenario.title_fr)}',`)
      L.push(`            'sort_order'   => ${sortOrder},`)
      L.push(`            'created_at'   => $now,`)
      L.push(`            'updated_at'   => $now,`)
      L.push(`        ]);`)

      if (scenario.steps && scenario.steps.length) {
        L.push(`        DB::table('dialogue_steps')->insert([`)
        scenario.steps.forEach((step, pos) => {
          if (step.type === 'line') {
            L.push(`            ['dialogue_id'=>$dialogue,'position'=>${pos},'type'=>'line','speaker'=>'${esc(step.speaker)}','text'=>'${esc(step.text)}','fr'=>'${esc(step.fr)}','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],`)
          } else {
            const opts = JSON.stringify(step.options ?? []).replace(/\\/g, '\\\\').replace(/'/g, "\\'")
            L.push(`            ['dialogue_id'=>$dialogue,'position'=>${pos},'type'=>'choice','speaker'=>null,'text'=>'${esc(step.text)}','fr'=>'${esc(step.fr)}','options'=>'${opts}','correct_index'=>${step.correctIndex ?? 0},'created_at'=>$now,'updated_at'=>$now],`)
          }
        })
        L.push(`        ]);`)
      }
      L.push(``)
    })
  }

  L.push(`    }`)
  L.push(`}`)
  return L.join('\n')
}

// ─── Générer StorySeeder.php ──────────────────────────────────────────────────

function generateStorySeeder(stories) {
  const L = []
  L.push(`<?php`)
  L.push(`namespace Database\\Seeders;`)
  L.push(``)
  L.push(`use Illuminate\\Database\\Seeder;`)
  L.push(`use Illuminate\\Support\\Facades\\DB;`)
  L.push(``)
  L.push(`class StorySeeder extends Seeder`)
  L.push(`{`)
  L.push(`    public function run(): void`)
  L.push(`    {`)
  L.push(`        $driver = DB::connection()->getDriverName();`)
  L.push(`        if ($driver === 'sqlite') {`)
  L.push(`            DB::statement('PRAGMA foreign_keys = OFF');`)
  L.push(`            DB::table('story_questions')->delete();`)
  L.push(`            DB::table('story_tokens')->delete();`)
  L.push(`            DB::table('stories')->delete();`)
  L.push(`            DB::statement('PRAGMA foreign_keys = ON');`)
  L.push(`        } else {`)
  L.push(`            DB::statement('SET FOREIGN_KEY_CHECKS=0');`)
  L.push(`            DB::table('story_questions')->truncate();`)
  L.push(`            DB::table('story_tokens')->truncate();`)
  L.push(`            DB::table('stories')->truncate();`)
  L.push(`            DB::statement('SET FOREIGN_KEY_CHECKS=1');`)
  L.push(`        }`)
  L.push(``)
  L.push(`        $now = now();`)
  L.push(``)

  for (const [lang, storyList] of Object.entries(stories)) {
    L.push(`        // ── ${lang.toUpperCase()} ──`)
    storyList.forEach((story, sortOrder) => {
      L.push(`        $story = DB::table('stories')->insertGetId([`)
      L.push(`            'lang'       => '${esc(lang)}',`)
      L.push(`            'story_key'  => '${esc(story.id)}',`)
      L.push(`            'emoji'      => '${esc(story.emoji)}',`)
      L.push(`            'title_fr'   => '${esc(story.title_fr)}',`)
      L.push(`            'level'      => ${story.level ?? 1},`)
      L.push(`            'sort_order' => ${sortOrder},`)
      L.push(`            'created_at' => $now,`)
      L.push(`            'updated_at' => $now,`)
      L.push(`        ]);`)

      if (story.tokens && story.tokens.length) {
        L.push(`        DB::table('story_tokens')->insert([`)
        story.tokens.forEach((tok, pos) => {
          L.push(`            ['story_id'=>$story,'position'=>${pos},'text'=>'${esc(tok.text)}','fr'=>'${esc(tok.fr ?? '')}','is_punct'=>${tok.punct ? 'true' : 'false'}],`)
        })
        L.push(`        ]);`)
      }

      const questions = getQuestions(story.id)
      L.push(`        DB::table('story_questions')->insert([`)
      questions.forEach((q, pos) => {
        const opts = JSON.stringify(q.options).replace(/\\/g, '\\\\').replace(/'/g, "\\'")
        L.push(`            ['story_id'=>$story,'position'=>${pos},'question_fr'=>'${esc(q.question_fr)}','options'=>'${opts}','correct_index'=>${q.correct_index}],`)
      })
      L.push(`        ]);`)
      L.push(``)
    })
  }

  L.push(`    }`)
  L.push(`}`)
  return L.join('\n')
}

// ─── Main ─────────────────────────────────────────────────────────────────────

console.log('📖 Chargement des dialogues…')
const dialogues = loadTS(
  join(root, 'frontend/src/data/dialogues.ts'),
  'DIALOGUES',
  'const line ='
)
console.log(`   ${Object.keys(dialogues).length} langues, ${Object.values(dialogues).flat().length} scénarios`)

console.log('📚 Chargement des histoires…')
const stories = loadTS(
  join(root, 'frontend/src/data/stories.ts'),
  'STORIES',
  'const w ='
)
console.log(`   ${Object.keys(stories).length} langues, ${Object.values(stories).flat().length} histoires`)

const dialogueContent = generateDialogueSeeder(dialogues)
const storyContent    = generateStorySeeder(stories)

const dialoguePath = join(root, 'backend/database/seeders/DialogueSeeder.php')
const storyPath    = join(root, 'backend/database/seeders/StorySeeder.php')

writeFileSync(dialoguePath, dialogueContent)
writeFileSync(storyPath, storyContent)

console.log(`✅ DialogueSeeder.php généré (${dialogueContent.length} chars)`)
console.log(`✅ StorySeeder.php généré (${storyContent.length} chars)`)

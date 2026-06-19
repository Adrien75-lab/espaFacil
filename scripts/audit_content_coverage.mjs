import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const dataPath = path.join(root, 'backend/database/data/linguafacil.json')
const outputPath = path.join(root, 'docs/audits/content-coverage.md')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const LEVELS = ['debutant', 'intermediaire', 'avance']
const EXAMPLE_MODES = ['fill-blank', 'sentence-builder']
const NON_LATIN_LANGS = new Set(['ru', 'ja', 'ko', 'zh', 'ar', 'hi'])
const NEEDS_READING_SUPPORT = NON_LATIN_LANGS

const languageByCode = new Map(data.languages.map(language => [language.code, language]))
const themesByLanguage = new Map()
for (const theme of data.themes) {
  if (!themesByLanguage.has(theme.language_code)) themesByLanguage.set(theme.language_code, [])
  themesByLanguage.get(theme.language_code).push(theme)
}

const wordsByKey = new Map()
for (const word of data.words) {
  const key = `${word.language_code}::${word.theme_key}::${word.level}`
  if (!wordsByKey.has(key)) wordsByKey.set(key, [])
  wordsByKey.get(key).push(word)
}

function countWith(words, predicate) {
  return words.reduce((count, word) => count + (predicate(word) ? 1 : 0), 0)
}

function hasFullGloss(word) {
  return Array.isArray(word.example_gloss) && word.example_gloss.length > 0 && word.example_gloss.every(token => token.t)
}

function hasReadingSupport(word) {
  return Boolean(word.transliteration)
}

const rows = []
const emptyWordCombos = []
const emptyExampleCombos = []
const readingSupportRows = []

for (const language of data.languages) {
  const themes = themesByLanguage.get(language.code) ?? []
  let languageWords = 0
  let languageExamples = 0
  let languageGlosses = 0
  let languageFullGlosses = 0
  let languageTransliterations = 0
  let missingReadingSupport = 0

  for (const theme of themes) {
    for (const level of LEVELS) {
      const words = wordsByKey.get(`${language.code}::${theme.key}::${level}`) ?? []
      const examples = countWith(words, word => word.example_sentence)
      const glosses = countWith(words, word => Array.isArray(word.example_gloss) && word.example_gloss.length > 0)
      const fullGlosses = countWith(words, hasFullGloss)
      const transliterations = countWith(words, hasReadingSupport)

      languageWords += words.length
      languageExamples += examples
      languageGlosses += glosses
      languageFullGlosses += fullGlosses
      languageTransliterations += transliterations

      if (words.length === 0) {
        emptyWordCombos.push({ language, theme, level })
      }

      if (examples === 0) {
        emptyExampleCombos.push({ language, theme, level, words: words.length })
      }

      if (NEEDS_READING_SUPPORT.has(language.code)) {
        missingReadingSupport += words.length - transliterations
      }
    }
  }

  rows.push({
    language,
    themes: themes.length,
    words: languageWords,
    examples: languageExamples,
    glosses: languageGlosses,
    fullGlosses: languageFullGlosses,
    transliterations: languageTransliterations,
  })

  if (NON_LATIN_LANGS.has(language.code)) {
    readingSupportRows.push({
      language,
      words: languageWords,
      transliterations: languageTransliterations,
      missingReadingSupport,
      examples: languageExamples,
      glosses: languageGlosses,
      fullGlosses: languageFullGlosses,
    })
  }
}

function percent(part, total) {
  if (total === 0) return '0%'
  return `${Math.round((part / total) * 100)}%`
}

function escapeCell(value) {
  return String(value).replace(/\|/g, '\\|')
}

function table(headers, values) {
  const lines = []
  lines.push(`| ${headers.map(escapeCell).join(' | ')} |`)
  lines.push(`| ${headers.map(() => '---').join(' | ')} |`)
  for (const row of values) lines.push(`| ${row.map(escapeCell).join(' | ')} |`)
  return lines.join('\n')
}

function groupedCombos(combos, limit = 30) {
  return combos.slice(0, limit).map(({ language, theme, level, words }) => (
    `- ${language.name} (${language.code}) / ${theme.name} (${theme.key}) / ${level}` +
    (words === undefined ? '' : ` — ${words} mot(s)`)
  )).join('\n') || '- Aucun'
}

const totalWords = rows.reduce((sum, row) => sum + row.words, 0)
const totalExamples = rows.reduce((sum, row) => sum + row.examples, 0)
const totalGlosses = rows.reduce((sum, row) => sum + row.glosses, 0)
const totalThemes = rows.reduce((sum, row) => sum + row.themes, 0)

const markdown = `# Audit de couverture du contenu pédagogique

Généré par \`node scripts/audit_content_coverage.mjs\`.

## Synthèse

- Langues : ${data.languages.length}
- Thèmes déclarés : ${totalThemes}
- Mots : ${totalWords}
- Mots avec phrase d'exemple : ${totalExamples} (${percent(totalExamples, totalWords)})
- Mots avec gloss mot à mot : ${totalGlosses} (${percent(totalGlosses, totalWords)})
- Combinaisons langue/thème/niveau sans mot : ${emptyWordCombos.length}
- Combinaisons langue/thème/niveau sans phrase d'exemple : ${emptyExampleCombos.length}

## Couverture par langue

${table(
  ['Langue', 'Code', 'Thèmes', 'Mots', 'Exemples', '% exemples', 'Glosses', '% glosses', 'Translittérations'],
  rows.map(row => [
    row.language.name,
    row.language.code,
    row.themes,
    row.words,
    row.examples,
    percent(row.examples, row.words),
    row.glosses,
    percent(row.glosses, row.words),
    row.transliterations,
  ]),
)}

## Modes bloqués par manque de contenu

Les modes vocabulaire peuvent fonctionner avec des mots. Les modes ${EXAMPLE_MODES.map(mode => `\`${mode}\``).join(' et ')} ont besoin de phrases d'exemple.

### Combinaisons sans mot

${groupedCombos(emptyWordCombos)}

${emptyWordCombos.length > 30 ? `\n... ${emptyWordCombos.length - 30} combinaison(s) supplémentaire(s).\n` : ''}

### Combinaisons sans phrase d'exemple

${groupedCombos(emptyExampleCombos)}

${emptyExampleCombos.length > 30 ? `\n... ${emptyExampleCombos.length - 30} combinaison(s) supplémentaire(s).\n` : ''}

## Lisibilité des langues à écriture non latine

Votre remarque sur le japonais est confirmée côté produit : même quand le mode \`fill-blank\` a des phrases et des choix, l'utilisateur débutant peut ne pas savoir lire les réponses si les choix affichent seulement le terme en écriture native.

${table(
  ['Langue', 'Code', 'Mots', 'Translittérations', '% translittéré', 'Sans aide lecture', 'Exemples', 'Glosses complets'],
  readingSupportRows.map(row => [
    row.language.name,
    row.language.code,
    row.words,
    row.transliterations,
    percent(row.transliterations, row.words),
    row.missingReadingSupport,
    row.examples,
    row.fullGlosses,
  ]),
)}

### Risque UX identifié

- En japonais, coréen, chinois, arabe et hindi, les choix de réponse des modes à phrase devraient probablement afficher une aide de lecture ou une traduction courte.
- La translittération existe sur une partie du vocabulaire, mais pas sur tous les mots avancés.
- Le mode \`fill-blank\` aide déjà la phrase via gloss interactif, mais les boutons de choix restent difficiles si l'apprenant ne lit pas encore l'écriture cible.

### Recommandations produit

1. Ajouter une option d'aide dans les choix : terme cible + translittération quand disponible + traduction française discrète.
2. Pour les langues à écriture non latine, afficher la translittération dans les choix au moins aux niveaux débutant et intermédiaire.
3. Garder l'écriture native visible pour apprendre, mais ne pas en faire la seule information dans les modes de reconnaissance.
4. Compléter les translittérations manquantes avant de durcir les exercices sur les niveaux avancés.
`

fs.writeFileSync(outputPath, `${markdown.trim()}\n`)
console.log(`Audit écrit dans ${outputPath}`)
console.log(`Langues: ${data.languages.length}, thèmes: ${totalThemes}, mots: ${totalWords}`)
console.log(`Combinaisons sans mot: ${emptyWordCombos.length}`)
console.log(`Combinaisons sans phrase d'exemple: ${emptyExampleCombos.length}`)

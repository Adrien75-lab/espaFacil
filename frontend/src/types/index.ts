export interface Language {
  code: string
  name: string
  flag: string
  voice_locale: string
  is_rtl: boolean
  has_variants: boolean
  variants: { code: string; nom: string }[] | null
  themes?: Theme[]
}

export interface Theme {
  key: string
  name: string
  emoji: string
}

export interface Word {
  id: number
  level: 'debutant' | 'intermediaire' | 'avance'
  term: string
  translation_fr: string
  transliteration: string | null
  clue: string | null
  example_sentence: string | null
  example_gloss: { w: string; t: string | null }[] | null
}

export interface GrammarTip {
  section_title: string
  items: string[]
  sort_order: number
}

export type Level = 'debutant' | 'intermediaire' | 'avance'

export interface DialogueOption {
  text: string
  fr: string
}

export interface DialogueLine {
  type: 'line'
  speaker: 'A' | 'B'
  text: string
  fr: string
}

export interface DialogueChoice {
  type: 'choice'
  text: string
  fr: string
  options: DialogueOption[]
  correctIndex: number
}

export type DialogueStep = DialogueLine | DialogueChoice

export interface Dialogue {
  id: string
  emoji: string
  title: string
  title_fr: string
  steps: DialogueStep[]
}

export interface ConjugationEntry {
  pronoun: string
  form: string
}

export interface ConjugationVerb {
  infinitive: string
  translation: string
  tenses: Record<string, ConjugationEntry[]>
}

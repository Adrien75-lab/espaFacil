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
}

export interface GrammarTip {
  section_title: string
  items: string[]
  sort_order: number
}

export type Level = 'debutant' | 'intermediaire' | 'avance'

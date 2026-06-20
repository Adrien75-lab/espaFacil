const LANGS_WITH_NON_LATIN_SCRIPT = new Set(['ru', 'ja', 'ko', 'zh', 'ar', 'hi'])

export type ReadingSupportLevel = 'debutant' | 'intermediaire' | 'avance'

export function needsReadingSupport(languageCode: string | undefined | null): boolean {
  return Boolean(languageCode && LANGS_WITH_NON_LATIN_SCRIPT.has(languageCode))
}

export function shouldShowChoiceTranslation(level: ReadingSupportLevel): boolean {
  return level === 'debutant'
}

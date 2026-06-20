import { describe, expect, it } from 'vitest'
import { needsReadingSupport, shouldShowChoiceTranslation } from './readingSupport'

describe('readingSupport', () => {
  it('active une aide de lecture pour les langues à écriture non latine', () => {
    expect(needsReadingSupport('ja')).toBe(true)
    expect(needsReadingSupport('zh')).toBe(true)
    expect(needsReadingSupport('ar')).toBe(true)
    expect(needsReadingSupport('hi')).toBe(true)
  })

  it('ne demande pas d aide de lecture pour les langues latines du catalogue', () => {
    expect(needsReadingSupport('es')).toBe(false)
    expect(needsReadingSupport('en')).toBe(false)
    expect(needsReadingSupport(null)).toBe(false)
  })

  it('affiche la traduction des choix uniquement au niveau debutant', () => {
    expect(shouldShowChoiceTranslation('debutant')).toBe(true)
    expect(shouldShowChoiceTranslation('intermediaire')).toBe(false)
    expect(shouldShowChoiceTranslation('avance')).toBe(false)
  })
})

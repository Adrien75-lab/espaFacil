import { describe, expect, it } from 'vitest'
import { isExampleMode, isNoThemeMode, statsSatisfyMode } from './availability'

describe('home availability helpers', () => {
  it('laisse disponibles les anciens catalogues sans statistiques détaillées', () => {
    expect(statsSatisfyMode(undefined, 'quiz')).toBe(true)
    expect(statsSatisfyMode(undefined, 'fill-blank')).toBe(true)
  })

  it('utilise les mots disponibles pour les modes de vocabulaire', () => {
    expect(statsSatisfyMode({ words: 1, with_example: 0 }, 'quiz')).toBe(true)
    expect(statsSatisfyMode({ words: 0, with_example: 3 }, 'quiz')).toBe(false)
  })

  it('exige des phrases exemples pour les modes phrases et reconstitution', () => {
    expect(isExampleMode('fill-blank')).toBe(true)
    expect(isExampleMode('sentence-builder')).toBe(true)
    expect(statsSatisfyMode({ words: 4, with_example: 0 }, 'fill-blank')).toBe(false)
    expect(statsSatisfyMode({ words: 4, with_example: 1 }, 'sentence-builder')).toBe(true)
  })

  it('identifie les modes qui ne dépendent pas du thème sélectionné', () => {
    expect(isNoThemeMode('dialogue')).toBe(true)
    expect(isNoThemeMode('stories')).toBe(true)
    expect(isNoThemeMode('quiz')).toBe(false)
  })
})

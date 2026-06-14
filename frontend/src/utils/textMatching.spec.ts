import { describe, expect, it } from 'vitest'
import { evaluateAnswer, levenshteinDistance, normalizeText, similarity } from './textMatching'

describe('textMatching', () => {
  it('normalise la casse, les accents et les espaces', () => {
    expect(normalizeText('  ÉLÈVE   studieux ')).toBe('eleve studieux')
  })

  it('calcule la distance de Levenshtein', () => {
    expect(levenshteinDistance('chat', 'chats')).toBe(1)
    expect(levenshteinDistance('maison', 'maison')).toBe(0)
  })

  it('tolère une petite faute sans accepter une mauvaise réponse', () => {
    expect(evaluateAnswer('restarant', 'restaurant')).toBe('close')
    expect(evaluateAnswer('gare', 'aéroport')).toBe('wrong')
    expect(evaluateAnswer('École', 'ecole')).toBe('correct')
  })

  it('retourne une similarité bornée entre zéro et un', () => {
    expect(similarity('bonjour', 'bonjour')).toBe(1)
    expect(similarity('', 'bonjour')).toBe(0)
  })
})

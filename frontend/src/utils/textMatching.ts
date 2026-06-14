export type AnswerStatus = 'correct' | 'close' | 'wrong'

export function normalizeText(value: string): string {
  return value
    .trim()
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
}

export function levenshteinDistance(left: string, right: string): number {
  const previous = Array.from({ length: right.length + 1 }, (_, index) => index)

  for (let i = 1; i <= left.length; i++) {
    const current = [i]
    for (let j = 1; j <= right.length; j++) {
      current[j] = left[i - 1] === right[j - 1]
        ? previous[j - 1]
        : 1 + Math.min(previous[j], current[j - 1], previous[j - 1])
    }
    previous.splice(0, previous.length, ...current)
  }

  return previous[right.length]
}

export function similarity(left: string, right: string): number {
  const a = normalizeText(left)
  const b = normalizeText(right)
  const maxLength = Math.max(a.length, b.length)
  return maxLength === 0 ? 1 : 1 - levenshteinDistance(a, b) / maxLength
}

export function evaluateAnswer(answer: string, expected: string): AnswerStatus {
  const normalizedAnswer = normalizeText(answer)
  const normalizedExpected = normalizeText(expected)
  const distance = levenshteinDistance(normalizedAnswer, normalizedExpected)

  if (distance === 0) return 'correct'
  if (normalizedAnswer.length >= 3 && distance <= 2) return 'close'
  return 'wrong'
}

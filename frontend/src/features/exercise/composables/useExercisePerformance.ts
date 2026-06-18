import { computed, type MaybeRefOrGetter, toValue } from 'vue'

type ExercisePerformanceTone = 'perfect' | 'great' | 'good' | 'practice'

interface ExercisePerformanceInput {
  correct: MaybeRefOrGetter<number>
  answered: MaybeRefOrGetter<number>
}

export function useExercisePerformance(input: ExercisePerformanceInput) {
  const ratio = computed(() => {
    const answered = toValue(input.answered)
    if (answered <= 0) return 1

    return toValue(input.correct) / answered
  })

  const tone = computed<ExercisePerformanceTone>(() => {
    if (ratio.value >= 1) return 'perfect'
    if (ratio.value >= 0.8) return 'great'
    if (ratio.value >= 0.6) return 'good'

    return 'practice'
  })

  const label = computed(() => {
    switch (tone.value) {
      case 'perfect':
        return 'Parfait'
      case 'great':
        return 'Bravo'
      case 'good':
        return 'Bien'
      case 'practice':
        return 'On se reprend'
    }

    return 'On se reprend'
  })

  return { label, ratio, tone }
}

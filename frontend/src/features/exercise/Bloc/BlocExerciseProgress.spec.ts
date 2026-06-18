import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BlocExerciseProgress from './BlocExerciseProgress.vue'

describe('BlocExerciseProgress', () => {
  it('expose une progression accessible et plafonnée', () => {
    const wrapper = mount(BlocExerciseProgress, {
      props: { current: 12, total: 10 },
    })

    const progress = wrapper.get('[role="progressbar"]')
    expect(progress.attributes('aria-valuenow')).toBe('12')
    expect(progress.get('.progress-fill').attributes('style')).toContain('width: 100%')
  })

  it('gère un total vide sans division par zéro', () => {
    const wrapper = mount(BlocExerciseProgress, {
      props: { current: 0, total: 0 },
    })

    expect(wrapper.get('.progress-fill').attributes('style')).toContain('width: 0%')
  })
})

import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ExerciseProgress from './ExerciseProgress.vue'

describe('ExerciseProgress', () => {
  it('expose une progression accessible et plafonnée', () => {
    const wrapper = mount(ExerciseProgress, {
      props: { current: 12, total: 10 },
    })

    const progress = wrapper.get('[role="progressbar"]')
    expect(progress.attributes('aria-valuenow')).toBe('12')
    expect(progress.get('.progress-fill').attributes('style')).toContain('width: 100%')
  })

  it('gère un total vide sans division par zéro', () => {
    const wrapper = mount(ExerciseProgress, {
      props: { current: 0, total: 0 },
    })

    expect(wrapper.get('.progress-fill').attributes('style')).toContain('width: 0%')
  })
})

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FormMobile from './FormMobile.vue'

describe('FormMobile', () => {
  it('renders properly', () => {
    const wrapper = mount(FormMobile, { props: { title: 'Envía un WhatsApp sin guardar el número en tus contactos' } })
    expect(wrapper.text()).toContain('Envía un WhatsApp sin guardar el número en tus contactos')
  })
})
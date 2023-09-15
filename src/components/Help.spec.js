import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Help from './HelpComp.vue'

describe('Help', () => {
  it('renders properly', () => {
    const wrapper = mount(Help, { props: { title: "Ayuda - Envía un WhatsApp sin guardar el número en tus contactos" } })
    expect(wrapper.text()).toContain("Ayuda - Envía un WhatsApp sin guardar el número en tus contactos")
  })
})
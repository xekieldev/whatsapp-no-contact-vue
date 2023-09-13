import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Help from './Help.vue'

describe('Help', () => {
  it('renders properly', async () =>{
    const wrapper = mount(Help, { props: { title: "Ayuda - Envía un WhatsApp sin guardar el número en tus contactos" } })
    await wrapper.vm.$nextTick()
    // debugger
    expect(wrapper.text()).toContain("Ayuda - Envía un WhatsApp sin guardar el número en tus contactos")
  })
})
import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'
import PaymentPending from '@/components/Dashboard/TodoList/PaymentPending.vue'

Vue.use(Vuetify)
const vuetify = new Vuetify({})

describe('Payment Pending', () => {
  it('Displays expected content', () => {
    const wrapper = mount(PaymentPending, { vuetify })

    // verify content
    expect(wrapper.find('h4').text()).toBe('Payment Incomplete')

    const paragraphs = wrapper.findAll('p')
    expect(paragraphs.length).toBe(2)
    expect(paragraphs.at(0).text()).toContain('This filing is pending payment')
    expect(paragraphs.at(1).text()).toContain('You may continue this filing')

    wrapper.destroy()
  })
})

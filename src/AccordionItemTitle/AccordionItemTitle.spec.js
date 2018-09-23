import AccordionItemTitle from './../AccordionItemTitle'

describe('AccordionItemTitle', () => {
  let wrapper
  before(() => {
    wrapper = mount(<AccordionItemTitle />)
  })
  it('should have systemName', () => {
    expect(wrapper.find(AccordionItemTitle).prop('systemName')).toBe('AccordionItemTitle')
  })
})

import AccordionItemBody from './../AccordionItemBody'

describe('AccordionItemBody', () => {
  let wrapper
  before(() => {
    wrapper = mount(<AccordionItemBody />)
  })
  it('should have systemName', () => {
    expect(wrapper.find(AccordionItemBody).prop('systemName')).toBe('AccordionItemBody')
  })
})

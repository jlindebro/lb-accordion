import AccordionItem from './../AccordionItem'

describe('AccordionItem', () => {
  let wrapper
  before(() => {
    wrapper = mount(<AccordionItem />)
  })
  it('should have systemName', () => {
    expect(wrapper.find(AccordionItem).prop('systemName')).toBe('AccordionItem')
  })
})

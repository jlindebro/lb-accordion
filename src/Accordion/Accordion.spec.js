import Accordion from './Accordion'
import AccordionItem from './../AccordionItem'
import AccordionItemTitle from './../AccordionItemTitle'
import AccordionItemBody from './../AccordionItemBody'

describe('Accordion', () => {
  let wrapper
  let wrapper2
  let wrapper3
  before(() => {
    wrapper = mount(
      <Accordion itemBodyHeight={300} speed={0.4}>
        <AccordionItem>
          <AccordionItemTitle title="Foo bar" />
          <AccordionItemBody />
        </AccordionItem>
      </Accordion>,
    )
    wrapper2 = mount(
      <Accordion itemBodyHeight={100} speed={0.6} selectedIndexes={[1]}>
        <AccordionItem>
          <AccordionItemTitle title="Foo" />
          <AccordionItemBody />
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle title="Bar" />
          <AccordionItemBody />
        </AccordionItem>
      </Accordion>,
    )
    wrapper3 = mount(
      <Accordion itemBodyHeight={100} multiSelect selectedIndexes={[0, 2]}>
        <AccordionItem>
          <AccordionItemTitle title="Foo" />
          <AccordionItemBody />
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle title="Bar" />
          <AccordionItemBody />
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle title="Foo" />
          <AccordionItemBody />
        </AccordionItem>
      </Accordion>,
    )
  })

  it('should have a systemName', () => {
    expect(wrapper.find(Accordion).prop('systemName')).toBe('Accordion')
  })
  it('should generate and set props on its children', () => {
    expect(wrapper.find(AccordionItemBody).prop('bodyHeight')).toBe(300)
    expect(wrapper.find(AccordionItem).prop('speed')).toBe(0.4)
  })

  it('should be able to selected/unselect children', () => {
    expect(
      wrapper2
        .find(AccordionItemBody)
        .first()
        .prop('bodyHeight'),
    ).toBe(0)
    expect(
      wrapper2
        .find(AccordionItemBody)
        .last()
        .prop('bodyHeight'),
    ).toBe(100)
  })
  it('should be able to multi selected children', () => {
    expect(
      wrapper3
        .find(AccordionItemBody)
        .first()
        .prop('bodyHeight'),
    ).toBe(100)
    expect(
      wrapper3
        .find(AccordionItemBody)
        .last()
        .prop('bodyHeight'),
    ).toBe(100)
  })
})

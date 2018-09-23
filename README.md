# lb-accordion
A React Component that will return html elements with preset styles of grid properties.

### Getting started
```
$ npm i lb-accordion --save
```

### Code Example

## Single select
```js

import {
	Accordion,
	AccordionItem,
	AccordionItemTitle,
	AccordionItemBody,
} from 'lb-gridview'

const Component = () => (
  <Accordion
    itemBodyHeight={100}
    speed={0.2}
    onChange={(data) => {
      console.log("Accordion changed. Selected index:", data.selectedIndexes)
    }}
  >
    <AccordionItem>
      <Divider />
      <AccordionItemTitle
        title="Section 1"
        icon="login"
        style={{borderTop: 'none'}}
      />
      <AccordionItemBody>
        <FlexView>
          <div style={{textAlign: 'center', padding: '0px 15px 0px 15px'}}>
            <p>
              Content 1.
            </p>
          </div>
        </FlexView>
      </AccordionItemBody>
  </AccordionItem>
  <AccordionItem>
    <Divider />
    <AccordionItemTitle
      title="Section 2"
      icon="edit"
    />
    <AccordionItemBody>
      <FlexView>
        <div style={{textAlign: 'center', padding: '0px 15px 0px 15px'}}>
          <p>
            Content 2.
          </p>
        </div>
      </FlexView>
    </AccordionItemBody>
  </AccordionItem>
  <AccordionItem>
    <Divider />
    <AccordionItemTitle
      title="Section 3"
      icon="send"
    />
    <AccordionItemBody>
      <FlexView>
        <div style={{textAlign: 'center', padding: '0px 15px 0px 15px'}}>
          <p>
            Content 3.
          </p>
        </div>
      </FlexView>
    </AccordionItemBody>
  </AccordionItem>
</Accordion>
)

export default Component
```

## Multiselect
```js
  <Accordion
    itemBodyHeight={100}
    speed={0.2}
    onChange={data => {
      console.log("Accordion changed. Selected index:", data.selectedIndexes)
    }}
    multiSelect
    selectedIndexes={[]}
  >
    <AccordionItem>
      <Divider />
      <AccordionItemTitle
        title="Section 1"
        icon="shareAndroid"
        style={{borderTop: 'none'}}
      />
      <AccordionItemBody>
        <FlexView>
          <div style={{textAlign: 'center', padding: '0px 15px 0px 15px'}}>
            <p>
              Content 1.
            </p>
          </div>
        </FlexView>
      </AccordionItemBody>
  </AccordionItem>
  <AccordionItem>
    <Divider />
    <AccordionItemTitle
      title="Section 2"
      icon="favorit"
    />
    <AccordionItemBody customHeight={400}>
      <FlexView>
        <div style={{textAlign: 'center', padding: '0px 15px 0px 15px'}}>
          <p>
            Content 2.
          </p>
        </div>
      </FlexView>
    </AccordionItemBody>
  </AccordionItem>
  <AccordionItem>
    <Divider />
    <AccordionItemTitle
      title="Section 3"
      icon="save"
    />
    <AccordionItemBody>
      <FlexView>
        <div style={{textAlign: 'center', padding: '0px 15px 0px 15px'}}>
          <p>
            Content 3.
          </p>
        </div>
      </FlexView>
    </AccordionItemBody>
  </AccordionItem>
</Accordion>
```



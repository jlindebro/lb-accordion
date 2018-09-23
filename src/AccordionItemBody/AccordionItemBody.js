import React from 'react'
import PropTypes from 'prop-types'
import FlexView from '../layoutComponents/FlexView'

const AccordionItemBody = ({ children, style, bodyHeight, animationStyles }) => (
  <div>
    <FlexView
      style={{
        ...{
          flexDirection: 'row',
          overflow: 'hidden',
        },
        ...style,
        ...{
          height: bodyHeight,
        },
        ...animationStyles,
      }}
    >
      {children}
    </FlexView>
  </div>
)
AccordionItemBody.defaultProps = {
  systemName: 'AccordionItemBody',
  bodyHeight: 0,
}
AccordionItemBody.propTypes = {
  /**
   * Internal use for the accordion
   */
  systemName: PropTypes.string, //  eslint-disable-line react/no-unused-prop-types
  /**
   * Override style defult properies
   */
  style: PropTypes.object,
  /**
   * Animation settings. Do not manually use. Will automatic be set
   * by accordionItem component.
   */
  animationStyles: PropTypes.object,
  /**
   * Current Height of the accordionItemBody. Do not manually use.
   * Will automatic be set by AccordionItem component.
   */
  bodyHeight: PropTypes.number,
  /**
   * Override default height of the childs AccordionItemBody.
   */
  customHeight: PropTypes.number, //  eslint-disable-line react/no-unused-prop-types
  /**
   * Content of the Accordion item
   */
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
  ]),
}

export default AccordionItemBody

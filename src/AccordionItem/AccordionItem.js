import React from 'react'
import PropTypes from 'prop-types'

class AccordionItem extends React.Component {
  constructor () {
    super()
    this.renderChildren = this.renderChildren.bind(this)
  }
  renderChildren () {
    return React.Children.map(this.props.children, (child, i) => {
      let props = {}
      let childName = ''
      if (
        typeof child.type.defaultProps !== 'undefined' &&
        typeof child.type.defaultProps.systemName === 'string'
      ) {
        childName = child.type.defaultProps.systemName
      }
      // Item Title part
      if (childName === 'AccordionItemTitle') {
        props = {
          accordionOnClick: this.props.accordionOnClick,
          titleHeight: this.props.titleHeight,
          listId: this.props.listId,
          multiSelect: this.props.multiSelect,
          isSelected: this.props.selected
        }
      }
      // Item Body part
      if (childName === 'AccordionItemBody') {
        let animationStyles = {}
        const speed = this.props.speed
        const transitionType = this.props.transitionType
        animationStyles = {
          WebkitTransition: `height ${speed}s ${transitionType}`,
          MozTransition: `height ${speed}s ${transitionType}`,
          MsTransition: `height ${speed}s ${transitionType}`,
          OTransition: `height ${speed}s ${transitionType}`,
          transition: `height ${speed}s ${transitionType}`
        }

        let bodyHeight = 0
        if (this.props.selected) {
          if (this.props.multiSelect) {
            if (typeof child.props.customHeight === 'number') {
              // Manually override height from DOMtree outside
              bodyHeight = child.props.customHeight
            } else {
              // bodyHeight is provided by Accordion component.
              bodyHeight = this.props.itemBodyHeight
            }
          } else {
            /*
            * In single select mode AccordionItemBody are forced to have one size.
            * So bodyHeight is provided by Accordion component.
            */
            bodyHeight = this.props.itemBodyHeight
          }
        }

        props = {
          multiSelect: this.props.multiSelect,
          isSelected: this.props.selected,
          animationStyles,
          bodyHeight
        }
      }

      return React.cloneElement(child, {
        key: ['accordionItemChildren', i].join('-'),
        ...props
      })
    })
  }

  render () {
    return (
      <div
        style={{
          ...{
            flexDirection: 'column',
            width: '100%',
            backgroundColor: 'white'
          },
          ...this.props.style
        }}
      >
        {this.renderChildren()}
      </div>
    )
  }
}

AccordionItem.defaultProps = {
  systemName: 'AccordionItem',
  selected: false,
  accordionOnClick: () => {},
  speed: 0.2,
  transitionType: 'linear',
  itemBodyHeight: 200,
  titleHeight: 65
}
AccordionItem.propTypes = {
  /**
   * Internal name for the accordion. (System use only).
   */
  systemName: PropTypes.string, //  eslint-disable-line react/no-unused-prop-types
  /**
   * Selected index of the child array. (System use only)
   */
  selected: PropTypes.bool,
  /**
   * Id (array index) in the accordion items array. (System use only)
   */
  listId: PropTypes.number,
  /**
   * Override or extend default styles.
   */
  style: PropTypes.object,
  /**
   * OnClick callback function bubble up to Accordion component. (System use only)
   */
  accordionOnClick: PropTypes.func,
  /**
   * Body height of item provided from centralized settings in Accordion component.
   * (System use only)
   */
  itemBodyHeight: PropTypes.number,
  /**
   * Title height provided from centralized settings in Accordion component.
   * (System use only)
   */
  titleHeight: PropTypes.number,
  /**
   * Animation speed. (System use only)
   */
  speed: PropTypes.number,
  /**
   * Override transition type for the animation.
   */
  transitionType: PropTypes.string,
  /**
   * Accordion items children. (System use only).
   */
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  /**
   * Changes behavor on the accordion. If false all accordionItem
   * will get same size and only one accordion item can be opened
   * at the same time. If true, several items can be open at the
   * same time and the accordions total height will change according
   * to how many items are opened. This prop will be set by accordion
   * component. (System use only).
   */
  multiSelect: PropTypes.bool
}

export default AccordionItem

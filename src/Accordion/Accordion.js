import React from 'react'
import PropTypes from 'prop-types'
import FlexView from 'lb-flex-view'

export class Accordion extends React.Component {
  constructor(props) {
    super()
    const setSelected = []
    if(props.selectedIndexes.length > 0) {
      props.selectedIndexes.forEach(value => {
        setSelected.push(value)
      })
    }
    this.state = {
      selectedIndexes: setSelected,
      childrenCount: React.Children.count(props.children),
    }
    this.renderChildren = this.renderChildren.bind(this)
    this.itemOnClick = this.itemOnClick.bind(this)
    if (props.multiSelect) {
      this.styles = {
        multi: {
          maxHeight: 'unset',
          minHeight: 'unset',
          height: 'auto',
        },
      }
    } else {
      this.styles = {
        multi: {},
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedIndexes !== this.props.selectedIndexes) {
      const arr = nextProps.selectedIndexes || []
      this.setState({
        selectedIndexes: arr,
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.selectedIndexes !== this.state.selectedIndexes) {
      this.props.onChange({
        selectedIndexes: nextState.selectedIndexes,
      })
    }
  }

  itemOnClick(data) {
    let arr = []
    if (this.props.multiSelect) {
      // Load current collection
      arr = this.state.selectedIndexes.slice(0) || []
      if (arr.indexOf(data) !== -1) {
        // Unselect by remove from the collection.
        arr.splice(arr.indexOf(data), 1)
      } else {
        // Select by add to the collection.
        arr.push(data)
      }
    } else {
      if (arr.indexOf(data) !== -1) {
        // If index already exist then abort to avoid double actions.
        return
      }
      // Select index by adding to the collection
      arr.push(data)
    }

    // Execute
    this.setState({
      selectedIndexes: arr,
    })
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child, i) => {
      if (
        typeof child.type.defaultProps === 'undefined' ||
        child.type.defaultProps.systemName !== 'AccordionItem'
      ) {
        return null
      }

      let arr = this.state.selectedIndexes

      /* If single select mode force to
       * select only one value. (the first key index in the array)
       */
      if (!this.props.multiSelect) {
        if (arr.length > 0) {
          const value = arr[0]
          arr = []
          arr.push(value)
        }
      }
      let markSelected = false
      if (arr.indexOf(i) !== -1) {
        markSelected = true
      }

      return React.cloneElement(child, {
        selected: markSelected,
        listId: i,
        key: ['accordionChildren', i].join('-'),
        accordionOnClick: this.itemOnClick,
        titleHeight: this.props.titleHeight,
        itemBodyHeight: this.props.itemBodyHeight,
        speed: this.props.speed,
        multiSelect: this.props.multiSelect,
      })
    })
  }
  render() {
    return (
      <FlexView
        style={{
          ...{
            flexDirection: 'column',
            maxHeight: `${Math.max(
              this.props.titleHeight * (this.state.childrenCount - 1) +
                (this.props.titleHeight + this.props.itemBodyHeight),
            )}px`,
            minHeight: `${Math.max(
              this.props.titleHeight * (this.state.childrenCount - 1) +
                (this.props.titleHeight + this.props.itemBodyHeight),
            )}px`,
            height: `${Math.max(
              this.props.titleHeight * (this.state.childrenCount - 1) +
                (this.props.titleHeight + this.props.itemBodyHeight),
            )}px`,
          },
          ...this.styles.multi,
          ...this.props.style,
        }}
      >
        {this.renderChildren()}
      </FlexView>
    )
  }
}
Accordion.defaultProps = {
  systemName: 'Accordion',
  selectedIndexes: [0],
  itemBodyHeight: 200,
  titleHeight: 65,
  onChange: () => {},
  multiSelect: false,
}
Accordion.propTypes = {
  /**
   * Internal use for the accordion
   */
  systemName: PropTypes.string, //  eslint-disable-line react/no-unused-prop-types
  /**
   * Override or extend default styles
   */
  style: PropTypes.object,
  /**
   * State: Collection of selected indexes in the accordion during run time.
   * Props: Initial collection of selected index. If unwanted preselected index
   * set value to empty array, ex. [].
   */
  selectedIndexes: PropTypes.array,
  /**
   * Accordion items
   */
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  /**
   * Accordion items body height
   */
  itemBodyHeight: PropTypes.number,
  /**
   * Accordion items title height
   */
  titleHeight: PropTypes.number,
  /**
   * Accordion animation speed
   */
  speed: PropTypes.number,
  /**
   * Will be called everytime accordion is changing index.
   * Argument with selected index will be provided in the function
   */
  onChange: PropTypes.func,
  /**
   * Changes behavor on the accordion. If false all accordionItem
   * will get same size and only one accordion item can be opened
   * at the same time. If true, several items can be open at the
   * same time and the accordions total height will change according
   * to how many items are opened.
   */
  multiSelect: PropTypes.bool,
}

export default Accordion

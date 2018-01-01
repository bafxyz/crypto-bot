import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Slider.nav';
import styles from './Slider.module.scss';
import Hammer from 'hammerjs';

/**
 * Slider Component
 *
 * @example <Slider />
 * @return {string} - HTML markup for the component
 */
class Slider extends React.Component {
  /**
   * Constructor
   *
   * @param {Object} props - Constructor props
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Swipe left handler
   *
   * @memberof Slider
   *
   * @param {Object} event - The event
   * @return {void}
   */
  slideLeft(event) {
    alert('slideLeft', event);
  }

  /**
   * Swipe right handler
   *
   * @memberof Slider
   *
   * @param {Object} event - The event
   * @return {void}
   */
  slideRight(event) {
    alert('slideRight', event);
  }

  /**
   * Component didMount state.
   *
   * @memberof Slider
   * @return {void}
   */
  componentDidMount() {
    this.hammer = Hammer(this.node);
    this.hammer.on('swipeleft', this.onSwipeLeft);
    this.hammer.on('swiperight', this.onSwipeRight);
  }

  /**
   * Component willUnmount state.
   *
   * @memberof Slider
   * @return {void}
   */
  componentWillUnmount() {
    this.hammer.off('swipeleft', this.slideLeft);
    this.hammer.off('swiperight', this.slideRight);
  }

  /**
   * Renders the component.
   *
   * @memberof Slider
   * @return {string} - HTML markup for the component
   */
  render() {
    return (
      <div ref={node => (this.node = node)} className={styles.slider}>
        {this.props.showNav ? <Nav /> : ''}
        {this.props.children}
      </div>
    );
  }
}

Slider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ]),
  showNav: PropTypes.bool
};

Slider.defaultProps = {
  children: 'Default Slider',
  showNav: true
};

export default Slider;

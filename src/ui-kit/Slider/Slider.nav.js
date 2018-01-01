import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.scss';

/**
 * Pure SliderNav Component
 *
 * @return {string} - HTML markup for the component
 */
const SliderNav = ({ children, position }) => {
  return (
    <div className={styles['slider__nav-container']}>
      <div
        className={[styles['slider__nav'], styles['slider__nav_left']].join(
          ' '
        )}
      />
      <div
        className={[styles['slider__nav'], styles['slider__nav_right']].join(
          ' '
        )}
      />
    </div>
  );
};

SliderNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ]),
  position: PropTypes.string
};

SliderNav.defaultProps = {
  children: null,
  position: 'left'
};

export default SliderNav;

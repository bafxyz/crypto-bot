import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';
import utilStyles from '../../styles/utilities.scss';

/**
 * Pure Button Component
 *
 * @example <Button href="/foo">Bar</Button>
 * @return {string} - HTML markup for the component
 */
const Button = ({
  href,
  children,
  rounded,
  secondary,
  full,
  onClick
}) => {
  const Element = href ? 'a' : 'button';

  return (
    <Element
      href={href}
      onClick={onClick}
      className={[
        styles['Button'],
        secondary ? styles['--secondary'] : styles['--primary'],
        rounded ? styles['--rounded'] : '',
        full ? utilStyles['u-full'] : ''
      ].join(' ')}
    >
      {children}
    </Element>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  secondary: PropTypes.bool,
  rounded: PropTypes.bool,
  full: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

Button.defaultProps = {
  href: null,
  secondary: false,
  children: null,
  rounded: false,
  full: false,
  onClick: null,
  customStyles: null
};

export default Button;

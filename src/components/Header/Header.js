import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

/**
 * Pure Header Component
 *
 * @example <Header></Header>
 * @return {string} - HTML markup for the component
 */
const Header = ({ children }) => {
  return (
    <header className={[styles.Header, 'Layout-header'].join(' ')}>
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ]).isRequired
};

Header.defaultProps = {
  children: 'Default Header'
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

/**
 * Pure Footer Component
 *
 * @example <Footer></Footer>
 * @return {string} - HTML markup for the component
 */
const Footer = ({ children }) => {
  return (
    <footer className={[styles.footer, 'layout__footer'].join(' ')}>
      {children}
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ]).isRequired
};

Footer.defaultProps = {
  children: 'Default Footer'
};

export default Footer;

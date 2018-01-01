import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo-with-gradient.svg';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

/**
 * Pure Logo Component
 *
 * @return {string} - HTML markup for the component
 */
const Logo = ({ children }) => {
  return (
    <Link to="/">
      {children ? (
        children
      ) : (
        <img className={styles['Logo-img']} src={logo} alt="logo" />
      )}
    </Link>
  );
};

Logo.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ])
};

Logo.defaultProps = {
  children: null
};

export default Logo;

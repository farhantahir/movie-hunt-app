import React from 'react';
import { node } from 'prop-types';
import classnames from 'classnames/bind';
import styles from './styles.scss';

const cx = classnames.bind(styles);

const navbar = ({ children }) => (
  <nav>
    <div className={cx('nav-wrapper', { navbarBg: true })}>{children}</div>
  </nav>
);

navbar.propTypes = {
  children: node.isRequired,
};

export default navbar;

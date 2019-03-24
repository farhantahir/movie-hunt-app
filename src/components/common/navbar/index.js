import React from 'react';
import { node, bool } from 'prop-types';
import classnames from 'classnames/bind';
import styles from './styles.scss';

const cx = classnames.bind(styles);

const navbar = ({ fixed, children }) => (
  <div className={cx({ 'navbar-fixed': fixed })}>
    <nav>
      <div className={cx('nav-wrapper', { navbar: true })}>{children}</div>
    </nav>
  </div>
);

navbar.propTypes = {
  children: node.isRequired,
  fixed: bool,
};

navbar.defaultProps = {
  fixed: false,
};

export default navbar;

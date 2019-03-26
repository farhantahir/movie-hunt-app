import React from 'react';
import classnames from 'classnames';
import { string, node } from 'prop-types';

import styles from './styles.scss';

const tabs = ({ children, className, ...props }) => (
  <ul className={classnames('tabs', styles.tabs, className)} {...props}>
    {children}
  </ul>
);

tabs.propTypes = {
  children: node,
  className: string,
};

tabs.defaultProps = {
  children: {},
  className: '',
};

export default tabs;

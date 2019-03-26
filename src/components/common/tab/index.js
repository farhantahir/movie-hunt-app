import React from 'react';
import classnames from 'classnames';
import { node, string, bool } from 'prop-types';
import styles from './styles.scss';

const tab = ({ className, children, active, ...props }) => (
  <li
    className={classnames('tab', styles.tab, className, {
      [styles.active]: active,
    })}
    {...props}
  >
    {children}
  </li>
);

tab.propTypes = {
  className: string,
  children: node,
  active: bool,
};

tab.defaultProps = {
  className: '',
  children: {},
  active: false,
};
export default tab;

import React from 'react';
import classnames from 'classnames';
import { string, number, node } from 'prop-types';

const column = ({ children, className, s, m, l, xs, ...props }) => (
  <div
    className={classnames(
      'col',
      {
        [`s${s}`]: s,
        [`m${m}`]: m,
        [`l${l}`]: l,
        [`xs${xs}`]: xs,
      },
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

column.propTypes = {
  className: string,
  children: node,
  s: number,
  m: number,
  l: number,
  xs: number,
};

column.defaultProps = {
  className: '',
  children: {},
  s: null,
  m: null,
  l: null,
  xs: null,
};

export default column;

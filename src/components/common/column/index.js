import React from 'react';
import classnames from 'classnames';
import { string, object, number, node } from 'prop-types';

const column = ({ children, className, s, m, l, xs, ...props }) => (
  <div
    className={classnames('col', {
      [`s${s}`]: s,
      [`m${m}`]: m,
      [`l${l}`]: l,
      [`xs${xs}`]: xs,
    })}
    {...props}
  >
    {children}
  </div>
);

/* eslint-disable react/forbid-prop-types */
column.propTypes = {
  className: string,
  children: node,
  props: object,
  s: number,
  m: number,
  l: number,
  xs: number,
};

column.defaultProps = {
  className: '',
  children: {},
  props: {},
  s: null,
  m: null,
  l: null,
  xs: null,
};

export default column;

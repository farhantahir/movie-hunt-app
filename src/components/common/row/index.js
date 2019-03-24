import React from 'react';
import classnames from 'classnames';
import { node, string, object } from 'prop-types';

const row = ({ className, children, ...props }) => (
  <div className={classnames('row', className)} {...props}>
    {children}
  </div>
);

/* eslint-disable react/forbid-prop-types */
row.propTypes = {
  className: string,
  children: node,
  props: object,
};

row.defaultProps = {
  className: '',
  props: {},
  children: {},
};

export default row;

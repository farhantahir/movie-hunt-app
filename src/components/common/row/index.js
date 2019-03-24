import React from 'react';
import classnames from 'classnames';
import { node, string } from 'prop-types';

const row = ({ className, children, ...props }) => (
  <div className={classnames('row', className)} {...props}>
    {children}
  </div>
);

row.propTypes = {
  className: string,
  children: node,
};

row.defaultProps = {
  className: '',
  children: {},
};

export default row;

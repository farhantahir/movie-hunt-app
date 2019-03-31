import React from 'react';
import { string, node, oneOf } from 'prop-types';

const heading = ({ as: T, className, children }) => (
  <T className={className}>{children}</T>
);

heading.propTypes = {
  as: oneOf('h1', 'h2', 'h3', 'h4', 'h5', 'h6'),
  children: node.isRequired,
  className: string,
};

heading.defaultProps = {
  as: 'h2',
  className: '',
};

export default heading;

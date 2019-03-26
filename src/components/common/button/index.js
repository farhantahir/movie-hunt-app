import React from 'react';
import classnames from 'classnames';
import { string, node, oneOf } from 'prop-types';

const button = ({ as: T, children, className }) => (
  <T className={classnames('btn', className)}>{children}</T>
);

button.propTypes = {
  as: oneOf('button', 'a'),
  className: string,
  children: node.isRequired,
};

button.defaultProps = {
  as: 'button',
  className: '',
};

export default button;

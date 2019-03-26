import React from 'react';
import { string, node } from 'prop-types';

const link = ({ className, children, href }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

link.propTypes = {
  className: string,
  children: node.isRequired,
  href: string.isRequired,
};

link.defaultProps = {
  className: '',
};

export default link;

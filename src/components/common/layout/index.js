import React from 'react';
import { node } from 'prop-types';

import './app.scss';

const Layout = ({ children }) => <div className="container">{children}</div>;

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;

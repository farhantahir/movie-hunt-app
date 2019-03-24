import React from 'react';
import { node } from 'prop-types';

import Navbar from '#components/common/navbar';

import 'materialize-css/dist/css/materialize.min.css';

import styles from './app.scss';

const Layout = ({ children }) => (
  <div className={styles.app}>
    <Navbar fixed />
    {children}
  </div>
);

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;

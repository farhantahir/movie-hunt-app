import React from 'react';
import { node } from 'prop-types';

import styles from './app.scss';

const Layout = ({ children }) => <div className={styles.app}>{children}</div>;

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;

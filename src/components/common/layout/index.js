import React from 'react';
import { node } from 'prop-types';
import Head from 'next/head';

import Navbar from '#components/app-navbar';

import 'materialize-css/dist/css/materialize.min.css';

import styles from './app.scss';

const Layout = ({ children }) => (
  <div className={styles.app}>
    <Head>
      <link
        href="//fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Head>
    <Navbar />
    {children}
  </div>
);

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;

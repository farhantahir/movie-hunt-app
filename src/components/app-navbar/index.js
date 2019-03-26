import React from 'react';

import {
  Row,
  Column,
  Navbar,
  NavbarLogo,
  Icon,
  Tabs,
  Tab,
  Link,
  Button,
} from '#components/common';

import styles from './styles.scss';

const AppNavbar = () => (
  <Navbar fixed>
    <Row>
      <Column m={1} className="center-align">
        <Icon icon="menu" />
      </Column>
      <Column m={3}>
        <NavbarLogo imgSrc="/static/images/logo.png" url="/" />
      </Column>
      <Column m={5}>
        <Tabs className={`tabs-fixed-width ${styles.tabs}`}>
          <Tab className={styles.tab} active>
            Top rated
          </Tab>
          <Tab className={styles.tab}>Movies</Tab>
          <Tab className={styles.tab}>discover</Tab>
        </Tabs>
      </Column>
      <Column m={3}>
        <Row>
          <Column m={4} className="valign-wrapper">
            <Link href="#" className={styles.loginBtn}>
              Login
            </Link>
          </Column>

          <Column m={6} className="valign-wrapper">
            <Button className={styles.signUp}>Sign up</Button>
          </Column>
        </Row>
      </Column>
    </Row>
  </Navbar>
);

export default AppNavbar;

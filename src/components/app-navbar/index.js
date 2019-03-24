import React from 'react';

import { Row, Column, Navbar, NavbarLogo, Icon } from '#components/common';

const AppNavbar = () => (
  <Navbar fixed>
    <Row>
      <Column m={1} className="center-align">
        <Icon icon="menu" />
      </Column>
      <Column m={1}>
        <NavbarLogo imgSrc="/static/images/logo.png" url="/" />
      </Column>
    </Row>
  </Navbar>
);

export default AppNavbar;

import React from 'react';

import { Navbar, NavbarLogo, Icon } from '#components/common';

const AppNavbar = () => (
  <Navbar fixed>
    <Icon icon="menu" />
    <NavbarLogo imgSrc="/static/images/logo.png" url="/" />
  </Navbar>
);

export default AppNavbar;

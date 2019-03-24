import React from 'react';

import Navbar from '#components/common/navbar';
import NavbarLogo from '#components/common/navbar-logo';
import Icon from '#components/common/icon';

const AppNavbar = () => (
  <Navbar fixed>
    <Icon icon="menu" />
    <NavbarLogo imgSrc="/static/images/logo.png" url="/" />
  </Navbar>
);

export default AppNavbar;

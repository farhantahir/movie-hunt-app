import React from 'react';

import Navbar from '#components/common/navbar';
import NavbarLogo from '#components/common/navbar-logo';

const AppNavbar = () => (
  <Navbar fixed>
    <NavbarLogo imgSrc="/static/images/logo.png" url="/" />
  </Navbar>
);

export default AppNavbar;

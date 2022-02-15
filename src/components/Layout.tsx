import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <>
      <nav>
        <Link to="/">Todo</Link>
        <Link to="/login">Log In</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;

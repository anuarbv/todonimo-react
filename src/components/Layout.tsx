import { Container } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <Container pt={20} as="section">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;

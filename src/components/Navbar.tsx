import {
  Box,
  Button,
  HStack,
  Heading,
  Container,
  useColorMode,
} from '@chakra-ui/react';
import { EditIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import React, { FC } from 'react';

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const Icon = colorMode === 'light' ? SunIcon : MoonIcon;

  return (
    <Box
      w="full"
      position="fixed"
      as="nav"
      zIndex={1}
      bg="whiteAlpha.100"
      css={{ backdropFilter: 'blur(10px)' }}
      boxShadow="md"
    >
      <Container
        display="flex"
        p="2"
        maxW="container.md"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack>
          <EditIcon w={8} h={8} color="red.300" />
          <Heading>Todonimo</Heading>
        </HStack>
        <Button onClick={toggleColorMode}>
          <Icon />
        </Button>
      </Container>
    </Box>
  );
};

export default Navbar;

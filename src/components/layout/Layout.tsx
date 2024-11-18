import {AppShell, Box, Flex} from '@mantine/core';
import {ComponentPropsWithoutRef} from 'react';

import Header from '@billboggs/components/header';

import css from './Layout.module.css';

function Layout({children}: ComponentPropsWithoutRef<'div'>) {
  return (
    <Flex className={css.container} justify="center">
      <Box className={css.header}>
        <Header />
      </Box>
      <AppShell.Main>{children}</AppShell.Main>
    </Flex>
  );
}

export default Layout;

import {Anchor, AppShell, Box, Burger, Flex, Group, Menu} from '@mantine/core';
import {useMemo, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import Logo from '@billboggs/components/Logo/Logo';

import {links} from './Header.constants';
import css from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [opened, setOpened] = useState(false);

  const items = useMemo(
    () =>
      links.map((link) => (
        <Anchor
          aria-label={link.label}
          className={css.link}
          data-active={location.pathname === link.link || undefined}
          href={link.link}
          key={link.label}
          underline="never"
          onClick={(event) => {
            event.preventDefault();
            navigate(link.link);
          }}
        >
          {link.label}
        </Anchor>
      )),
    [location.pathname, navigate],
  );

  return (
    <AppShell.Header className={css.header}>
      <Flex justify="center">
        <Box className={css.inner}>
          <Flex>
            <Logo />
          </Flex>
          <Flex>
            <Group gap={5} visibleFrom="xs">
              {items}
            </Group>
          </Flex>
          <Menu
            opened={opened}
            position="bottom"
            onClose={() => setOpened(false)}
          >
            <Menu.Target>
              <Burger
                hiddenFrom="xs"
                opened={opened}
                size="sm"
                onClick={() => setOpened((o) => !o)}
              />
            </Menu.Target>
            <Menu.Dropdown>
              {links.map((link) => (
                <Menu.Item
                  key={link.label}
                  leftSection={link.icon}
                  onClick={() => navigate(link.link)}
                >
                  {link.label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Box>
      </Flex>
    </AppShell.Header>
  );
};

export default Header;

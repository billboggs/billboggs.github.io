import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Flex,
  Group,
  Menu,
} from '@mantine/core';
import {useState} from 'react';
import {FaDiagramProject} from 'react-icons/fa6';
import {GoHome} from 'react-icons/go';
import {LuBookOpen} from 'react-icons/lu';
import {PiNewspaperClipping} from 'react-icons/pi';
import {useLocation, useNavigate} from 'react-router-dom';

import {
  ABOUT_PATH,
  BLOG_PATH,
  PROJECTS_PATH,
  RESUME_PATH,
} from '@billboggs/routes';

import css from './Header.module.css';

const links = [
  {icon: <PiNewspaperClipping />, link: RESUME_PATH, label: 'Resume'},
  {icon: <FaDiagramProject />, link: PROJECTS_PATH, label: 'Projects'},
  {icon: <LuBookOpen />, link: BLOG_PATH, label: 'Blog'},
];

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [opened, setOpened] = useState(false);

  const items = links.map((link) => (
    <a
      aria-label={link.label}
      className={css.link}
      data-active={location.pathname === link.link || undefined}
      href={link.link}
      key={link.label}
      onClick={(event) => {
        event.preventDefault();
        navigate(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <AppShell.Header className={css.header}>
      <Box className={css.inner}>
        <Flex>
          <ActionIcon
            className={css.homeButton}
            variant="transparent"
            onClick={() => navigate(ABOUT_PATH)}
          >
            <GoHome size={30} />
          </ActionIcon>
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
    </AppShell.Header>
  );
}

export default Header;

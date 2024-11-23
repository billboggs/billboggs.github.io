// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports

import '@mantine/core/styles.css';

import {AppShell, MantineProvider} from '@mantine/core';
import {useEffect} from 'react';
import {createHashRouter, RouterProvider} from 'react-router-dom';

import routes from './routes';

export default function App() {
  const router = createHashRouter(routes);

  // This is needed because react router doesn't handle scenarios where '/#/' isn't in the route correctly
  useEffect(() => {
    if (!window.location.hash) {
      window.location.href = `${window.location.origin}/#/`;
    }
  }, []);

  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={{fontFamily: 'Poppins, sans-serif'}}
    >
      <AppShell header={{height: 70}}>
        <RouterProvider router={router}></RouterProvider>
      </AppShell>
    </MantineProvider>
  );
}

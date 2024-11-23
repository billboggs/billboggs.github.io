// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import {AppShell, MantineProvider} from '@mantine/core';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import routes from './routes';

export default function App() {
  const router = createBrowserRouter(routes);

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

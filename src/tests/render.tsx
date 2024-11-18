// ./test-utils/render.tsx
import {AppShell, MantineProvider} from '@mantine/core';
import {render} from '@testing-library/react';
import {ReactNode} from 'react';
import {MemoryRouter} from 'react-router-dom';

export const renderRouter = (node: ReactNode) => {
  render(
    <MantineProvider>
      <AppShell>
        <MemoryRouter initialEntries={['/']}>{node}</MemoryRouter>
      </AppShell>
    </MantineProvider>,
  );
};

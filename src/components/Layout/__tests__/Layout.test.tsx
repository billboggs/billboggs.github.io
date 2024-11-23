import {screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';

import {renderRouter} from '@billboggs/tests/render';

import Layout from '../Layout';

// Mock component to act as children in the layout
const DummyComponent = () => <div>Some dummy content</div>;

describe('Layout', () => {
  test('renders header correctly', async () => {
    renderRouter(
      <Layout>
        <DummyComponent />
      </Layout>,
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('wraps children in AppShell.Main', async () => {
    renderRouter(
      <Layout>
        <DummyComponent />
      </Layout>,
    );
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement.textContent).toBe('Some dummy content');
  });
});

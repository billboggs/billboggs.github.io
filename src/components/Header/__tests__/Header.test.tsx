import {screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';

import {renderRouter} from '@billboggs/tests/render';

import Header from '../Header';

describe('Header', () => {
  test('renders the header with logo and menu items', async () => {
    renderRouter(<Header />);

    expect(screen.getByRole('img')).toBeInTheDocument();

    // Validate that we have 3 links, the logo home link, home and resume
    const headerLinks = screen.getAllByRole('link');
    expect(headerLinks).toHaveLength(3);
  });
});

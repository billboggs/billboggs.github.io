import {screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';

import {renderRouter} from '@billboggs/tests/render';

import Logo from '../Logo';

describe('Logo component', () => {
  test('renders logo and text correctly', async () => {
    const billBoggs = 'Bill Boggs';
    renderRouter(<Logo />);

    // Ensure the image is present
    const logoImage = screen.getByRole('img');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/src/assets/logo.png');

    expect(screen.getByText(billBoggs)).toBeInTheDocument();

    const anchorElement = screen.getByRole('link', {name: billBoggs});
    expect(anchorElement).toHaveAttribute('href', '/');
  });
});

import {screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';

import {renderRouter} from '@billboggs/tests/render';
import About from '@billboggs/views/about/About';

describe('about', () => {
  test('renders the about component correctly', async () => {
    renderRouter(<About />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });
});

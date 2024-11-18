import {screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';

import {renderRouter} from '@billboggs/tests/render';

import Blog from '../Blog';

describe('blog', () => {
  test('renders the blog component correctly', async () => {
    renderRouter(<Blog />);
    expect(screen.getByText('Coming Soon')).toBeInTheDocument();
  });
});

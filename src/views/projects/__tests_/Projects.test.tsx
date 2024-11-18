import {screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';

import {renderRouter} from '@billboggs/tests/render';
import Projects from '@billboggs/views/projects/Projects';

describe('projects', () => {
  test('renders the Projects component correctly', async () => {
    renderRouter(<Projects />);
    expect(screen.getByText('Coming Soon')).toBeInTheDocument();
  });
});

import {screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';

import {renderRouter} from '@billboggs/tests/render';
import Resume from '@billboggs/views/resume/Resume';

describe('resume', () => {
  test('renders the Resume component correctly', async () => {
    renderRouter(<Resume />);
    expect(screen.getByText('Coming Soon')).toBeInTheDocument();
  });
});

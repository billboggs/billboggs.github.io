import {screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';

import {renderRouter} from '@billboggs/tests/render';

import Contact from '../Contact';
import {
  GITHUB_LABEL,
  GITHUB_URL,
  LINKEDIN_LABEL,
  LINKEDIN_URL,
  MAIL_LABEL,
  MAIL_TO,
} from '../Contact.constants';

describe('Contact component', () => {
  test('renders social media links correctly', async () => {
    renderRouter(<Contact />);
    const linkedinLink = screen.getByLabelText(LINKEDIN_LABEL);
    expect(linkedinLink).toHaveAttribute('href', LINKEDIN_URL);

    const githubLink = screen.getByLabelText(GITHUB_LABEL);
    expect(githubLink).toHaveAttribute('href', GITHUB_URL);

    const mailLink = screen.getByLabelText(MAIL_LABEL);
    expect(mailLink).toHaveAttribute('href', MAIL_TO);
  });
});

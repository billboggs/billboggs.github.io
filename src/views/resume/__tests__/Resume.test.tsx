import {screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';

import {renderRouter} from '@billboggs/tests/render';
import Resume from '@billboggs/views/resume/Resume';

import {
  CERTIFICATIONS_SECTION,
  EDUCATION_SECTION,
  EXPERIENCE_SECTION,
  PROJECTS_SECTION,
  RESUME_ITEMS,
  TECHNICAL_SKILLS_SECTION,
} from '../Resume.constants';

describe('resume', () => {
  test('renders the experience section correctly', async () => {
    renderRouter(<Resume />);
    expect(screen.getByText(EXPERIENCE_SECTION)).toBeInTheDocument();
  });

  test('renders correct professional experience accordion items', async () => {
    renderRouter(<Resume />);
    RESUME_ITEMS.forEach((item) => {
      const elements = screen.getAllByText(item.title);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  test('renders the skills section correctly', async () => {
    renderRouter(<Resume />);
    expect(screen.getByText(TECHNICAL_SKILLS_SECTION)).toBeInTheDocument();
  });

  test('renders the education section correctly', async () => {
    renderRouter(<Resume />);
    expect(screen.getByText(EDUCATION_SECTION)).toBeInTheDocument();
  });

  test('renders the certifications section correctly', async () => {
    renderRouter(<Resume />);
    expect(screen.getByText(CERTIFICATIONS_SECTION)).toBeInTheDocument();
  });

  test('renders the projects section correctly', async () => {
    renderRouter(<Resume />);
    expect(screen.getByText(PROJECTS_SECTION)).toBeInTheDocument();
  });
});

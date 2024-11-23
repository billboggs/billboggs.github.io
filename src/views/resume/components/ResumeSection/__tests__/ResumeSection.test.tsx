import {screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';

import {renderRouter} from '@billboggs/tests/render';

import ResumeSection from '../ResumeSection';

const sectionTitle = 'Education';
const childrenContent = <p>University of Example</p>;

describe('ResumeSection component', () => {
  it('renders with a title and children content', async () => {
    renderRouter(
      <ResumeSection title={sectionTitle}>{childrenContent}</ResumeSection>,
    );

    expect(screen.getByText(sectionTitle)).toBeInTheDocument();
    expect(screen.getByText('University of Example')).toBeInTheDocument();
  });

  it('renders with multiple children', async () => {
    renderRouter(
      <ResumeSection title={sectionTitle}>
        <p>University of Example</p>
        <p>Degree in Computer Science</p>
      </ResumeSection>,
    );

    expect(screen.getByText(sectionTitle)).toBeInTheDocument();
    expect(screen.getByText('University of Example')).toBeInTheDocument();
    expect(screen.getByText('Degree in Computer Science')).toBeInTheDocument();
  });
});

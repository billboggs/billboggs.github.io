import {screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';

import {renderRouter} from '@billboggs/tests/render';
import {ResumeItem} from '@billboggs/views/resume/Resume.constants';

import JobItem from '../JobItem';

describe('JobItem', () => {
  test('renders job item with correct title and company information', async () => {
    const title = 'Software Engineer';
    const timespan = 'Jan 2021 - Present';
    const companyName = 'Test company';
    const props: ResumeItem = {
      company: {
        name: companyName,
        logo: '/example-logo.png',
        website: 'https://example.com',
      },
      timespan: timespan,
      title: title,
    };

    renderRouter(<JobItem {...props} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(companyName)).toBeInTheDocument();
    expect(screen.getByText(timespan)).toBeInTheDocument();
  });
});

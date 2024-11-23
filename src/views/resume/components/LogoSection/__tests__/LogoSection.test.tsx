import {screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';

import {renderRouter} from '@billboggs/tests/render';

import LogoSection from '../LogoSection';

const descriptionText = 'Sample description';
const leftSectionText = 'Left section content';
const rightSectionText = 'Right section content';

const leftSectionContent = <span>{leftSectionText}</span>;
const rightSectionContent = <span>{rightSectionText}</span>;

const logoPath = 'test.png';

describe('LogoSection component', () => {
  test('renders logo with left and right sections correctly', async () => {
    renderRouter(
      <LogoSection
        description={descriptionText}
        leftSection={leftSectionContent}
        logoSrc={logoPath}
        rightSection={rightSectionContent}
      />,
    );

    const logoImage = screen.getByRole('img');
    expect(logoImage).toHaveAttribute('src', logoPath);

    expect(screen.getByText(descriptionText)).toBeInTheDocument();

    expect(screen.getByText(leftSectionText)).toBeInTheDocument();
    expect(screen.getByText(rightSectionText)).toBeInTheDocument();
  });

  test('renders logo with description but no right section', async () => {
    renderRouter(
      <LogoSection
        description={descriptionText}
        leftSection={leftSectionContent}
        logoSrc={logoPath}
      />,
    );

    expect(screen.getByText(descriptionText)).toBeInTheDocument();
    expect(screen.queryByText(rightSectionText)).not.toBeInTheDocument();
  });

  test('renders logo without description', async () => {
    renderRouter(
      <LogoSection
        leftSection={leftSectionContent}
        logoSrc="/path/to/logo.png"
      />,
    );

    expect(screen.getByText(leftSectionText)).toBeInTheDocument();
    expect(screen.queryByText(descriptionText)).not.toBeInTheDocument();
  });
});

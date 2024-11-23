import {Flex, Image, Stack, Text} from '@mantine/core';
import {ReactNode} from 'react';

import css from './LogoSection.module.css';

interface LogoSectionProps {
  description?: string;
  leftSection: ReactNode;
  logoSrc: string;
  rightSection?: ReactNode;
}

const LogoSection = ({
  description,
  leftSection,
  logoSrc,
  rightSection,
}: LogoSectionProps) => {
  return (
    <Flex align="center" gap="md" justify="space-between">
      <Flex align="center" h={60} w={70}>
        <Image fit="contain" mah="60" maw="70" src={logoSrc} />
      </Flex>
      <Flex
        className={css.logoSectionContent}
        direction={{base: 'column', sm: 'row'}}
        gap={1}
        justify="space-between"
      >
        <Stack gap={0}>
          {leftSection}
          {description && <Text>{description}</Text>}
        </Stack>
        {rightSection && (
          <Stack className={css.logoSectionContentRight} gap={0}>
            {rightSection}
          </Stack>
        )}
      </Flex>
    </Flex>
  );
};

export default LogoSection;

import {Divider, Stack, Title} from '@mantine/core';
import {ReactNode} from 'react';

interface ResumeSectionProps {
  title: string;
  children: ReactNode;
}

const ResumeSection = ({title, children}: ResumeSectionProps) => {
  return (
    <Stack gap="md" mb={20}>
      <Title size="lg">{title}</Title>
      <Divider size="sm" />
      {children}
    </Stack>
  );
};

export default ResumeSection;

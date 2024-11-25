import {Text} from '@mantine/core';

import LogoSection from '@billboggs/views/resume/components/LogoSection';
import {ResumeItem} from '@billboggs/views/resume/Resume.constants';
import css from '@billboggs/views/resume/Resume.module.css';

const JobItem = ({company, timespan, title}: ResumeItem) => {
  return (
    <>
      <LogoSection
        leftSection={
          <>
            <Text className={css.sectionTitle}>{title}</Text>
            <Text c="dimmed" fw={400} size="sm">
              {company.name}
            </Text>
          </>
        }
        logoSrc={company.logo}
        rightSection={
          <>
            <Text c="dimmed" fw={400} size="sm">
              {timespan}
            </Text>
          </>
        }
      />
    </>
  );
};

export default JobItem;

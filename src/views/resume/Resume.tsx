import {
  Accordion,
  Anchor,
  Box,
  Card,
  Flex,
  Grid,
  Group,
  List,
  Rating,
  Text,
  Title,
} from '@mantine/core';

import Boeing from '@billboggs/assets/boeing.svg';
import CKA from '@billboggs/assets/cka.png';
import PSU from '@billboggs/assets/psu.svg';
import Contact from '@billboggs/components/Contact';
import Layout from '@billboggs/components/Layout';

import LogoSection from './components/LogoSection';
import ResumeSection from './components/ResumeSection';
import {
  CERTIFICATIONS_SECTION,
  CKA_URL,
  EDUCATION_SECTION,
  EXPERIENCE_SECTION,
  PROJECTS_SECTION,
  PSU_URL,
  RESUME_ITEMS,
  ResumeItem,
  ROLE_TITLE,
  ROTOR_WAKE_URL,
  SKILLS,
  TECHNICAL_SKILLS_SECTION,
} from './Resume.constants';
import css from './Resume.module.css';

const Resume = () => {
  return (
    <Layout>
      <Flex align="center" className={css.container} direction="column">
        <Flex className={css.content} direction="column" gap={20}>
          <Group align="flex-start" gap="xs" justify="space-between">
            <Flex
              align="flex-start"
              className={css.description}
              direction={{base: 'column', xs: 'row'}}
              gap={10}
              justify="space-between"
            >
              <Title className={css.roleTitle}>{ROLE_TITLE}</Title>
              <Contact />
            </Flex>
            <Text className={css.descriptionSummary}>
              I am a software developer with a strong passion for continuous
              learning in response to the evolving technology landscape. My
              professional experience spans a variety of domains, including
              embedded systems, full-stack web development, and
              Infrastructure/DevOps engineering. Currently, I am focused on
              expanding my expertise in AI tooling to stay at the forefront of
              emerging technologies.
            </Text>
          </Group>
          <ResumeSection title={EXPERIENCE_SECTION}>
            <Accordion multiple radius="lg" variant="separated">
              {RESUME_ITEMS.map((item, index) => (
                <Accordion.Item
                  aria-label="Job Detail"
                  className={index % 2 === 0 ? css.evenRow : css.oddRow}
                  key={item.id}
                  value={item.company.name}
                >
                  <Accordion.Control>
                    <JobItem
                      company={item.company}
                      timespan={item.timespan}
                      title={item.title}
                    />
                  </Accordion.Control>
                  <Accordion.Panel className={css.jobHighlights}>
                    <List>
                      {item.highlights?.map(
                        (highlight: string, index: number) => (
                          <List.Item key={index}>{highlight}</List.Item>
                        ),
                      )}
                    </List>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </ResumeSection>
          <ResumeSection title={TECHNICAL_SKILLS_SECTION}>
            {Object.keys(SKILLS).map((category) => (
              <Box key={category}>
                <Title mb="sm" order={3} size="h5">
                  {category}
                </Title>
                <Grid>
                  {SKILLS[category].map((skill) => (
                    <Grid.Col
                      key={skill.name}
                      span={{xs: 12, sm: 6, base: 6, md: 6, lg: 3}}
                    >
                      <Card padding="lg" radius="md" shadow="sm" withBorder>
                        <Group>
                          <Flex align="center" gap={10}>
                            {skill.icon}
                            <Text w={500}>{skill.name}</Text>
                          </Flex>
                          <Rating value={skill.level} />
                        </Group>
                      </Card>
                    </Grid.Col>
                  ))}
                </Grid>
              </Box>
            ))}
          </ResumeSection>
          <ResumeSection title={EDUCATION_SECTION}>
            <LogoSection
              leftSection={
                <>
                  <Anchor c="inherit" href={PSU_URL} target="_blank">
                    <Text className={css.sectionTitle} fw="bold">
                      The Pennsylvania State University
                    </Text>
                  </Anchor>
                  <Text c="dimmed" fw={400} size="sm">
                    Bachelor of Science in Computer Engineering
                  </Text>
                </>
              }
              logoSrc={PSU}
              rightSection={
                <>
                  <Text
                    c={{base: 'dimmed', xs: 'inherit'}}
                    fw={{base: 400, xs: 'normal'}}
                    size="sm"
                  >
                    State College, PA
                  </Text>
                  <Text c="dimmed" fw={400} size="sm">
                    Graduated December 2013
                  </Text>
                </>
              }
            />
          </ResumeSection>
          <ResumeSection title={CERTIFICATIONS_SECTION}>
            <LogoSection
              leftSection={
                <>
                  <Anchor c="inherit" href={CKA_URL} target="_blank">
                    <Text className={css.sectionTitle} fw="bold">
                      Certified Kubernetes Administrator
                    </Text>
                  </Anchor>
                  <Text c="dimmed" fw={400} size="sm">
                    Cloud Native Computing Foundation (CNCF)
                  </Text>
                </>
              }
              logoSrc={CKA}
              rightSection={
                <>
                  <Text
                    c={{base: 'dimmed', xs: 'inherit'}}
                    fw={{base: 400, xs: 'normal'}}
                    size="sm"
                  >
                    June 2019 - June 2022
                  </Text>
                  <Text c="dimmed" fw={400} size="sm">
                    Credential ID CKA-1900-002160-0100
                  </Text>
                </>
              }
            />
          </ResumeSection>
          <ResumeSection title={PROJECTS_SECTION}>
            <LogoSection
              description="
                Designed a robotic system with The Boeing Company for pressure
                probe readings underneath a helicopter rotor. Won the Boeing
                systems engineering award through Penn State for work on the
                project.
          "
              leftSection={
                <>
                  <Anchor c="inherit" href={ROTOR_WAKE_URL} target="_blank">
                    <Text className={css.sectionTitle} fw="bold">
                      Automated Rotor Wake Survey
                    </Text>
                  </Anchor>
                  <Text c="dimmed" fw={400} size="sm">
                    The Boeing Company
                  </Text>
                </>
              }
              logoSrc={Boeing}
            />
          </ResumeSection>
        </Flex>
      </Flex>
    </Layout>
  );
};

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

export default Resume;

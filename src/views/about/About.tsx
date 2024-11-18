import {Anchor, Flex, Image, Text, Title} from '@mantine/core';
import {BiLogoGmail} from 'react-icons/bi';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

import Profile from '@billboggs/assets/profile.jpeg';
import Layout from '@billboggs/components/layout';

import {
  GITHUB_LABEL,
  GITHUB_URL,
  ICON_SIZE,
  LINKEDIN_LABEL,
  LINKEDIN_URL,
  MAIL_LABEL,
  MAIL_TO,
} from './About.constants';
import css from './About.module.css';

const About = () => {
  return (
    <Layout>
      <Flex align="center" className={css.container}>
        <Image
          className={css.profile}
          fit="contain"
          radius="lg"
          src={Profile}
          w="auto"
        />
        <Flex className={css.description} direction="column" gap="md">
          <Title>About Me</Title>
          <Text>
            Hi there! I&apos;m Bill Boggs, a Software Engineer with a passion
            for learning all parts of the software stack. I&apos;m currently
            focused on AI and how it will shape the future of software
            development.
          </Text>
          <Title>Let&apos;s Connect</Title>
          <Text>
            Browse through my projects, read about my latest ventures, or reach
            out—I&apos;d love to collaborate and exchange ideas!
          </Text>
          <Flex gap="md">
            <Anchor aria-label={LINKEDIN_LABEL} c="inherit" href={LINKEDIN_URL}>
              <FaLinkedin size={ICON_SIZE} />
            </Anchor>
            <Anchor aria-label={GITHUB_LABEL} c="inherit" href={GITHUB_URL}>
              <FaGithub size={ICON_SIZE} />
            </Anchor>
            <Anchor aria-label={MAIL_LABEL} c="inherit" href={MAIL_TO}>
              <BiLogoGmail size={ICON_SIZE} />
            </Anchor>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default About;

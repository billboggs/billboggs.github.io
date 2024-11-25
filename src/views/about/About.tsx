import {Flex, Image, Text, Title} from '@mantine/core';

import Profile from '@billboggs/assets/profile.jpg';
import Contact from '@billboggs/components/Contact';
import Layout from '@billboggs/components/Layout';

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
          <Text>
            Browse through my projects, read about my latest ventures, or reach
            out—I&apos;d love to collaborate and exchange ideas!
          </Text>
          <Contact />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default About;

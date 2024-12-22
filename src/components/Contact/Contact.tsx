import {Anchor, Flex, Tooltip} from '@mantine/core';
import {BiLogoGmail} from 'react-icons/bi';
import {FaDownload, FaGithub, FaLinkedin} from 'react-icons/fa';

import {RESUME_URL} from '@billboggs/constants';

import {
  GITHUB_LABEL,
  GITHUB_URL,
  ICON_SIZE,
  LINKEDIN_LABEL,
  LINKEDIN_URL,
  MAIL_LABEL,
  MAIL_TO,
} from './Contact.constants';

const Contact = () => {
  return (
    <Flex align="center" gap="md">
      <Anchor
        aria-label={LINKEDIN_LABEL}
        c="inherit"
        href={LINKEDIN_URL}
        target="_blank"
      >
        <FaLinkedin size={ICON_SIZE} />
      </Anchor>
      <Anchor
        aria-label={GITHUB_LABEL}
        c="inherit"
        href={GITHUB_URL}
        target="_blank"
      >
        <FaGithub size={ICON_SIZE} />
      </Anchor>
      <Anchor
        aria-label={MAIL_LABEL}
        c="inherit"
        href={MAIL_TO}
        target="_blank"
      >
        <BiLogoGmail size={ICON_SIZE} />
      </Anchor>
      <Tooltip label="Download Resume">
        <Anchor
          aria-label="Download Resume"
          c="inherit"
          href={RESUME_URL}
          target="_blank"
        >
          <FaDownload />
        </Anchor>
      </Tooltip>
    </Flex>
  );
};

export default Contact;

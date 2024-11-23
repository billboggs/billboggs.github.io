import {Anchor, Group, Image, Text} from '@mantine/core';

import BB from '@billboggs/assets/logo.png';
import {ABOUT_PATH} from '@billboggs/routes';

function Logo() {
  return (
    <Anchor c="inherit" href={ABOUT_PATH} underline="never">
      <Group gap="xs">
        <Image height={50} src={BB} width={50} />
        <Text fw="bold" size="lg">
          Bill Boggs
        </Text>
      </Group>
    </Anchor>
  );
}

export default Logo;

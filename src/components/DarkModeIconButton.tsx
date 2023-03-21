import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FC, ComponentPropsWithoutRef } from 'react';

const DarkModeIconButton: FC = ({ ...rest }: ComponentPropsWithoutRef<typeof IconButton>) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={isDark ? <MoonIcon /> : <SunIcon />}
      aria-label={'dark-mode-toggle'}
      top={0}
      right={2}
      position="absolute"
      {...rest}
    />
  );
};

export default DarkModeIconButton;

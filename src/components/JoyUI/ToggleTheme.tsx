'use client';

import { defaultModeAtom } from '@/util/atom';
import { Button, useColorScheme } from '@mui/joy';
import { useAtom } from 'jotai';

export function ToggleTheme() {
  const { mode, setMode } = useColorScheme();
  const [defaultMode, setDefaultMode] = useAtom(defaultModeAtom);

  return <Button {...{ onClick }}>aa</Button>;

  function onClick() {
    const newMode = mode === 'dark' ? 'light' : 'dark';

    setMode(newMode);
    setDefaultMode(newMode);
  }
}

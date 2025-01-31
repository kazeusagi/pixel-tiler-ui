'use client';

import { MyLink } from '@/components/Elements';
import { ToggleTheme } from '@/components/JoyUI';
import type { LoadingStatus } from '@/types';
import { loadingStatusAtom } from '@/util/atoms';
import { Button } from '@mui/joy';
import { useSetAtom } from 'jotai';

export default function Home() {
  const setLoadingStatus = useSetAtom(loadingStatusAtom);

  return (
    <>
      <ToggleTheme />
      <Button onClick={() => onclick('loading')}>load</Button>
      <Button onClick={() => onclick('success')}>success</Button>
      <Button onClick={() => onclick('error')}>error</Button>

      <MyLink href='/about'>About</MyLink>
      <MyLink href='/sandbox'>Sandbox</MyLink>
    </>
  );

  function onclick(status: LoadingStatus) {
    setLoadingStatus(status);
  }
}

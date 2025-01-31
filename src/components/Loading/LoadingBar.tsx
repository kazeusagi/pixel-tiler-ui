'use client';

import { loadingStatusAtom } from '@/util/atoms';
import { Box, LinearProgress } from '@mui/joy';
import { useAtom } from 'jotai';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function LoadingBar() {
  const pathname = usePathname();
  const [loadingStatus, setLoadingStatus] = useAtom(loadingStatusAtom);

  // 画面遷移時は完了状態にする
  useEffect(() => {
    setLoadingStatus('success');
  }, [pathname]);

  // ステータスが完了かエラーなら時間差で待機状態にする
  useEffect(() => {
    if (!(loadingStatus === 'success' || loadingStatus === 'error')) return;
    const timer = loadingStatus === 'success' ? 800 : 4000;
    const timeout = setTimeout(() => {
      setLoadingStatus('idle');
    }, timer);
    return () => clearTimeout(timeout);
  }, [loadingStatus]);

  return (
    <Box position='absolute' top={0} left={0} width='100%'>
      {loadingStatus !== 'idle' && (
        <LinearProgress
          variant='solid'
          color={color()}
          determinate={determinate()}
          sx={{ borderRadius: 0, zIndex: 1 }}
        />
      )}
    </Box>
  );

  function color() {
    if (loadingStatus === 'loading') return 'primary';
    if (loadingStatus === 'success') return 'success';
    if (loadingStatus === 'error') return 'danger';
    return 'primary';
  }

  function determinate() {
    return loadingStatus === 'success' || loadingStatus === 'error';
  }
}

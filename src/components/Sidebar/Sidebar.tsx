'use client';
import { blinkAnimation } from '@/util/animations';
import { Box, Sheet, useTheme } from '@mui/joy';

export function Sidebar() {
  const theme = useTheme();
  const width = '240px';
  const blink = blinkAnimation(0.6, 1);

  return (
    <Box display='flex'>
      <Sheet
        sx={{
          width: width,
          height: '100dvh',
        }}
      >
        aa
      </Sheet>
      <Box
        position='relative'
        left='-1.5px'
        width='3px'
        bgcolor={theme.vars.palette.primary[500]}
        sx={{
          filter: 'blur(3px)',
          animation: 'blink infinite 3s',
          blink,
        }}
      />
    </Box>
  );
}

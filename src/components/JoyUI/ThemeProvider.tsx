'use client';

import { defaultModeAtom } from '@/util/atoms';
import { CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy';
import InitColorSchemeScript from '@mui/joy/InitColorSchemeScript';
import { useAtomValue } from 'jotai';
import { Noto_Sans_JP, Roboto } from 'next/font/google';

type Props = {
  children: React.ReactNode;
};

const roboto = Roboto({ subsets: ['latin'], weight: '400' });
const notosansjp = Noto_Sans_JP({ subsets: ['latin'] });

export function ThemeProvider({ children }: Props) {
  const defaultMode = useAtomValue(defaultModeAtom);

  const customTheme = extendTheme({
    fontFamily: {
      body: `${roboto.style.fontFamily}, ${notosansjp.style.fontFamily}, sans-serif`,
    },
    colorSchemes: {
      dark: {
        palette: {
          background: {
            body: '#1b1b1f',
          },
        },
      },
    },
  });

  return (
    <>
      <InitColorSchemeScript />
      <CssVarsProvider defaultMode={defaultMode} theme={customTheme}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </>
  );
}

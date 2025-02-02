'use client';

import { loadingStatusAtom } from '@/util/atoms';
import { Link as JoyLink } from '@mui/joy';
import { useSetAtom } from 'jotai';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {
  href: string;
  children: React.ReactNode;
};

export function MyLink({ href, children }: Props) {
  const router = useRouter();

  const setLoadingStatus = useSetAtom(loadingStatusAtom);

  return (
    <JoyLink component={NextLink} href={href} onClick={onClick}>
      {children}
    </JoyLink>
  );

  // 遷移時にローディングを行う
  function onClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    setLoadingStatus('loading');
    router.push(href);
  }
}

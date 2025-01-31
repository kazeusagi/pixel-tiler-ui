import type { LoadingStatus } from '@/types';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const defaultModeAtom = atomWithStorage<'light' | 'dark'>('defaultMode', 'light');

// loading
export const loadingStatusAtom = atom<LoadingStatus>('idle');

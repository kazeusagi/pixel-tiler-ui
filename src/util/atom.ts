import { atomWithStorage } from 'jotai/utils';

export const defaultModeAtom = atomWithStorage<'light' | 'dark'>('defaultMode', 'light');

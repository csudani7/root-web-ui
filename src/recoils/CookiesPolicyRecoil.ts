import { atom } from 'recoil';

export const isCookiesPolicyVisibleAtom = atom<boolean>({
  key: 'isCookiesPolicyVisibleAtom',
  default: true,
});

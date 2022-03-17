import { atom } from 'recoil';

export const isRequestQuoteBannerOnAtom = atom<boolean>({
  key: 'isRequestQuoteBanner',
  default: false,
});

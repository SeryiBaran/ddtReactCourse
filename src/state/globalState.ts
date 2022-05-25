import { atom } from 'recoil';

export const globalState = atom({
  key: 'globalState',
  default: {
    count: 0,
    name: 'Какие-то данные',
  },
});

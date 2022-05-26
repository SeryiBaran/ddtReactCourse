import { atom } from 'recoil';

export const GlobalState = atom({
  key: 'GlobalState',
  default: {
    count: 0,
    name: 'Какие-то данные',
  },
});

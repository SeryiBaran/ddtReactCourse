import { atom } from 'recoil';

export const globalState = atom({
  key: 'loggedInUser',
  default: {
    count: 0,
    name: 'Какие-то данные',
  },
});

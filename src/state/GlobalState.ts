import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'GlobalStatePersist',
});

export interface IGlobalState {
  count: number;
  text: string;
}

export const defaultValue: IGlobalState = {
  count: 0,
  text: 'Текст',
};

export const GlobalState = atom({
  key: 'GlobalState',
  default: defaultValue,
  effects_UNSTABLE: [persistAtom],
});

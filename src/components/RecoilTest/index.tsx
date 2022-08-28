import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { MiniButton } from '@/components/MiniButton';

import { IGlobalState, defaultValue, GlobalState } from '@/state/GlobalState';

const StyledRecoilTest = styled.div`
  border: 1px solid #000;
  padding: 1rem;
`;

export const RecoilTest = () => {
  const [GSInstance, setGSInstance] = useRecoilState<IGlobalState>(GlobalState);
  return (
    <StyledRecoilTest>
      <p>
        Все компоненты "RecoilTest" связаны общим состояием с помощью Recoil.
      </p>
      <p>Состояние хранится в localStorage.</p>
      <MiniButton
        onClick={() => {
          for (const i in localStorage) {
            delete localStorage[i];
          }
        }}
      >
        Очистить localStorage
      </MiniButton>
      <MiniButton
        onClick={() => {
          setGSInstance(defaultValue);
        }}
      >
        Установить defaultValue
      </MiniButton>
      <MiniButton
        onClick={() => {
          setGSInstance(GSInstance => ({
            ...GSInstance,
            count: GSInstance.count + 1,
          }));
        }}
      >
        Увеличить count на 1
      </MiniButton>
      <MiniButton
        onClick={() => {
          setGSInstance(GSInstance => ({
            ...GSInstance,
            count: GSInstance.count - 1,
          }));
        }}
      >
        Уменьшить count на 1
      </MiniButton>
      <p>
        GlobalState.count: <b>{GSInstance.count}</b>
      </p>
      <p>
        GlobalState.text: <b>{GSInstance.text}</b>
      </p>
    </StyledRecoilTest>
  );
};

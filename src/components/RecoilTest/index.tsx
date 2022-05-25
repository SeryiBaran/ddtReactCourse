import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { MiniButton } from '../MiniButton';

import { globalState } from '../../state/globalState';


const StyledRecoilTest = styled.div`
  border: 1px solid #000;
  padding: 1rem;
`;

export const RecoilTest: React.FC = () => {
  const [data, setData] = useRecoilState(globalState);
  return (
    <StyledRecoilTest>
      <p>Все компоненты "RecoilTest" связаны с помощью Recoil!</p>
      <MiniButton
        onClick={() => {
          setData(data => ({
            ...data,
            count: data.count + 1,
          }));
        }}
      >
        Увеличить data.count на 1
      </MiniButton>
      <p>
        data.count: <b>{data.count}</b>
      </p>
      <p>
        data.name: <b>{data.name}</b>
      </p>
    </StyledRecoilTest>
  );
};
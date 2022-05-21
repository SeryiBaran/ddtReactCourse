import React from 'react';
import styled from 'styled-components';

import {Clock} from '../Clock/Clock';

const TimerH1 = styled.h1`
  font-size: 1.3em;
  text-align: center;
`;

export const Timer: React.FC = () => {
  return (
    <TimerH1>
      Время в палате: <Clock />
    </TimerH1>
  );
};

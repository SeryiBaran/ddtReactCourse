import React from 'react';
import styled from 'styled-components';

import { Clock } from '../Clock';

const StyledTimer = styled.h1`
  font-size: 1.3em;
  text-align: center;
`;

export const Timer: React.FC = () => {
  return (
    <StyledTimer>
      Время в палате: <Clock />
    </StyledTimer>
  );
};

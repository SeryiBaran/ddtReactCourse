import { FC } from 'react';
import styled from 'styled-components';

import { Clock } from '@/components/Clock';

const StyledTimer = styled.h1`
  font-size: 1.3em;
  text-align: center;
`;

export const Timer: FC = () => {
  return (
    <StyledTimer>
      Время в палате: <Clock />
    </StyledTimer>
  );
};

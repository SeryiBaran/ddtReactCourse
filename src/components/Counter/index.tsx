import { FC } from 'react';
import styled from 'styled-components';

import { MiniButton } from '@/components/MiniButton';

import { useCounter } from '@/hooks/useCounter';

export const Counter: FC = () => {
  const { counter, increment, decrement } = useCounter(0);

  return (
    <div className="Counter">
      <h1>{counter}</h1>
      <MiniButton onClick={decrement}>-</MiniButton>
      <MiniButton onClick={increment}>+</MiniButton>
    </div>
  );
};

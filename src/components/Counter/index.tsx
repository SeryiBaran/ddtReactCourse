import React from 'react';
import styled from 'styled-components';

import { MiniButton } from '../MiniButton';

import { useCounter } from '../../hooks/useCounter';

export const Counter = () => {
  const { counter, increment, decrement } = useCounter(0);

  return (
    <div className="Counter">
      <h1>{counter}</h1>
      <MiniButton onClick={decrement}>-</MiniButton>
      <MiniButton onClick={increment}>+</MiniButton>
    </div>
  );
};

import React from 'react';
import styled from 'styled-components';

import { useCounter } from '../../hooks/useCounter';

const Button = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  margin: 1rem;
`;

export const Counter = () => {
  const { counter, increment, decrement } = useCounter(0);

  return (
    <div className="Counter">
      <h1>{counter}</h1>
      <Button onClick={decrement}>-</Button>
      <Button onClick={increment}>+</Button>
    </div>
  );
};

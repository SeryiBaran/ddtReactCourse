import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  margin: 1rem;
`;

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="Counter">
      <h1>{value}</h1>
      <Button
        onClick={() => {
          setValue(value => value - 1);
        }}
      >
        -
      </Button>
      <Button
        onClick={() => {
          setValue(value => value + 1);
        }}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;

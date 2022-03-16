import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #000;
`;

const InputTest: React.FC = () => {
  const [value, setValue] = useState<string>('Это - управляемый input!');

  return (
    <div>
      <h1>{value}</h1>
      <Input
        type="text"
        defaultValue={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default InputTest;

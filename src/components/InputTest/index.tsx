import React, { useState } from 'react';
import styled from 'styled-components';

import { Input } from '../Input';

export const InputTest: React.FC = () => {
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

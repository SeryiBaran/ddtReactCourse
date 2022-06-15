import { FC, useState } from 'react';

import { Input } from '@/components/Input';

export const InputTest: FC = () => {
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

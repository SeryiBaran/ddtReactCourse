import React, { useState } from 'react';

import styles from './InputTest.module.css';

const InputTest: React.FC = () => {
  const [value, setValue] = useState<string>('Это - управляемый input!');

  return (
    <>
      <h1>{value}</h1>
      <input
        type="text"
        className={styles['input']}
        defaultValue={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
    </>
  );
};

export default InputTest;

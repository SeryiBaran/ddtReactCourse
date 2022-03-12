import React, { useState } from 'react';

import styles from './InputTest.module.css';

function InputTest() {
  const [value, setValue] = useState('Это - управляемый input!');

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
}

export default InputTest;

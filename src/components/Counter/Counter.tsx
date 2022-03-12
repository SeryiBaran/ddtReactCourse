import React, { useState } from 'react';

import styles from './Counter.module.css';

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="Counter">
      <h1>{value}</h1>
      <button
        className={styles['button']}
        onClick={() => {
          setValue(value => value - 1);
        }}
      >
        -
      </button>
      <button
        className={styles['button']}
        onClick={() => {
          setValue(value => value + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;

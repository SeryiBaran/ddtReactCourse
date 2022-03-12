import React from 'react';

import styles from './Timer.module.css';

import Clock from '../Clock/Clock';

const Timer: React.FC = () => {
  return (
    <h1 className={styles.timer}>
      Время в палате: <Clock />
    </h1>
  );
};

export default Timer;

import React from 'react';

import styles from './Timer.module.css';

import Clock from '../Clock/Clock';

function Timer() {
  return (
    <h1 className={styles.timer}>Время в палате: <Clock /></h1>
  )
}

export default Timer;

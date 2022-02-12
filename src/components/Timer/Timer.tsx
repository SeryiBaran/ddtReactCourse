import React from 'react';
import './Timer.css';
import Clock from '../Clock/Clock';

function Timer() {
  return (
    <h1 className="timer">Время в палате: <Clock /></h1>
  )
}

export default Timer;

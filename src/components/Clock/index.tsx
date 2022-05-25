import React, { useState, useEffect } from 'react';

export const Clock: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  let timerID: number;

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      timerID = window.setInterval(tick, 1000);
    }

    return () => {
      clearInterval(timerID);
      isMounted = false;
    };
  }, []);

  return <>{date.toLocaleTimeString()}</>;
};
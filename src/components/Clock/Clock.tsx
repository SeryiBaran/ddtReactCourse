import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [timerID, setTimerID] = useState<ReturnType<typeof setInterval>>();

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setTimerID(setInterval(tick, 1000));
    }

    return () => {
      clearInterval(timerID);
      isMounted = false;
    };
  }, []);

  return <>{date.toLocaleTimeString()}</>;
};

export default Clock;

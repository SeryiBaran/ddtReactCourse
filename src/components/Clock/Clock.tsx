import React, { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());
  const [timerID, setTimerID] = useState(0);

  function tick() {
    setDate(date => new Date());
  }

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setTimerID(setInterval(() => tick(), 1000));
    }

    return () => {
      clearInterval(timerID);
      isMounted = false;
    };
  }, []);

  return <>{date.toLocaleTimeString()}</>;
}

export default Clock;

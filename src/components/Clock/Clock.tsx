import React, { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());
  const [timerID, setTimerID] = useState(0);

  useEffect(() => {
    setTimerID(setInterval(() => tick(), 1000));

    return () => {
      clearInterval(timerID);
    }
  }, [])

  function tick() {
    setDate(date => new Date());
  }

  return (
    <>
      {date.toLocaleTimeString()}
    </>
  );
}

export default Clock;

import React, { useState, useEffect, useRef } from 'react';

const Clock: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const timerRef = useRef<number>();

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      timerRef.current = setInterval(tick, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
      isMounted = false;
    };
  }, []);

  return <>{date.toLocaleTimeString()}</>;
};

export default Clock;

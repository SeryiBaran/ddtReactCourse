import React, { useState, useEffect } from 'react';

export const StateTest: React.FC = () => {
  const [liveTime, setLiveTime] = useState<number>(3);
  let timerID: number;

  function tick() {
    setLiveTime(liveTime => liveTime - 1);
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

  return (
    <div>
      {!(liveTime < 1) && (
        <h2>Эта надпись исчезнет через {liveTime} секунд!</h2>
      )}
    </div>
  );
};

import React, { useState, useEffect } from 'react';

const StateTest: React.FC = () => {
  const [liveTime, setLiveTime] = useState<number>(3);
  const [timerID, setTimerID] = useState<number>(0);

  function tick() {
    setLiveTime(liveTime => liveTime - 1);
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

  return (
    <div>
      {!(liveTime < 1) && (
        <h2>Эта надпись исчезнет через {liveTime} секунд!</h2>
      )}
    </div>
  );
};

export default StateTest;

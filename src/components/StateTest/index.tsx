import { useState, useEffect } from 'react';

export const StateTest = () => {
  const [liveTime, setLiveTime] = useState<number>(3);
  let timerID: number;

  const tick = () => {
    setLiveTime(liveTime => liveTime - 1);
  };

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
    <>
      {!(liveTime < 1) && (
        <h2>Эта надпись исчезнет через {liveTime} секунд!</h2>
      )}
    </>
  );
};

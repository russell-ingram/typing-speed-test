import React, { useEffect, useState } from "react";

type TimerProps = {
  seconds: number;
  setTimeLapsed: any; // lazily typing for now
  stopTimer: () => void;
}
const Timer = ({ seconds, setTimeLapsed, stopTimer, }: TimerProps) => {
  const [ timeLeft, setTimeLeft ] = useState(seconds);

  useEffect(() => {
    if (!timeLeft) {
      stopTimer();
      return;
    }

    const interval = setInterval(() => {
      setTimeLapsed(seconds - timeLeft + 1);
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <React.Fragment>
      {timeLeft}
    </React.Fragment>
  )
}

export default Timer;
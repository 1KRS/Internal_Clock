import { useRef, useState } from 'react';
import ResultModal from './ResultModal.js';

const TimeChallenge = ({ title, targetTime }) => {
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  const timer = useRef();
  const dialog = useRef();

  const timerActive = remainingTime < targetTime * 1000 && remainingTime > 0;

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    dialog.current.makeModalAppear();
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current.makeModalAppear();
  };

  const resetTimer = () => {
    setRemainingTime(targetTime * 1000);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={remainingTime}
        resetTimer={resetTimer}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleStart}>
            {timerActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerActive ? 'active' : ''}>
          {timerActive ? 'Timer is running' : 'Time inactive'}
        </p>
      </section>
    </>
  );
};
export default TimeChallenge;

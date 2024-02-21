import { useRef, useState } from 'react';
import ResultModal from './ResultModal.js';

const TimeChallenge = ({ title, targetTime }) => {
 
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

  const timer = useRef();
  const dialog = useRef();

  const timerActive = timeRemaining < targetTime * 1000 && timeRemaining > 0

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000)
    dialog.current.makeModalAppear();
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
     setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 100);
     
    }, 100);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current.makeModalAppear();
  };

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result='lost'/>
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

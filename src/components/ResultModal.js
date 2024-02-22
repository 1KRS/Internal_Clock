import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(
  ({ targetTime, remainingTime, resetTimer }, ref) => {
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round(1000 - remainingTime / targetTime) / 10;

    useImperativeHandle(ref, () => {
      return {
        makeModalAppear() {
          dialog.current.showModal();
        },
      };
    });

    return createPortal(
      <dialog ref={dialog} className="result-modal" onClose={resetTimer}>
        {userLost && <h2>You lost!</h2>}
        {!userLost && <h2>Your Score: {score}</h2>}
        <p>
          Your target time was{' '}
          <strong>
            {targetTime} second{targetTime > 1 ? 's' : ''}
          </strong>
        </p>
        <p>
          You stopped the timer with{' '}
          <strong>{formattedRemainingTime} seconds</strong> left.
        </p>
        <form method="dialog">
          <button onClick={resetTimer}>Close</button>
        </form>
      </dialog>,
      document.getElementById('modal')
    );
  }
);
export default ResultModal;

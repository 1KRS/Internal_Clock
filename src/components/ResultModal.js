import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(({ targetTime, remainingTime, resetTimer }, ref) => {

  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  

  useImperativeHandle(ref, () => {
    return{
      makeModalAppear() {
        dialog.current.showModal()
      }
    }
  });

  return (
    <dialog ref={dialog} className="result-modal">
       {userLost && <h2>You lost!</h2>}
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
    </dialog>
  );
});
export default ResultModal;

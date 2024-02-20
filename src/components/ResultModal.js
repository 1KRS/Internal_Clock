const ResultModal = ({ result, targetTime }) => {
  return (
    <dialog className="result-modal" open>
      <h2>You {result}</h2>
      <p>
        Your target time was{' '}
        <strong>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </strong>
      </p>
      <p>
        You stopped the timer with{' '}
        <strong>X second{targetTime > 1 ? 's' : ''}</strong> left.
      </p>
      <form method="dialog"><button>Close</button></form>
    </dialog>
  );
};
export default ResultModal;

import { useRef, useState } from 'react';

export default function Player() {
  const [playerName, setPlayerName] = useState('Unknown Entity');
  const newName = useRef();

  const handleSubmit = (e) => {
    setPlayerName(newName.current.value);
    newName.current.value = null;
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={newName} type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}

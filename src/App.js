import Player from './components/Player.js';
import TimeChallenge from './components/TimeChallenge.js';

function App() {

  
  return (
    <>
      <header>
        <h1>
          The <em>Internal</em> Clock
        </h1>
        <p>Stop the timer once your internal clock estimates that the time is up.</p>
      </header>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy" targetTime={1} />
        <TimeChallenge title="Normal" targetTime={5} />
        <TimeChallenge title="Getting Tough" targetTime={15} />
        <TimeChallenge title="Pros Only" targetTime={25} />
      </div>
    </>
  );
}

export default App;

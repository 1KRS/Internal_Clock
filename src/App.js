import Player from "./components/Player.js";

function App() {
  return (
    <>
      <header>
        <h1>
          The <em>Almost</em> Final Countdown
        </h1>
        <p>Stop the timer once you estimate that time is (almost) up</p>
      </header>
      <Player />
      <div id="challenges"></div>
    </>
  );
}

export default App;

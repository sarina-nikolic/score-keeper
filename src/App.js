import "./App.css";
import Button from "./Button.js";
import Player from "./Player.js";
import PlayerForm from "./PlayerForm.js";

function App() {
  return (
    <div className="App">
      {/* eslint-disable-next-line */}
      <ul className="Player-list" role="list">
        <Player name="Ernie" score={20} />
        <Player name="Bert" score={30} />
        <Player name="Grobi" score={50} />
      </ul>
      <Button text="Reset scores" />
      <Button text="Reset all" />
      <PlayerForm />
    </div>
  );
}

export default App;

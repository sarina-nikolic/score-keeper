import { useState } from "react";
import "./App.css";
import Button from "./Button.js";
import Player from "./Player.js";
import PlayerForm from "./PlayerForm.js";

function App() {
  const [players, setPlayers] = useState([]);

  function createPlayer(player) {
    setPlayers([...players, player]);
  }

  return (
    <div className="App">
      {/* eslint-disable-next-line */}
      <ul className="Player-list" role="list">
        {players.map((player) => (
          <Player key={player.name} name={player.name} score={player.score} />
        ))}
      </ul>
      <Button text="Reset scores" />
      <Button text="Reset all" />
      <PlayerForm onCreatePlayer={createPlayer} />
    </div>
  );
}

export default App;

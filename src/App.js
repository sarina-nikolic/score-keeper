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

  function decreaseScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ]);
  }

  function increaseScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ]);
  }

  function resetAllScores() {
    setPlayers(
      players.map((player) => {
        return { ...player, score: 0 };
      })
    );
  }

  function resetAllPlayers() {
    setPlayers([]);
  }

  return (
    <div className="App">
      {/* eslint-disable-next-line */}
      <ul className="Player-list" role="list">
        {players.map((player, index) => (
          <Player
            key={player.name}
            name={player.name}
            score={player.score}
            onDecreaseScore={() => decreaseScore(index)}
            onIncreaseScore={() => increaseScore(index)}
          />
        ))}
      </ul>
      <Button onClick={resetAllScores}>Reset Scores</Button>
      <Button onClick={resetAllPlayers}>New Game</Button>
      <PlayerForm onCreatePlayer={createPlayer} />
    </div>
  );
}

export default App;

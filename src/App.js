import { useSyncExternalStore } from "react";
import "./App.css";
import Button from "./Button";
import Player from "./Player";
import PlayerForm from "./PlayerForm";
function App() {
  return (
    <div className="App">
      <ul className="Card" role="list">
        <Player key={userElement.id} user={userElement} />
        )}
      </ul>
      <Button text="Reset scores" />
      <Button text="Reset all" />
      <PlayerForm />
    </div>
  );
}

export default App;

import "./App.css";
import Button from "./Button";
import Player from "./Player";
import PlayerForm from "./PlayerForm";
function App() {
  return (
    <div className="">
      <Player name="John Doe" score={20} />

      <Player name="Jane Doe" score={30} />

      <Button text="Reset scores" />
      <Button text="Reset all" />
      <PlayerForm />
    </div>
  );
}

export default App;

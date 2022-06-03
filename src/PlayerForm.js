import { useState } from "react";
import "./PlayerForm.css";

export default function PlayerForm() {
  const [players, setPlayers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { name } = form.elements;
    const newPlayer = { name: name.value, score: 0 };
    setPlayers([...players, newPlayer]);
    form.reset();
    name.focus();
  }

  return (
    <form onSubmit={handleSubmit} className="PlayerForm">
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />
      <button>Create new player</button>
    </form>
  );
}

import styled from "styled-components";

export default function PlayerForm({ onCreatePlayer }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { name } = form.elements;
    const newPlayer = { name: name.value, score: 0 };
    onCreatePlayer(newPlayer);
    form.reset();
    name.focus();
  }

  return (
    <PlayerForm1 onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />
      <button>Create new player</button>
    </PlayerForm1>
  );
}

const PlayerForm1 = styled.playerForm`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  gap: 0.8rem;
`;

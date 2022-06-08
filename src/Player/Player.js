import styled from "styled-components";

export default function Player({
  name,
  score,
  onDecreaseScore,
  onIncreaseScore,
}) {
  return (
    <StyledPlayer>
      <PlayerName>{name}</PlayerName>
      <button onClick={onDecreaseScore}>-</button>
      {score}
      <button onClick={onIncreaseScore}>+</button>
    </StyledPlayer>
  );
}

const StyledPlayer = styled.player`
  list-style: none;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
`;

const PlayerName = styled.playerName`
  margin-right: auto;
`;

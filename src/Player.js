import "./Player.css";
export default function Player({
  name,
  score,
  onDecreaseScore,
  onIncreaseScore,
}) {
  return (
    <li className="Player">
      <span className="Player__name">{name}</span>
      <button>-</button>
      {score}
      <button>+</button>
    </li>
  );
}

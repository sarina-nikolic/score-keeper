import "./Button.css";

export default function Button({ text, resetAllScores }) {
  return (
    <button onClick={resetAllScores} className="Button">
      {text}
    </button>
  );
}

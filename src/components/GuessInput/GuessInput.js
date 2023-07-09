import React from "react";

export default function GuessInput({ handleNewGuess, isGameOver }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleNewGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        type="text"
        name="guess-input"
        id="guess-input"
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={isGameOver}
      ></input>
    </form>
  );
}

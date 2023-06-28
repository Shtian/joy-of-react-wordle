import React from "react";

export default function GuessInput({ handleNewGuess, isGameOver }) {
  // usestate for guess
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleNewGuess(e.target["guess-input"].value);
        e.target["guess-input"].value = "";
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
        disabled={isGameOver}
      ></input>
    </form>
  );
}

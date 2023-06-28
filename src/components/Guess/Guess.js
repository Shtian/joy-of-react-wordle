import React from "react";

export default function Guess({ handleNewGuess, isGameOver }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleNewGuess(e.target["guess-input"].value.toUpperCase());
        e.target["guess-input"].value = "";
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        name="guess-input"
        id="guess-input"
        pattern="[A-Za-zæåøÆØÅ]{5}"
        disabled={isGameOver}
      ></input>
    </form>
  );
}

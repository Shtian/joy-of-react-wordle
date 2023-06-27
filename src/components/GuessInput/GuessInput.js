import React from "react";

export default function GuessInput({ handleNewGuess }) {
  return (
    <form
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
      ></input>
    </form>
  );
}
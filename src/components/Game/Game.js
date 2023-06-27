import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guesses from "../Guesses/Guesses";
import GuessInput from "../GuessInput/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const handleNewGuess = (guess) => {
    if (guesses.length >= 6) return;
    const newGuessList = [guess, ...guesses];
    setGuesses(newGuessList);
  };
  return (
    <>
      <Guesses guesses={guesses}></Guesses>
      <GuessInput handleNewGuess={handleNewGuess}></GuessInput>
    </>
  );
}

export default Game;

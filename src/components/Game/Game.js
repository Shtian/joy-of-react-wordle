import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guesses from "../Guesses/Guesses";
import GuessInput from "../GuessInput/GuessInput";
import { checkGuess } from "../../game-helpers";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleNewGuess = (guess) => {
    const checkedGuess = checkGuess(guess.toUpperCase(), answer);
    const newGuessList = [...guesses, checkedGuess];
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

import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guesses from "../Guesses";
import GuessInput from "../GuessInput";
import Banner from "../Banner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState({ lost: false, won: false });

  const isGameOver = gameState.lost || gameState.won;

  const handleNewGuess = (guess) => {
    const checkedGuess = checkGuess(guess.toUpperCase(), answer);
    const newGuessList = [...guesses, checkedGuess];
    setGuesses(newGuessList);
    const hasWon =
      checkedGuess.filter((g) => g.status !== "correct").length === 0;

    if (hasWon) {
      setGameState({ ...gameState, won: true });
    } else if (newGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState({ ...gameState, lost: true });
    }
  };

  return (
    <>
      <Guesses guesses={guesses}></Guesses>
      <GuessInput
        handleNewGuess={handleNewGuess}
        isGameOver={isGameOver}
      ></GuessInput>
      {isGameOver && (
        <Banner
          isAWin={gameState.won}
          answer={answer}
          numOfGuesses={guesses.length}
        ></Banner>
      )}
    </>
  );
}

export default Game;

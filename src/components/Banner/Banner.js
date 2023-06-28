import React from "react";

function GameWonBanner({ numOfGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numOfGuesses} guesses</strong>.
      </p>
    </div>
  );
}

function GameLostBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function Banner({ isAWin, answer, numOfGuesses }) {
  return isAWin ? (
    <GameWonBanner numOfGuesses={numOfGuesses}></GameWonBanner>
  ) : (
    <GameLostBanner answer={answer}></GameLostBanner>
  );
}

export default Banner;

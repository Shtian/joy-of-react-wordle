import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

export default function Guesses({ guesses }) {
  const createEmptyPadding = (rows) => {
    return range(rows).map(() =>
      range(5).map(() => ({ letter: "", status: "" }))
    );
  };

  const guessListWithEmptyPadding =
    guesses >= NUM_OF_GUESSES_ALLOWED
      ? guesses
      : guesses.concat(
          createEmptyPadding(NUM_OF_GUESSES_ALLOWED - guesses.length)
        );

  return (
    <div className="guess-results">
      {guessListWithEmptyPadding.map((guess, index) => {
        return (
          <p className="guess" key={index}>
            {guess.map(({ letter, status }, i) => (
              <span className={`cell ${status}`} key={i}>
                {letter}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

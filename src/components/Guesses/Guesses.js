/**
 *
 */
export default function Guesses({ guesses }) {
  // TODO EMPTY CELLS
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => {
        return (
          <p className="guess" key={index}>
            {guess.split("").map((c, i) => (
              <span className="cell" key={i}>
                {c}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

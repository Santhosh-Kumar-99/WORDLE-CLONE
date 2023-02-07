import React, { useContext } from 'react';
import { AppContext } from '../App';

function GameOver() {
  const { gameOver, correctWord, currAttempt } = useContext(AppContext);

  return (
    <div className="gameOver">
      <h3>{gameOver.guessedWord ? 'Guessed it Right! ' : 'You failed'}</h3>
      <h1>
        Correct:
        {correctWord}
      </h1>
      {gameOver.gussedWord && (
        <h3>
          You gussed in
          {' '}
          {currAttempt.attempt}
          {' '}
          attempts
        </h3>
      )}
    </div>
  );
}

export default GameOver;

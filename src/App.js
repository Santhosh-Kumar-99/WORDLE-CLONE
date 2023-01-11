import "./App.css";
import Board from "./components/Board";
import KeyBoard from "./components/KeyBoard";
import { createContext, useState } from "react";
import { boardDefault } from "./Word";

export const AppContext = createContext(null);

function App() {
  const [board, setboard] = useState(boardDefault);
  const [currAttempt, setcurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const correctWord = "RIGHT";

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;
    setcurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const currBoard = [...board];
    currBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setboard(currBoard);
    setcurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const currBoard = [...board];
    currBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setboard(currBoard);
    setcurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };

  return (
    <div className="App">
      <nav>
        <h1>WORDLE</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setboard,
          currAttempt,
          setcurrAttempt,
          onEnter,
          onDelete,
          onSelectLetter,
          correctWord,
        }}
      >
        <div className="game">
          <Board></Board>
          <KeyBoard></KeyBoard>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;

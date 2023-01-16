import "./App.css";
import Board from "./components/Board";
import KeyBoard from "./components/KeyBoard";
import { createContext, useState, useEffect } from "react";
import { boardDefault, generateWordSet } from "./Word";

export const AppContext = createContext(null);

function App() {
  const [board, setboard] = useState(boardDefault);
  const [currAttempt, setcurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set()); //useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const correctWord = "WRITE";
  console.log(wordSet);
  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
    });
  }, []);

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;
    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    console.log(currWord);
    if (wordSet.has(currWord.toLowerCase())) {
      setcurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Word Not Found!");
    }
    if (currWord === correctWord) {
      alert("Game Over! You Guessed it right");
    }
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
          disabledLetters,
          setDisabledLetters,
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

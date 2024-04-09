import { useEffect, useState } from "react";
import "./App.css";
import { getGameData, Group, shuffle } from "./data";

function App() {
  const [groups, setGroups] = useState<Group[]>();
  const [words, setWords] = useState<string[]>();
  const [guessedGroups, setGuessedGroups] = useState<Group[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    setGroups(getGameData());
  }, []);

  useEffect(() => {
    if (groups) {
      const allWords = shuffle(groups.map((g) => g.words).flat(1)) as string[];
      setWords(allWords);
    }
  }, [groups]);

  if (!groups || !words) return <>Loading...</>;

  const handleWordClick = (word: string) => {
    const wordIndex = selectedWords.find((w) => w == word);

    if (wordIndex !== undefined) {
      setSelectedWords(selectedWords.filter((w) => w != word));
      return;
    }

    if (selectedWords.length >= 4) return;

    setSelectedWords([...selectedWords, word]);
  };

  const handleSubmit = () => {
    if (selectedWords.length != 4) return;

    const firstSelectedWord = selectedWords[0];
    const group = groups.find((g) => g.words.includes(firstSelectedWord))!;

    // Successful guess
    if (group.words.every((word: string) => selectedWords.includes(word))) {
      setGuessedGroups([...guessedGroups, group]);
      setWords(words.filter((word) => !selectedWords.includes(word)));
    } else {
      setAttempts(attempts + 1);
    }

    setSelectedWords([]);
  };

  const newGame = () => {
    setAttempts(0);
    setGroups(getGameData());
    setGuessedGroups([]);
  };

  const lost = () => attempts >= 5 && guessedGroups.length < 4;

  return (
    <div className="main-container">
      <h1>Categorize</h1>
      {lost() && <>You lost! Better luck next time.</>}
      {!lost() && (
        <>
          <p>Find four groups of four!</p>
          <div className="group-container">
            {guessedGroups?.map((g) => (
              <div key={g.category} className="group" style={{ backgroundColor: g.color }}>
                <p>{g.category}</p>
                <div className="group-element-container">
                  {g.words.sort().map((word: string) => (
                    <p key={word} className="word">
                      {word}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="word-container">
            {words.map((word) => (
              <div key={word} className={selectedWords.find((w) => w == word) ? "word selected" : "word"} onClick={() => handleWordClick(word)}>
                {word}
              </div>
            ))}
          </div>
          {guessedGroups.length == 4 ? (
            <p>You won!</p>
          ) : (
            <>
              <p>Attempts remaining: {5 - attempts}</p>
              <button className="app-button" disabled={selectedWords.length != 4} onClick={handleSubmit}>
                Submit
              </button>
            </>
          )}
        </>
      )}
      <button className="new-game-button" onClick={newGame}>
        New game
      </button>
    </div>
  );
}

export default App;

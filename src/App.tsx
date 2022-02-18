import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from 'styles';
import { WordleProvider } from 'components/WordleProvider';
import { Wordle } from 'context/wordleContext';
import { Board } from 'components/Board';
import { Keyboard } from 'components/Keyboard';

const StyledGame = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App: React.FC = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [currentAttempt, setCurrentAttempt] = useState<string>('');

  const secret = 'apple';
  const wordList = ['apple', 'piano', 'child', 'secret'];

  const handleKeyPress = (key: string): void => {
    if (history.length === 6) {
      return;
    }
    // TODO: isAnimating check
    const letter = key.toLowerCase();
    if (letter === 'enter') {
      if (currentAttempt.length < 5) {
        return;
      }
      if (!wordList.includes(currentAttempt)) {
        alert('Not in my thesaurus');
        return;
      }
      if (history.length === 5 && currentAttempt !== secret) {
        alert(secret);
      }
      setHistory([...history, currentAttempt]);
      setCurrentAttempt('');
    } else if (letter === 'backspace') {
      setCurrentAttempt(currentAttempt.slice(0, currentAttempt.length - 1));
    } else if (/^[a-z]$/.test(letter)) {
      if (currentAttempt.length < 5) {
        setCurrentAttempt(currentAttempt + letter);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey || e.altKey) {
      return;
    }

    handleKeyPress(e.key);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const wordle: Wordle = {
    history: history,
    currentAttempt: currentAttempt,
    secret: secret
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <WordleProvider wordle={wordle}>
        <StyledGame>
          <h1>Wordle</h1>
          <Board />
          <Keyboard onKeyPress={handleKeyPress} />
        </StyledGame>
      </WordleProvider>
    </ThemeProvider>
  );
};

export default App;

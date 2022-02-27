import React, { useEffect, useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getTheme, GlobalStyles, ThemeName } from 'styles';
import { GameState, PlayerStatus } from 'context/gameStateContext';
import { loadGameState, saveGameState } from 'persistence/gameState';
import { GameStateProvider } from 'components/GameStateProvider';
import { Header } from 'components/Header';
import { Board } from 'components/Board';
import { Footer } from 'components/Footer';
import { WinModal } from 'components/WinModal';
import { LossModal } from 'components/LossModal';
import { fetchWordList } from './persistence/wordList';

const GameLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content auto min-content;
  grid-template-columns: auto;
  grid-gap: 3rem;
  align-items: center;
`;

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeName>('darkTheme');
  const [playerStatus, setPlayerStatus] = useState<PlayerStatus>(PlayerStatus.PlayerStillPlaying);
  const [secret, setSecret] = useState<string | undefined>(undefined);
  const [history, setHistory] = useState<string[] | undefined>(undefined);
  const [currentAttempt, setCurrentAttempt] = useState<string>('');
  const loadedRef = useRef<boolean>(false);
  const [needsNewSecret, setNeedsNewSecret] = useState<boolean>(false);

  // first we should try to load the game state from local storage
  useEffect(() => {
    if (loadedRef.current) {
      return;
    }
    loadedRef.current = true;

    const savedGameState = loadGameState();
    const savedSecret = savedGameState.secret;
    const savedHistory = savedGameState.history;

    if (savedSecret) {
      // if the last element in the loaded history matches the secret, the player already won
      if (savedHistory && savedHistory[savedHistory.length - 1] === savedSecret) {
        resetGame();
        return;
      }

      // if the loaded history contains 6 elements and the player didn't win yet, he lost
      if (savedHistory?.length === 6) {
        resetGame();
        return;
      }

      if (savedHistory) {
        setHistory(savedHistory);
        setSecret(savedSecret);
      }
    } else {
      resetGame();
    }
  });

  useEffect(() => {
    if (needsNewSecret) {
      const loadWordList = async () => {
        const wordList = await fetchWordList();
        const index = Math.floor(Math.random() * wordList.length);

        setSecret(wordList[index]);
      };

      void loadWordList();

      setNeedsNewSecret(false);
    }
  }, [needsNewSecret]);

  useEffect(() => {
    saveGameState(secret, history);
  }, [secret, history]);

  const toggleTheme = (): void => {
    switch (theme) {
      case 'lightTheme':
        setTheme('darkTheme');
        break;
      case 'darkTheme':
        setTheme('lightTheme');
        break;
      default:
        throw Error(`Theme "${theme}" is not a valid theme.`);
    }
  };

  const resetGame = (): void => {
    setHistory([]);
    setNeedsNewSecret(true);
    setPlayerStatus(PlayerStatus.PlayerStillPlaying);
  };

  const gameState: GameState = {
    playerStatus: playerStatus,
    currentAttempt: currentAttempt,
    history: history || [],
    secret: secret || '',
    onPlayerStatusChanged: (newPlayerStatus) => setPlayerStatus(newPlayerStatus),
    onCurrentAttemptChanged: (newCurrentAttempt) => setCurrentAttempt(newCurrentAttempt),
    onHistoryChanged: (newHistory) => setHistory(newHistory)
  };

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />
      <GameStateProvider gameState={gameState}>
        <GameLayout>
          <Header themeName={theme} onReload={resetGame} onThemeToggled={toggleTheme} />
          {/*<StyledGame>*/}
          <Board loadedFromHistory={loadedRef.current} />
          {/*</StyledGame>*/}
          <Footer />
        </GameLayout>
        <WinModal onPlayAgain={resetGame} />
        <LossModal onTryAgain={resetGame} />
      </GameStateProvider>
    </ThemeProvider>
  );
};

export default App;

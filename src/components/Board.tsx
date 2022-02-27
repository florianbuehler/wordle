import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { PlayerStatus } from 'context/gameStateContext';
import { useGameState } from 'hooks/useGameState';
import { BgColor, getBgColorName } from 'styles';
import { WordGrid } from './WordGrid';
import { Keyboard } from './Keyboard';
import rawWordList from '../words.txt';

type Props = {
  loadedFromHistory: boolean;
};

const StyledBoard = styled.main`
  display: grid;
  grid-gap: 3rem;
  justify-items: center;
`;

const calculateKeyColors = (history: string[], secret: string): Map<string, BgColor> => {
  const keyColors = new Map<string, BgColor>();

  for (const attempt of history) {
    for (let i = 0; i < attempt.length; i++) {
      const key = attempt[i];
      const keyColor = getKeyColors(attempt, secret, i, keyColors.get(key));
      keyColors.set(key, keyColor);
    }
  }

  return keyColors;
};

const getKeyColors = (attempt: string, secret: string, i: number, currentKeyColor: BgColor | undefined): BgColor => {
  const bgColorBasedOnAttempt = getBgColorName(attempt, secret, i);

  // when calculating the key color we need to take the best guess into account
  // e.g. when the player guessed the position of a given letter correct in an earlier guess,
  // but incorrect in the current guess we still want to color the key green
  switch (currentKeyColor) {
    case 'green':
      return 'green';
    case 'yellow':
      return bgColorBasedOnAttempt === 'green' ? 'green' : 'yellow';
    case 'darkGrey':
    default:
      return bgColorBasedOnAttempt;
  }
};

export const Board: React.FC<Props> = ({ loadedFromHistory }) => {
  const {
    playerStatus,
    currentAttempt,
    history,
    secret,
    onPlayerStatusChanged,
    onCurrentAttemptChanged,
    onHistoryChanged
  } = useGameState();

  const [wordList, setWordList] = useState<Set<string>>(new Set());
  const [keyColors, setKeyColors] = useState<Map<string, BgColor>>(new Map<string, BgColor>());
  const animatingRef = useRef<boolean>(false);
  // const wordList = ['apple', 'piano', 'child', 'secret', 'water', 'avoid'];

  useEffect(() => {
    fetch(rawWordList)
      .then((response) => response.text())
      .then((textString) => {
        const words = textString.split('\n').map((word) => word.trim().toLowerCase());
        setWordList(new Set(words));
      });
  }, []);

  useEffect(() => {
    if (loadedFromHistory) {
      waitForAnimation(history);
    }
  }, [loadedFromHistory]);

  useEffect(() => {
    if (history.length === 0) {
      setKeyColors(calculateKeyColors(history, secret));
    }
  }, [history]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const waitForAnimation = (nextHistory: string[]) => {
    if (animatingRef.current) {
      throw Error('should never happen');
    }

    animatingRef.current = true;
    setTimeout(() => {
      animatingRef.current = false;
      setKeyColors(calculateKeyColors(nextHistory, secret));
    }, 1700);
  };

  const handleKeyPress = (key: string): void => {
    if (
      history.length === 6 ||
      animatingRef.current ||
      playerStatus === PlayerStatus.PlayerWon ||
      playerStatus === PlayerStatus.PlayerLost
    ) {
      return;
    }
    const letter = key.toLowerCase();
    if (letter === 'enter') {
      if (currentAttempt.length < 5) {
        return;
      }
      if (!wordList.has(currentAttempt)) {
        alert('Not in my thesaurus');
        return;
      }

      const newHistory = [...history, currentAttempt];
      waitForAnimation(newHistory);
      onHistoryChanged(newHistory);
      onCurrentAttemptChanged('');

      // player won
      if (currentAttempt === secret) {
        setTimeout(() => {
          onPlayerStatusChanged(PlayerStatus.PlayerWon);
        }, 1800);
      }

      // player lost
      if (history.length === 5 && currentAttempt !== secret) {
        setTimeout(() => {
          onPlayerStatusChanged(PlayerStatus.PlayerLost);
        }, 1800);
      }
    } else if (letter === 'backspace') {
      onCurrentAttemptChanged(currentAttempt.slice(0, currentAttempt.length - 1));
    } else if (/^[a-z]$/.test(letter)) {
      if (currentAttempt.length < 5) {
        onCurrentAttemptChanged(currentAttempt + letter.toLowerCase());
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey || e.altKey) {
      return;
    }

    handleKeyPress(e.key);
  };

  return (
    <StyledBoard>
      <WordGrid />
      <Keyboard keyColors={keyColors} onKeyPress={handleKeyPress} />
    </StyledBoard>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useGameState } from 'hooks/useGameState';
import { Color, getBgColorName } from 'styles';
import { WordGrid } from './WordGrid';
import { Keyboard } from './Keyboard';

type Props = {
  loadedFromHistory: boolean;
};

const StyledBoard = styled.div`
  display: grid;
  grid-gap: 3rem;
  justify-items: center;
`;

const calculateKeyColors = (history: string[], secret: string): Map<string, Color> => {
  const keyColors = new Map<string, Color>();

  for (const attempt of history) {
    for (let i = 0; i < attempt.length; i++) {
      const key = attempt[i];
      const color = getBgColorName(attempt, secret, i);
      keyColors.set(key, color);
    }
  }

  return keyColors;
};

export const Board: React.FC<Props> = ({ loadedFromHistory }) => {
  const { currentAttempt, history, secret, onCurrentAttemptChanged, onHistoryChanged } = useGameState();
  const [keyColors, setKeyColors] = useState<Map<string, Color>>(new Map<string, Color>());
  const animatingRef = useRef<boolean>(false);
  const wordList = ['apple', 'piano', 'child', 'secret', 'water', 'avoid'];

  useEffect(() => {
    if (loadedFromHistory) {
      console.log('here');
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
    if (history.length === 6 || animatingRef.current) {
      return;
    }
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

      const newHistory = [...history, currentAttempt];
      onHistoryChanged(newHistory);
      onCurrentAttemptChanged('');
      waitForAnimation(newHistory);
    } else if (letter === 'backspace') {
      onCurrentAttemptChanged(currentAttempt.slice(0, currentAttempt.length - 1));
    } else if (/^[a-z]$/.test(letter)) {
      if (currentAttempt.length < 5) {
        onCurrentAttemptChanged(currentAttempt + letter);
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
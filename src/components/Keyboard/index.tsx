import React, { useMemo } from 'react';
import { useGameState } from 'hooks/useGameState';
import { getBgColorName } from 'styles/utils';
import { KeyboardRow } from './KeyboardRow';

type Props = {
  onKeyPress: (key: string) => void;
};

export const Keyboard: React.FC<Props> = ({ onKeyPress }) => {
  const { history, secret } = useGameState();
  const keyColors = useMemo(() => {
    const keyColors = new Map<string, string>();

    for (const attempt of history) {
      for (let i = 0; i < attempt.length; i++) {
        const key = attempt[i];
        const color = getBgColorName(attempt, secret, i);
        keyColors.set(key, color);
      }
    }

    return keyColors;
  }, [history, secret]);

  return (
    <>
      <KeyboardRow letters="qwertyuiop" isLast={false} keyColors={keyColors} onKeyPress={onKeyPress} />
      <KeyboardRow letters="asdfghjkl" isLast={false} keyColors={keyColors} onKeyPress={onKeyPress} />
      <KeyboardRow letters="zxcvbnm" isLast={true} keyColors={keyColors} onKeyPress={onKeyPress} />
    </>
  );
};

import React from 'react';
import { KeyboardKey } from './KeyboardKey';

type Props = {
  letters: string;
  isLast: boolean;
  onKeyPress: (key: string) => void;
};

export const KeyboardRow: React.FC<Props> = ({ letters, isLast, onKeyPress }) => {
  const buttons = [];

  if (isLast) {
    buttons.push(
      <KeyboardKey key="enter" keyboardKey="Enter" onKeyPress={onKeyPress}>
        Enter
      </KeyboardKey>
    );
  }

  for (const letter of letters) {
    buttons.push(
      <KeyboardKey key={letter} keyboardKey={letter} onKeyPress={onKeyPress}>
        {letter.toUpperCase()}
      </KeyboardKey>
    );
  }

  if (isLast) {
    buttons.push(
      <KeyboardKey key="backspace" keyboardKey="Backspace" onKeyPress={onKeyPress}>
        Backspace
      </KeyboardKey>
    );
  }

  return <div>{buttons}</div>;
};

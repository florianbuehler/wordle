import React from 'react';
import styled from 'styled-components';
import { MdKeyboardBackspace } from 'react-icons/md';
import { BgColor } from 'styles';
import { KeyboardKey } from './KeyboardKey';

type Props = {
  letters: string;
  isLast: boolean;
  keyColors: Map<string, BgColor>;
  onKeyPress: (key: string) => void;
};

const StyledKeyboardRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const KeyboardRow: React.FC<Props> = ({ letters, isLast, keyColors, onKeyPress }) => {
  const buttons = [];

  if (isLast) {
    buttons.push(
      <KeyboardKey id="keyboard-function-key" key="enter" keyboardKey="Enter" onKeyPress={onKeyPress}>
        Enter
      </KeyboardKey>
    );
  }

  for (const letter of letters) {
    buttons.push(
      <KeyboardKey key={letter} keyboardKey={letter} bgColor={keyColors.get(letter)} onKeyPress={onKeyPress}>
        {letter.toUpperCase()}
      </KeyboardKey>
    );
  }

  if (isLast) {
    buttons.push(
      <KeyboardKey id="keyboard-function-key" key="backspace" keyboardKey="Backspace" onKeyPress={onKeyPress}>
        <MdKeyboardBackspace />
      </KeyboardKey>
    );
  }

  return <StyledKeyboardRow>{buttons}</StyledKeyboardRow>;
};

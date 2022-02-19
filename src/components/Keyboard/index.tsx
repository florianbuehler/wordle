import React from 'react';
import { KeyboardRow } from './KeyboardRow';

type Props = {
  keyColors: Map<string, string>;
  onKeyPress: (key: string) => void;
};

export const Keyboard: React.FC<Props> = ({ keyColors, onKeyPress }) => {
  return (
    <>
      <KeyboardRow letters="qwertyuiop" isLast={false} keyColors={keyColors} onKeyPress={onKeyPress} />
      <KeyboardRow letters="asdfghjkl" isLast={false} keyColors={keyColors} onKeyPress={onKeyPress} />
      <KeyboardRow letters="zxcvbnm" isLast={true} keyColors={keyColors} onKeyPress={onKeyPress} />
    </>
  );
};

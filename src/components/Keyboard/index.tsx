import React from 'react';
import { KeyboardRow } from './KeyboardRow';

type Props = {
  onKeyPress: (key: string) => void;
};

export const Keyboard: React.FC<Props> = ({ onKeyPress }) => {
  return (
    <>
      <KeyboardRow letters="qwertyuiop" isLast={false} onKeyPress={onKeyPress} />
      <KeyboardRow letters="asdfghjkl" isLast={false} onKeyPress={onKeyPress} />
      <KeyboardRow letters="zxcvbnm" isLast={true} onKeyPress={onKeyPress} />
    </>
  );
};

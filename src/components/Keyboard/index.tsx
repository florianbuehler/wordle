import React from 'react';
import styled from 'styled-components';
import { KeyboardRow } from './KeyboardRow';

type Props = {
  keyColors: Map<string, string>;
  onKeyPress: (key: string) => void;
};

const StyledKeyboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Keyboard: React.FC<Props> = ({ keyColors, onKeyPress }) => {
  return (
    <StyledKeyboard>
      <KeyboardRow letters="qwertyuiop" isLast={false} keyColors={keyColors} onKeyPress={onKeyPress} />
      <KeyboardRow letters="asdfghjkl" isLast={false} keyColors={keyColors} onKeyPress={onKeyPress} />
      <KeyboardRow letters="zxcvbnm" isLast={true} keyColors={keyColors} onKeyPress={onKeyPress} />
    </StyledKeyboard>
  );
};

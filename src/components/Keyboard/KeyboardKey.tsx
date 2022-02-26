import React from 'react';
import styled from 'styled-components';
import { BgColor } from 'styles/theme';

type Props = {
  keyboardKey: string;
  bgColor?: BgColor;
  onKeyPress: (key: string) => void;
};

type StyledProps = {
  bgColor: BgColor;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Key = styled.button<StyledProps>`
  margin: 3px;
  padding: 15px;
  border-radius: 5px;
  height: 55px;
  min-width: 47px;
  border: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  border-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  cursor: pointer;
  user-select: none;
`;

export const KeyboardKey: React.FC<Props> = ({ keyboardKey, onKeyPress, bgColor = 'lightGrey', children }) => {
  return (
    <Key bgColor={bgColor} onClick={() => onKeyPress(keyboardKey)}>
      {children}
    </Key>
  );
};

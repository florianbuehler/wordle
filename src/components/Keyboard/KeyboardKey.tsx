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
  padding: 0.5rem;
  border-radius: 5px;
  height: 3.5rem;
  min-width: 1.75rem;
  border: none;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  border-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  cursor: pointer;
  user-select: none;

  @media (min-width: 768px) {
    padding: 0.75rem;
    height: 3.5rem;
    min-width: 3rem;
    font-size: 1rem;
  }
`;

export const KeyboardKey: React.FC<Props> = ({ keyboardKey, onKeyPress, bgColor = 'lightGrey', children }) => {
  return (
    <Key bgColor={bgColor} onClick={() => onKeyPress(keyboardKey)}>
      {children}
    </Key>
  );
};

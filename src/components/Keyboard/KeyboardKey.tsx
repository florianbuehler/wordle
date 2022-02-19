import React from 'react';
import styled from 'styled-components';

type Props = {
  keyboardKey: string;
  bgColor?: string;
  onKeyPress: (key: string) => void;
};

type StyledProps = {
  bgColor: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Key = styled.button<StyledProps>`
  padding: 15px;
  margin: 3px;
  border-radius: 5px;
  height: 55px;
  border: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  border-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  cursor: pointer;
`;

export const KeyboardKey: React.FC<Props> = ({ keyboardKey, onKeyPress, bgColor = 'lightGrey', children }) => {
  return (
    <Key bgColor={bgColor} onClick={() => onKeyPress(keyboardKey)}>
      {children}
    </Key>
  );
};

import React from 'react';
import { ButtonProps } from 'semantic-ui-react';
import styled from 'styled-components';
import { BgColor } from 'styles/theme';

type Props = {
  keyboardKey: string;
  bgColor?: BgColor;
  onKeyPress: (key: string) => void;
} & ButtonProps;

type StyledProps = {
  bgColor: BgColor;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Key = styled.button<StyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 3px;
  padding: 0 0.5rem;
  border-radius: 5px;
  height: 3.5rem;
  min-width: 1.85rem;
  border: none;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  border-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  cursor: pointer;
  user-select: none;

  @media (min-width: 768px) {
    padding: 0 1rem;
    height: 3.5rem;
    min-width: 3.1rem;
    font-size: 1rem;
  }

  &#keyboard-function-key {
    padding: 0 0.75rem;

    @media (min-width: 768px) {
      padding: 0 1.6rem;
    }
  }
`;

export const KeyboardKey: React.FC<Props> = ({
  keyboardKey,
  onKeyPress,
  bgColor = 'lightGrey',
  children,
  ...buttonProps
}) => {
  return (
    <Key {...buttonProps} bgColor={bgColor} onClick={() => onKeyPress(keyboardKey)}>
      {children}
    </Key>
  );
};

import React from 'react';
import styled from 'styled-components';

type Props = {
  keyboardKey: string;
  onKeyPress: (key: string) => void;
};

const Key = styled.button`
  padding: 15px;
  margin: 3px;
  border-radius: 5px;
  height: 55px;
  border: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  cursor: pointer;
`;

export const KeyboardKey: React.FC<Props> = ({ keyboardKey, onKeyPress, children }) => {
  return <Key onClick={() => onKeyPress(keyboardKey)}>{children}</Key>;
};

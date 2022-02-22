import React from 'react';
import styled from 'styled-components';
import { getBgColor } from 'styles';

type Props = {
  index: number;
  attempt: string;
  secret: string;
  isAttemptFinished: boolean;
};

type WrapperProps = {
  animate: boolean;
};

type SurfaceProps = {
  index: number;
  isAttemptFinished: boolean;
};

type FrontProps = {
  hasLetter: boolean;
};

type BackProps = {
  attempt: string;
  secret: string;
  index: number;
};

const Wrapper = styled.div<WrapperProps>`
  font-size: 2.25rem;
  font-weight: bold;
  perspective: 1000px;
  user-select: none;
  animation: ${({ animate }) => animate && `press 100ms ease-out`};

  @keyframes press {
    from {
      opacity: 0.5;
      transform: scale(0.95);
    }
    50% {
      opacity: 0.85;
      transform: scale(1.1);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Surface = styled.div<SurfaceProps>`
  transition-duration: 800ms;
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
  transition-delay: ${({ index }) => `${index * 300}ms`};
  transform: ${({ isAttemptFinished }) => (isAttemptFinished ? 'rotateX(180deg)' : '')};
`;

const Front = styled.div<FrontProps>`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  color: ${({ theme }) => theme.cell.color};
  background-color: ${({ theme }) => theme.cell.bgColor};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ hasLetter, theme }) => (hasLetter ? theme.colors.grey : theme.cell.borderColor)};
`;

const Back = styled.div<BackProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #444;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  transform: rotateX(180deg);
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ attempt, secret, index, theme }) => getBgColor(attempt, secret, index, theme)};
  border-color: ${({ attempt, secret, index, theme }) => getBgColor(attempt, secret, index, theme)};
`;

export const Cell: React.FC<Props> = ({ index, attempt, secret, isAttemptFinished }) => {
  let content;
  const hasLetter = attempt[index] !== undefined;

  if (hasLetter) {
    content = attempt[index].toUpperCase();
  } else {
    content = '';
  }

  return (
    <Wrapper animate={!isAttemptFinished && hasLetter}>
      <Surface index={index} isAttemptFinished={isAttemptFinished}>
        <Front hasLetter={hasLetter}>{content}</Front>
        <Back attempt={attempt} secret={secret} index={index}>
          {content}
        </Back>
      </Surface>
    </Wrapper>
  );
};

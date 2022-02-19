import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles';

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
  correctLetter: string;
  attemptLetter: string;
  secret: string;
};

const getBgColor = (theme: Theme, correctLetter: string, attemptLetter: string, secret: string): string => {
  if (correctLetter === attemptLetter) {
    return theme.colors.green;
  }

  if (secret.indexOf(attemptLetter) >= 0) {
    return theme.colors.yellow;
  }

  return theme.colors.darkGrey;
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
  border: 2px solid #444;
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
  background-color: ${({ theme }) => theme.colors.black};
  border-color: ${({ hasLetter, theme }) => (hasLetter ? theme.colors.grey : '')};
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
  background-color: ${({ theme, correctLetter, attemptLetter, secret }) =>
    getBgColor(theme, correctLetter, attemptLetter, secret)};
  border-color: ${({ theme, correctLetter, attemptLetter, secret }) =>
    getBgColor(theme, correctLetter, attemptLetter, secret)};
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
        <Back correctLetter={secret[index]} attemptLetter={attempt[index]} secret={secret}>
          {content}
        </Back>
      </Surface>
    </Wrapper>
  );
};

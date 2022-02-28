import React, { useState } from 'react';
import styled from 'styled-components';
import { Header, Icon } from 'semantic-ui-react';
import { Modal, ModalContent } from 'components/atoms/Modal';
import { Cell } from 'components/Board/WordGrid/Cell';

const StyledInstructions = styled.aside`
  position: absolute;
  top: 28px;
  left: 20px;

  @media (min-width: 768px) {
    top: 20px;
  }

  > i {
    cursor: pointer;
    color: ${({ theme }) => theme.primary};

    &:hover {
      transform: scale(1.15);
    }
  }
`;

const Content = styled(ModalContent)`
  &&& {
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.bgColor};

    > div {
      display: grid;
      grid-template-rows: 60px;
      grid-template-columns: repeat(5, 60px);
      grid-gap: 8px;
      margin-bottom: 0.5rem;
    }

    > h4 {
      color: ${({ theme }) => theme.fontColor};
    }
  }
`;

export const Instructions: React.FC = () => {
  const [openInstructions, setOpenInstructions] = useState<boolean>(false);

  const showInstructions = () => setOpenInstructions(true);

  const notPartOfWordExample = [];
  const wrongSpotExample = [];
  const correctSpotExample = [];

  for (let i = 0; i < 5; i++) {
    notPartOfWordExample.push(<Cell key={i} index={i} attempt="house" secret="xxxxx" isAttemptFinished={i === 0} />);
    wrongSpotExample.push(<Cell key={i} index={i} attempt="beach" secret="exxxx" isAttemptFinished={i === 1} />);
    correctSpotExample.push(<Cell key={i} index={i} attempt="arong" secret="xxoxx" isAttemptFinished={i === 2} />);
  }

  return (
    <>
      <StyledInstructions>
        <Icon name="info" onClick={showInstructions} />
      </StyledInstructions>
      <Modal
        onClose={() => setOpenInstructions(false)}
        onOpen={() => setOpenInstructions(true)}
        open={openInstructions}
        dimmer={true}
        size="small"
      >
        <Content>
          <h2>How to play</h2>
          <p>
            Guess the <strong>WORDLE</strong> in six tries.
          </p>
          <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
          <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
          <Header as="h4">Examples</Header>
          <div>{notPartOfWordExample}</div>
          <p>
            The letter <strong>H</strong> is not in the word in any spot.
          </p>
          <div>{wrongSpotExample}</div>
          <p>
            The letter <strong>E</strong> is in the word but in the wrong spot.
          </p>
          <div>{correctSpotExample}</div>
          <p>
            The letter <strong>O</strong> is in the word and in the correct spot.
          </p>
        </Content>
      </Modal>
    </>
  );
};

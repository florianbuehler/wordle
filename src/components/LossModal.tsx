import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Modal } from 'semantic-ui-react';
import { PlayerStatus } from 'context/gameStateContext';
import { useGameState } from 'hooks/useGameState';
import { Cell } from './WordGrid/Cell';

type Props = {
  onTryAgain: () => void;
};

const Content = styled(Modal.Content)`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.bgColor};
    padding: 2.5rem;

    h2 {
      color: ${({ theme }) => theme.primary};
      margin-bottom: 2rem;
    }

    #correctWord {
      display: grid;
      grid-template-rows: 60px;
      grid-template-columns: repeat(5, 60px);
      grid-gap: 8px;
      margin-bottom: 3.5rem;
    }

    > div button {
      margin: 0 1rem;
    }
  }
`;

export const LossModal: React.FC<Props> = ({ onTryAgain }) => {
  const { playerStatus, secret } = useGameState();
  const [openLossModal, setOpenLossModal] = useState<boolean>(playerStatus === PlayerStatus.PlayerLost);

  useEffect(() => {
    setOpenLossModal(playerStatus === PlayerStatus.PlayerLost);
  }, [playerStatus]);

  const handleCloseLossModal = () => setOpenLossModal(false);

  const correctWord = [];

  for (let i = 0; i < 5; i++) {
    correctWord.push(<Cell key={i} index={i} attempt={secret} secret={secret} isAttemptFinished={true} />);
  }

  return (
    <Modal
      onClose={() => setOpenLossModal(false)}
      onOpen={() => setOpenLossModal(true)}
      open={openLossModal}
      dimmer={true}
      size="tiny"
    >
      <Content>
        <h2>You Lost</h2>
        <p>The correct word was</p>
        <div id="correctWord">{correctWord}</div>
        <div>
          <Button onClick={handleCloseLossModal}>Close</Button>
          <Button onClick={onTryAgain}>Play Again</Button>
        </div>
      </Content>
    </Modal>
  );
};

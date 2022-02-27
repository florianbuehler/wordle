import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlayerStatus } from 'context/gameStateContext';
import { useGameState } from 'hooks/useGameState';
import { Button } from 'components/atoms/Button';
import { Modal, ModalContent } from 'components/atoms/Modal';
import { Cell } from './Board/WordGrid/Cell';

type Props = {
  onTryAgain: () => void;
};

const Content = styled(ModalContent)`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;

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
          <Button style="primary" inverted onClick={handleCloseLossModal}>
            Close
          </Button>
          <Button style="primary" onClick={onTryAgain}>
            Play Again
          </Button>
        </div>
      </Content>
    </Modal>
  );
};

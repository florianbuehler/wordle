import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlayerStatus } from 'context/gameStateContext';
import { useGameState } from 'hooks/useGameState';
import { Button } from 'components/atoms/Button';
import { Modal, ModalContent } from 'components/atoms/Modal';

type Props = {
  onPlayAgain: () => void;
};

const Content = styled(ModalContent)`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div button {
      margin: 0 1rem;
    }
  }
`;

export const WinModal: React.FC<Props> = ({ onPlayAgain }) => {
  const { playerStatus } = useGameState();
  const [openWinModal, setOpenWinModal] = useState<boolean>(playerStatus === PlayerStatus.PlayerWon);

  useEffect(() => {
    setOpenWinModal(playerStatus === PlayerStatus.PlayerWon);
  }, [playerStatus]);

  const handleCloseWinModal = () => setOpenWinModal(false);

  return (
    <Modal
      onClose={handleCloseWinModal}
      onOpen={() => setOpenWinModal(true)}
      open={openWinModal}
      dimmer={true}
      size="tiny"
    >
      <Content>
        <h2>You Won</h2>
        <div>
          <Button style="primary" inverted onClick={handleCloseWinModal}>
            Close
          </Button>
          <Button style="primary" onClick={onPlayAgain}>
            Play Again
          </Button>
        </div>
      </Content>
    </Modal>
  );
};

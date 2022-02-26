import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Modal } from 'semantic-ui-react';
import { PlayerStatus } from 'context/gameStateContext';
import { useGameState } from 'hooks/useGameState';

type Props = {
  onPlayAgain: () => void;
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
          <Button onClick={handleCloseWinModal}>Close</Button>
          <Button onClick={onPlayAgain}>Play Again</Button>
        </div>
      </Content>
    </Modal>
  );
};

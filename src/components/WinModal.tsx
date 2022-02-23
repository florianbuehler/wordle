import React, { useEffect, useState } from 'react';
import { Modal } from 'semantic-ui-react';
import { PlayerStatus } from 'context/gameStateContext';
import { useGameState } from 'hooks/useGameState';

export const WinModal: React.FC = () => {
  const { playerStatus } = useGameState();
  const [openWinModal, setOpenWinModal] = useState<boolean>(playerStatus === PlayerStatus.PlayerWon);

  useEffect(() => {
    setOpenWinModal(playerStatus === PlayerStatus.PlayerWon);
  }, [playerStatus]);

  return (
    <Modal
      onClose={() => setOpenWinModal(false)}
      onOpen={() => setOpenWinModal(true)}
      open={openWinModal}
      dimmer={true}
      size="mini"
    >
      <Modal.Content>You won!!!</Modal.Content>
    </Modal>
  );
};

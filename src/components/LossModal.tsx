import React, { useEffect, useState } from 'react';
import { Modal } from 'semantic-ui-react';
import { PlayerStatus } from 'context/gameStateContext';
import { useGameState } from 'hooks/useGameState';

export const LossModal: React.FC = () => {
  const { playerStatus } = useGameState();
  const [openLossModal, setOpenLossModal] = useState<boolean>(playerStatus === PlayerStatus.PlayerLost);

  useEffect(() => {
    setOpenLossModal(playerStatus === PlayerStatus.PlayerLost);
  }, [playerStatus]);

  return (
    <Modal
      onClose={() => setOpenLossModal(false)}
      onOpen={() => setOpenLossModal(true)}
      open={openLossModal}
      dimmer={true}
      size="mini"
    >
      <Modal.Content>You lost!!!</Modal.Content>
    </Modal>
  );
};

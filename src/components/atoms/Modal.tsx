import styled from 'styled-components';
import { Modal as BaseModal, ModalContent as BaseModalContent } from 'semantic-ui-react';

export const Modal = styled(BaseModal)`
  &&& {
    border-radius: 12px;
  }
`;

export const ModalContent = styled(BaseModalContent)`
  &&& {
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.bgColor};
    padding: 2.5rem;
    border-radius: 10px !important;

    h2 {
      color: ${({ theme }) => theme.primary};
      margin-bottom: 2rem;
      text-align: center;
    }
  }
`;

import { ToastContainer as BaseToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { lighten } from 'polished';

export const ToastContainer = styled(BaseToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    background-color: ${({ theme }) => lighten(0.05, theme.bgColor)};
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
  .Toastify__close-button--light {
    color: ${({ theme }) => theme.fontColor};
  }
`;

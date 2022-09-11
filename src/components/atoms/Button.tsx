import React from 'react';
import styled from 'styled-components';
import { lighten, readableColor } from 'polished';
import { Button as BaseButton, StrictButtonProps } from 'semantic-ui-react';

type Props = {
  style?: 'primary';
} & StrictButtonProps;

const PrimaryButton = styled(BaseButton)`
  && {
    color: ${({ theme }) => readableColor(theme.primary, theme.colors.black, theme.colors.white, false)};
    background: ${({ theme }) => theme.primary};
    border: ${({ theme }) => `solid 2px ${theme.primary}`};

    &:hover {
      background: ${({ theme }) => lighten(0.2, theme.primary)};
    }
  }
`;

const PrimaryButtonInverted = styled(BaseButton)`
  && {
    color: ${({ theme }) => theme.primary};
    background: transparent;
    border: ${({ theme }) => `solid 2px ${theme.primary}`};

    &:hover {
      color: ${({ theme }) => lighten(0.2, theme.primary)};
      background: transparent;
      border-color: ${({ theme }) => lighten(0.2, theme.primary)};
    }
  }
`;

const getButtonComponent = (style: 'primary' | undefined, inverted: boolean | undefined) => {
  if (inverted) {
    switch (style) {
      case 'primary':
        return PrimaryButtonInverted;
      default:
        return Button;
    }
  }

  switch (style) {
    case 'primary':
      return PrimaryButton;
    default:
      return Button;
  }
};

export const Button: React.FC<Props> = ({ style, inverted, children, ...rest }) => {
  const ButtonComponent = getButtonComponent(style, inverted);

  return <ButtonComponent {...rest}>{children}</ButtonComponent>;
};

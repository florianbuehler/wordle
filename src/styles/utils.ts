import { Theme } from './theme';

export const getBgColor = (attempt: string, secret: string, index: number, theme: Theme): string => {
  if (secret[index] === attempt[index]) {
    return theme.colors.green;
  }

  if (secret.indexOf(attempt[index]) >= 0) {
    return theme.colors.yellow;
  }

  return theme.colors.darkGrey;
};

export const getBgColorName = (attempt: string, secret: string, index: number): string => {
  if (secret[index] === attempt[index]) {
    return 'green';
  }

  if (secret.indexOf(attempt[index]) >= 0) {
    return 'yellow';
  }

  return 'darkGrey';
};

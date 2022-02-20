import { Color, Theme } from './theme';

export const getBgColor = (attempt: string, secret: string, index: number, theme: Theme): string => {
  const bgColor = getBgColorName(attempt, secret, index);

  return theme.colors[bgColor];
};

export const getBgColorName = (attempt: string, secret: string, index: number): Color => {
  if (secret[index] === attempt[index]) {
    return 'green';
  }

  if (secret.indexOf(attempt[index]) >= 0) {
    return 'yellow';
  }

  return 'darkGrey';
};

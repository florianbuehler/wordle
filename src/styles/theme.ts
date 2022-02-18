type Colors = {
  black: string;
  darkGrey: string;
  grey: string;
  lightGrey: string;
  green: string;
  yellow: string;
  white: string;
};

export type Theme = {
  colors: Colors;
};

export const theme: Theme = {
  colors: {
    black: '#111111',
    darkGrey: '#212121',
    grey: '#666666',
    lightGrey: '#888888',
    green: '#538d4e',
    yellow: '#b59f3b',
    white: '#ffffff'
  }
};

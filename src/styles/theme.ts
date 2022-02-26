export type Color = 'white' | 'yellow' | 'green' | 'lightGrey' | 'grey' | 'darkGrey' | 'black';

export type BgColor = Extend<Color, 'yellow' | 'green' | 'lightGrey' | 'darkGrey'>;

type Colors = { [color in Color]: string };

type Extend<T, U extends T> = U;

export type ThemeName = 'lightTheme' | 'darkTheme';

export type Theme = {
  primary: string;

  fontColor: string;
  bgColor: string;

  cell: {
    color: string;
    bgColor: string;
    borderColor: string;
  };

  colors: Colors;
};

const colors: Colors = {
  darkGrey: '#212121',
  grey: '#666',
  lightGrey: '#888',
  green: '#538d4e',
  yellow: '#b59f3b',
  white: '#fff',
  black: '#111'
};

const lightTheme: Theme = {
  primary: '#538d4e',

  fontColor: '#111',
  bgColor: '#f6f7f8',

  cell: {
    color: '#444',
    bgColor: '#f6f7f8',
    borderColor: '#999'
  },

  colors: colors
};

const darkTheme: Theme = {
  primary: '#b59f3b',

  fontColor: '#fff',
  bgColor: '#111',

  cell: {
    color: '#fff',
    bgColor: '#111',
    borderColor: '#444'
  },

  colors: colors
};

export const getTheme = (themeName: ThemeName): Theme => {
  switch (themeName) {
    case 'lightTheme':
      return lightTheme;
    case 'darkTheme':
      return darkTheme;
    default:
      throw Error(`Theme "${themeName}" is not a valid theme.`);
  }
};

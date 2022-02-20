export type Color = 'white' | 'yellow' | 'green' | 'lightGrey' | 'grey' | 'darkGrey';

type Colors = { [color in Color]: string };

export type ThemeName = 'lightTheme' | 'darkTheme';

export type Theme = {
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
  white: '#fff'
};

const lightTheme: Theme = {
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

import { DefaultTheme } from 'react-native-paper';

const colors = {
  primaryGreen: '#4CAF50',
  darkGreen: '#388E3C',
  darkerGreen: '#1b211b',
  lightGreen: '#C8E6C9',
  darkGrey: '#25292E',
  lightGrey: '#BDBDBD',
  white: '#FFFFFF',
};

const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primaryGreen,
    secondary: colors.darkGreen,
    accent: colors.lightGreen,
    background: colors.darkerGreen,
    surface: colors.darkGrey,
    text: colors.white,
    placeholder: colors.lightGrey,
    disabled: colors.lightGrey,
  },
};

const bucketColors = {
  1: '#FF5722',
  2: '#FF9800',
  3: '#FFEB3B',
  4: '#8BC34A',
  5: '#03A9F4',
  6: '#9C27B0',
  7: '#E91E63',
  8: '#673AB7',
  9: '#FF4081',
  10: '#00BCD4',
};

export { colors, paperTheme, bucketColors };

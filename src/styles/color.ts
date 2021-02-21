// TODO: Add more color into here

const Color = {
  //
  primary: '#006AFF',
  secondary: '',
  error: '#e53935',
  warning: '',
  supplement: '#e3edf7',
  //
  black: '#000000',
  red: '#e53935',
  green: '#81c784',
  purple: '#9575cd',
  grey: '#e0e0e0',
  grey_darker: '#bdbdbd',
  white: '#FFFFFF',
  white_variant: '#FAFAFA',
};

const BgColor = {
  white: Color.white,
  ground: Color.supplement,
  basement: Color.white_variant,
  first: Color.white,
  second: Color.white,
  third: Color.white,
};

const TextColor = {
  primary: Color.primary,
  normal: 'rgba(17,17,17, 0.88)',
  light: '#7A7A7A',
  dark: '#303030',
  white: Color.white,
  black: Color.black,
};

const BorderColor = {
  normal: Color.grey_darker,
  light: '',
  dark: '',
};

export {Color, BgColor, TextColor, BorderColor};

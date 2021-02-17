//TODO: Add more color into here

const Color = {
  //
  primary: '#006AFF',
  secondary: '',
  error: '#e53935',
  warning: '',
  supplement: '#afc2cb',
  //
  black: '#000000',
  red: '#e53935',
  green: '#81c784',
  purple: '#9575cd',
  grey: '#e0e0e0',
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
  normal: Color.white,
  light: '',
  dark: '',
  white: Color.white,
  black: Color.black,
};

const BorderColor = {
  normal: '#bdbdbd',
  light: '',
  dark: '',
};

export default {
  Color,
  BgColor,
  TextColor,
  BorderColor,
};

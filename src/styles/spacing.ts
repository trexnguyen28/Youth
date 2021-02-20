import {StyleSheet, Dimensions} from 'react-native';

const BaseSpacing = 8;

const WindowWidth = Dimensions.get('window').width;

const WindowHeight = Dimensions.get('window').height;

const BaseBorderWidth = 2 * StyleSheet.hairlineWidth;

const Padding = {
  base: BaseSpacing,
  small: Math.round(BaseSpacing / 2),
  horizontal: Math.round(1.5 * BaseSpacing),
  vertical: Math.round(1.5 * BaseSpacing),
  large: BaseSpacing * 2,
};

const BorderWidth = {
  base: 2 * StyleSheet.hairlineWidth,
  small: Math.round(BaseBorderWidth / 2),
  large: BaseBorderWidth * 2,
};

export {
  WindowWidth,
  WindowHeight,
  BaseSpacing,
  BaseBorderWidth,
  Padding,
  BorderWidth,
};

import {PixelRatio} from 'react-native';

export function scaleFontSize(size: number) {
  return PixelRatio.getFontScale() * size;
}

const BaseFontSize = 16;

const FontSize = {
  normal: scaleFontSize(BaseFontSize),
  small: scaleFontSize(BaseFontSize - 2),
  large: scaleFontSize(BaseFontSize + 2),
};

const FontWeight = {
  normal: 'normal',
  bold: '600',
};

export default {
  FontSize,
  FontWeight,
};

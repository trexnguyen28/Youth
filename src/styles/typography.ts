import {PixelRatio} from 'react-native';

export function scaleFontSize(size: number) {
  return PixelRatio.getFontScale() * size;
}

const BaseFontSize = 16;

const FontSize = {
  normal: scaleFontSize(BaseFontSize),
  status: scaleFontSize(BaseFontSize - 1),
  small: scaleFontSize(BaseFontSize - 2),
  xsmall: scaleFontSize(BaseFontSize - 4),
  large: scaleFontSize(BaseFontSize + 2),
};

//TODO Find solutions here
const FontWeight = {
  normal: 'normal' as 'normal',
  bold: '600' as '600',
  semibold: '500' as '500',
};

export {FontSize, FontWeight};

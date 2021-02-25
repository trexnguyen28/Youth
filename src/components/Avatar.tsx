import React from 'react';
import {
  Image,
  ImageStyle,
  ImageResizeMode,
  ImageSourcePropType,
} from 'react-native';
import {BorderWidth} from '../styles/spacing';
import {BorderColor} from '../styles/color';

interface Props {
  size?: number;
  imgStyle?: ImageStyle;
  source?: ImageSourcePropType;
  resizeMode?: ImageResizeMode;
}

const defaultAvaSource = require('../assets/images/avatar.jpg');

const defaultAvaSize = 60;

function getAvatarStyle(
  size: number = defaultAvaSize,
  rest: ImageStyle = {},
): ImageStyle {
  return {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: BorderWidth.small,
    borderColor: BorderColor.normal,
    ...rest,
  };
}

const Avatar = (props: Props) => {
  const {
    source = defaultAvaSource,
    resizeMode = 'cover',
    imgStyle,
    size,
    ...rest
  } = props;

  const imageStyle = getAvatarStyle(size, imgStyle);

  return <Image {...rest} source={source} style={imageStyle} />;
};

export default Avatar;

import React from 'react';
import {Image, StyleSheet, ImageProps, ImageSourcePropType} from 'react-native';
import {Padding} from '../styles/spacing';

interface Props extends Omit<ImageProps, 'source'> {
  source?: ImageSourcePropType;
}

const LogoSource = require('../assets/images/logo.png');

const LogoWidth = 152;

const LogoHeight = 36;

const styles = StyleSheet.create({
  logo: {
    width: LogoWidth,
    height: LogoHeight,
    marginHorizontal: Padding.small,
  },
});

const Logo = (props: Props) => {
  const {style = {}, source = LogoSource, ...restProps} = props;

  const logoStyle = StyleSheet.flatten([styles.logo, style]);

  return <Image {...restProps} source={source} style={logoStyle} />;
};

export default Logo;

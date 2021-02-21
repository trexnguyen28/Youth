import React from 'react';
import {View, ViewProps, StyleSheet} from 'react-native';
import {BorderWidth} from '../styles/spacing';
import {BgColor, BorderColor} from '../styles/color';

interface Props extends ViewProps {
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: BgColor.white,
    borderTopWidth: BorderWidth.small,
    borderBottomWidth: BorderWidth.small,
    borderTopColor: BorderColor.normal,
    borderBottomColor: BorderColor.normal,
  },
});

const Card = (props: Props) => {
  const {style, children, ...restProps} = props;
  const containerStyle = StyleSheet.flatten([styles.container, style]);

  return (
    <View {...restProps} style={containerStyle}>
      {children}
    </View>
  );
};

export default Card;

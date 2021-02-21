import React from 'react';
import {Pressable, PressableProps, TextStyle, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IconProps} from 'react-native-vector-icons/Icon';

interface ButtonProps extends PressableProps {
  icon?: string;
  title?: string;
  iconStyle?: TextStyle;
  titleStyle?: TextStyle;
  IconSource?: React.ComponentType<IconProps>;
}

const Button = (props: ButtonProps) => {
  const {
    icon = '',
    title = '',
    iconStyle = {},
    titleStyle = {},
    children = null,
    IconSource = Ionicons,
    ...rest
  } = props;

  return (
    <Pressable {...rest}>
      {icon ? <IconSource name={icon} style={iconStyle} /> : null}
      {title ? <Text style={titleStyle}>{title}</Text> : null}
      {children}
    </Pressable>
  );
};

export default Button;

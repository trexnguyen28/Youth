import React from 'react';
import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  StoryWidth,
  StoryAspectRatio,
  StoryAvatarSize,
  HeaderButtonSize,
  HeaderIconSize,
} from '../constants';
import {Padding, BorderWidth} from '../../../styles/spacing';
import {BgColor, Color, BorderColor, TextColor} from '../../../styles/color';
import {FontSize} from '../../../styles/typography';
import Button from '../../../components/Button';
import Animated from 'react-native-reanimated';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Props {
  containerStyle: ViewStyle;
  imageStyle: ImageStyle;
  titleStyle: TextStyle;
  iconStyle: TextStyle;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: BgColor.white,
    borderColor: BorderColor.normal,
    borderWidth: BorderWidth.small,
  },
  content: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: Padding.base,
  },
  title: {
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: Padding.small,
  },
  button: {
    position: 'absolute',
    width: HeaderButtonSize,
    height: HeaderButtonSize,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3 * BorderWidth.large,
    borderColor: Color.white,
    borderRadius: HeaderButtonSize / 2,
    backgroundColor: Color.primary,
  },
  icon: {
    color: TextColor.white,
    fontSize: 1.25 * HeaderIconSize,
    textAlign: 'center',
  },
});

const AvatarSource = require('../../../assets/images/avatar.jpg');

//TODO Check pointerEvents when already anchor
const StoryCreationItem = (props: Props) => {
  const {containerStyle, titleStyle, iconStyle, imageStyle} = props;

  return (
    <Animated.View
      style={[styles.container, containerStyle]}
      pointerEvents={'none'}>
      <Animated.Image style={imageStyle} source={AvatarSource} />
      <Animated.View style={styles.content}>
        <Animated.Text
          style={[styles.title, titleStyle]}
          numberOfLines={2}
          ellipsizeMode={'tail'}>
          {`Create Story`}
        </Animated.Text>
      </Animated.View>
      <Animated.View style={[styles.button, iconStyle]}>
        <MaterialIcons name={'add'} style={styles.icon} />
      </Animated.View>
    </Animated.View>
  );
};

export default StoryCreationItem;

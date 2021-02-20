import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StoryWidth, StoryAspectRatio, StoryAvatarSize} from '../constants';
import {Padding, BorderWidth} from '../../../styles/spacing';
import {BgColor, Color, BorderColor} from '../../../styles/color';
import {FontSize} from '../../../styles/typography';
import Button from '../../../components/Button';

interface Props {}

const styles = StyleSheet.create({
  container: {
    width: StoryWidth,
    aspectRatio: StoryAspectRatio,
    borderRadius: 16,
    margin: Padding.small,
    backgroundColor: Color.grey_darker,
  },
  image: {
    flex: 2,
    width: StoryWidth - BorderWidth.small,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderColor: Color.grey_darker,
    borderWidth: BorderWidth.small,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 16,
  },
  content: {
    flex: 1,
    backgroundColor: BgColor.basement,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: Padding.base,
    borderColor: BorderColor.normal,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    fontSize: FontSize.normal,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fafafa',
    position: 'absolute',
    borderRadius: 22,
    left: (StoryWidth - StoryAvatarSize) / 2,
    top: ((StoryWidth / StoryAspectRatio - StoryAvatarSize) * 2) / 3,
  },
  icon: {
    fontSize: 44,
    color: Color.primary,
  },
});

const AvatarSource = require('../../../assets/images/avatar.jpg');

const StoryCreationItem = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <Image style={styles.image} source={AvatarSource} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode={'tail'}>
          {`Create\n\rStory`}
        </Text>
      </View>
      <Button
        icon={'add-circle'}
        iconStyle={styles.icon}
        IconSource={MaterialIcons}
        style={styles.button}
      />
    </View>
  );
};

export default StoryCreationItem;

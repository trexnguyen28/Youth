import React from 'react';
import {View, Text, ViewProps, StyleSheet, ImageBackground} from 'react-native';
import Avatar from '../../../components/Avatar';
import {Padding, BorderWidth} from '../../../styles/spacing';
import {BgColor, Color, BorderColor} from '../../../styles/color';
import {FontSize, FontWeight} from '../../../styles/typography';
import {StoryWidth, StoryAspectRatio, StoryAvatarSize} from '../constants';
import {StoryDataType} from '../types';

interface Props extends ViewProps, StoryDataType {}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    width: StoryWidth,
    margin: Padding.small,
    padding: Padding.base,
    backgroundColor: Color.grey,
    aspectRatio: StoryAspectRatio,
    justifyContent: 'space-between',
  },
  image: {
    borderRadius: 16,
    width: StoryWidth,
    resizeMode: 'cover',
    borderWidth: BorderWidth.base,
    aspectRatio: StoryAspectRatio,
    borderColor: BorderColor.normal,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 16,
  },
  avatar: {
    borderWidth: 6 * BorderWidth.base,
    borderColor: Color.primary,
  },
  title: {
    fontSize: FontSize.large,
    fontWeight: FontWeight.bold,
    color: BgColor.white,
  },
});

const Story = (props: Props) => {
  const {imgUri, avtUri, title} = props;

  return (
    <ImageBackground
      source={{uri: imgUri}}
      imageStyle={styles.image}
      style={styles.container}>
      <View style={styles.overlay} />
      {avtUri ? (
        <Avatar
          size={StoryAvatarSize}
          source={{uri: avtUri}}
          imgStyle={styles.avatar}
        />
      ) : null}
      {title ? (
        <Text style={styles.title} numberOfLines={1} ellipsizeMode={'tail'}>
          {title}
        </Text>
      ) : null}
    </ImageBackground>
  );
};

export default Story;

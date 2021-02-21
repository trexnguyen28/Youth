import React from 'react';
import {View, StyleSheet, ViewProps, Image, Text} from 'react-native';
import {WindowWidth, BorderWidth, Padding} from '../../../styles/spacing';
import {FeedPhotoAspeectRatio} from '../constants';
import {BorderColor, TextColor} from '../../../styles/color';

interface Props extends ViewProps {
  photos?: Array<string>;
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: Padding.base,
  },
  photo1: {
    width: WindowWidth,
    aspectRatio: FeedPhotoAspeectRatio,
    borderTopWidth: BorderWidth.small,
    borderBottomWidth: BorderWidth.small,
    borderColor: BorderColor.normal,
  },
  row: {
    flexDirection: 'row',
    paddingBottom: Padding.small / 2,
  },
  photoSquare: {
    width: (WindowWidth - Padding.small / 2) / 2,
    aspectRatio: 1,
  },
  padding: {
    width: Padding.small / 2,
  },
  photoCountContainer: {
    position: 'absolute',
    bottom: Padding.small / 2,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    width: (WindowWidth - Padding.small / 2) / 2,
    aspectRatio: 1,
  },
  remaining: {
    fontSize: 24,
    color: TextColor.white,
    paddingHorizontal: Padding.base,
  },
});

const Feed1Photo = (props: Props) => {
  const {photos = []} = props;

  return <Image source={{uri: photos[0]}} style={styles.photo1} />;
};

const FeedOtherPhotos = (props: Props) => {
  const {photos = []} = props;

  return (
    <View>
      <View style={styles.row}>
        <Image source={{uri: photos[0]}} style={styles.photoSquare} />
        <View style={styles.padding} />
        <Image source={{uri: photos[1]}} style={styles.photoSquare} />
      </View>
      {photos.length > 3 ? (
        <View style={styles.row}>
          <Image source={{uri: photos[2]}} style={styles.photoSquare} />
          <View style={styles.padding} />
          <Image source={{uri: photos[3]}} style={styles.photoSquare} />
        </View>
      ) : photos.length === 3 ? (
        <Image source={{uri: photos[2]}} style={styles.photo1} />
      ) : null}
      {photos.length > 4 ? (
        <View style={styles.photoCountContainer}>
          <Text style={styles.remaining}>{`+${photos.length - 4}`}</Text>
        </View>
      ) : null}
    </View>
  );
};

const FeedPhotos = (props: Props) => {
  const {photos} = props;

  if (!photos || !Array.isArray(photos) || !photos.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      {photos.length === 1 ? (
        <Feed1Photo photos={photos} />
      ) : (
        <FeedOtherPhotos photos={photos} />
      )}
    </View>
  );
};

export default FeedPhotos;

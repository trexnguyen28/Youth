import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

MaterialIcons.loadFont();

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

const STORY_ITEMS_PER_LINE = 3.75;
const STORY_ITEM_WIDTH = Math.round(
  Math.min(DEVICE_HEIGHT, DEVICE_WIDTH) / STORY_ITEMS_PER_LINE,
);
const STORY_ITEM_ASPECT_RATIO = 9 / 16;
const STORY_AVATAR_WIDTH = Math.round((STORY_ITEM_WIDTH - 2 * 12) / 2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: '#afc2cb',
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  logo: {
    width: 152,
    height: 36,
    marginHorizontal: 4,
  },
  headerLeftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  button: {
    marginHorizontal: 4,
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0',
  },
  icon: {
    lineHeight: 46,
    fontSize: 26,
    color: 'black',
  },
  postStatusBlock: {
    paddingVertical: 8,
    backgroundColor: 'white',
  },
  postStatusContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderBottomColor: '#bdbdbd',
  },
  postStatusTitle: {
    fontSize: 18,
    padding: 0,
    marginHorizontal: 8,
    color: '#000000',
    opacity: 0.87,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 32,
    marginHorizontal: 4,
  },
  postStatusFooter: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  actionBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBorderBox: {
    borderEndWidth: StyleSheet.hairlineWidth * 2,
    borderEndColor: '#bdbdbd',
  },
  actionIcon: {
    paddingHorizontal: 2,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    padding: 4,
  },
  storyBlock: {
    backgroundColor: 'white',
    marginVertical: 8,
  },
  storyBlockContent: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
  },
  storyItem: {
    width: STORY_ITEM_WIDTH,
    aspectRatio: STORY_ITEM_ASPECT_RATIO,
    borderRadius: 16,
    margin: 4,
    backgroundColor: '#bdbdbd',
    padding: 8,
    justifyContent: 'space-between',
  },
  storyCreateItem: {
    width: STORY_ITEM_WIDTH,
    aspectRatio: STORY_ITEM_ASPECT_RATIO,
    borderRadius: 16,
    margin: 4,
    backgroundColor: '#bdbdbd',
  },
  storyImgBg: {
    width: STORY_ITEM_WIDTH,
    aspectRatio: STORY_ITEM_ASPECT_RATIO,
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#bdbdbd',
    resizeMode: 'cover',
  },
  storyOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 16,
  },
  storyAvatar: {
    width: STORY_AVATAR_WIDTH,
    height: STORY_AVATAR_WIDTH,
    borderRadius: STORY_AVATAR_WIDTH / 2,
    borderWidth: 12 * StyleSheet.hairlineWidth,
    borderColor: '#006AFF',
  },
  storyCreateTopAvatar: {
    flex: 2,
    width: STORY_ITEM_WIDTH - StyleSheet.hairlineWidth,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderColor: '#bdbdbd',
    borderWidth: StyleSheet.hairlineWidth,
  },
  storyCreateContent: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 8,
    borderColor: '#bdbdbd',
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  storyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  storyCreateTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  storyCreateButton: {
    backgroundColor: '#fafafa',
    position: 'absolute',
    borderRadius: 22,
    left: (STORY_ITEM_WIDTH - 46) / 2,
    top: ((STORY_ITEM_WIDTH / STORY_ITEM_ASPECT_RATIO - 46) * 2) / 3,
  },
  storyAddIcon: {
    fontSize: 44,
    color: '#006AFF',
  },
});

export const HomeFeed = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode={'cover'}
          />
          <View style={styles.headerLeftContent}>
            <View style={styles.button}>
              <Ionicons name={'search'} style={styles.icon} />
            </View>
            <View style={styles.button}>
              <Ionicons name={'chatbubbles'} style={styles.icon} />
            </View>
          </View>
        </View>
        <View style={styles.postStatusBlock}>
          <View style={styles.postStatusContent}>
            <Image
              source={require('../assets/images/avatar.jpg')}
              style={styles.avatar}
              resizeMode={'cover'}
            />
            <Text style={styles.postStatusTitle}>{"What's on your mind?"}</Text>
          </View>
          <View style={styles.postStatusFooter}>
            <View style={[styles.actionBox, styles.actionBorderBox]}>
              <Ionicons
                name={'videocam'}
                size={24}
                style={styles.actionIcon}
                color={'#e53935'}
              />
              <Text style={styles.actionTitle}>{'Live'}</Text>
            </View>
            <View style={[styles.actionBox, styles.actionBorderBox]}>
              <Ionicons
                name={'images'}
                size={24}
                style={styles.actionIcon}
                color={'#81c784'}
              />
              <Text style={styles.actionTitle}>{'Photo'}</Text>
            </View>
            <View style={styles.actionBox}>
              <Ionicons
                name={'camera'}
                size={24}
                style={styles.actionIcon}
                color={'#9575cd'}
              />
              <Text style={styles.actionTitle}>{'Room'}</Text>
            </View>
          </View>
        </View>
        <View style={styles.storyBlock}>
          <View style={styles.storyBlockContent}>
            {/* Create item */}
            <View style={styles.storyCreateItem}>
              <View style={styles.storyOverlay} />
              <Image
                style={styles.storyCreateTopAvatar}
                source={require('../assets/images/avatar.jpg')}
              />
              <View style={styles.storyCreateContent}>
                <Text
                  style={styles.storyCreateTitle}
                  numberOfLines={2}
                  ellipsizeMode={'tail'}>{`Create\n\rStory`}</Text>
              </View>
              <View style={styles.storyCreateButton}>
                <MaterialIcons
                  name={'add-circle'}
                  style={styles.storyAddIcon}
                  // size={46}
                />
              </View>
            </View>
            {/* Item */}
            {[0, 1, 2, 3].map((_, index) => (
              <ImageBackground
                key={`story-${index}`}
                source={{
                  uri: `https://picsum.photos/seed/story-${index}/576/1024`,
                }}
                imageStyle={styles.storyImgBg}
                style={styles.storyItem}>
                <View style={styles.storyOverlay} />
                <Image
                  style={styles.storyAvatar}
                  source={{
                    uri: `https://i.pravatar.cc/360?u=${index}@youth.com`,
                  }}
                />
                <Text
                  style={styles.storyTitle}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}>{`User ${index}`}</Text>
              </ImageBackground>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

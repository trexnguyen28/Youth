import React from 'react';
import {View, StyleSheet, SafeAreaView, Image, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      </View>
    </SafeAreaView>
  );
};

import React from 'react';
import {View, StyleSheet, SafeAreaView, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
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
});

export const HomeFeed = () => {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

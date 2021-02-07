import React, {ReactNode} from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
});

export const HomeFeed = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'This is main feature screen'}</Text>
    </View>
  );
};

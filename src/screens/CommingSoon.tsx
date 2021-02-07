import React, {ReactNode} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
  },
});

export const CommingSoon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'This feature will be comming soon'}</Text>
    </View>
  );
};

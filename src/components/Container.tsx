import React from 'react';
import {ViewProps, SafeAreaView, StyleSheet} from 'react-native';
import {BgColor} from '../styles/color';

interface Props extends ViewProps {
  children?: React.ReactNode;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BgColor.white,
  },
});

const Container = (props: Props) => {
  const {children, style, ...rest} = props;
  const containerStyle = StyleSheet.flatten([styles.container, style]);

  return (
    <SafeAreaView {...rest} style={containerStyle}>
      {children}
    </SafeAreaView>
  );
};

export default Container;

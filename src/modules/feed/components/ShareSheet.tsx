import React, {useEffect} from 'react';
import {
  View,
  Text,
  ViewProps,
  StyleSheet,
  LayoutAnimation,
  Keyboard,
} from 'react-native';
import {FeedDataType, ShareOptionsType} from '../types';
import {useKeyboard} from '@react-native-community/hooks';
import {Padding, BorderWidth} from '../../../styles/spacing';
import Avatar from '../../../components/Avatar';
import {FontSize, FontWeight} from '../../../styles/typography';
import {TextColor, BorderColor, Color} from '../../../styles/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../../components/Button';

const ShareOptionData = require('../../../mock/share.json');

interface Props extends ViewProps, FeedDataType {}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: Padding.horizontal,
    paddingBottom: Padding.vertical,
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 28,
    color: TextColor.light,
    paddingRight: Padding.base,
  },
  headerContent: {
    flexDirection: 'row',
  },
  headerBuffer: {
    flex: 1,
  },
  headerBody: {
    paddingHorizontal: Padding.base,
    justifyContent: 'space-around',
  },
  title: {
    color: TextColor.normal,
    fontSize: FontSize.normal,
    fontWeight: FontWeight.bold,
  },
  fullscreen: {
    color: TextColor.normal,
    fontSize: 32,
  },
  inputContent: {
    paddingHorizontal: Padding.horizontal,
    paddingBottom: Padding.vertical,
  },
  input: {
    paddingTop: 0,
    paddingBottom: 0,
    color: TextColor.normal,
    fontSize: FontSize.normal,
  },
  shareContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: Padding.horizontal,
    paddingBottom: Padding.vertical,
  },
  shareContent: {
    minWidth: 120,
    minHeight: 40,
    backgroundColor: Color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  share: {
    color: TextColor.white,
    fontSize: FontSize.normal,
    fontWeight: FontWeight.bold,
  },
});

const newFeedBadgeStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: BorderWidth.large,
    borderColor: BorderColor.normal,
    borderRadius: 4,
    paddingHorizontal: Padding.small,
    paddingVertical: Padding.small / 2,
  },
  title: {
    color: TextColor.light,
    fontSize: FontSize.small,
    fontWeight: FontWeight.semibold,
  },
  icon: {
    color: TextColor.light,
    fontSize: FontSize.small,
    fontWeight: FontWeight.semibold,
  },
});

const shareOptionsStyles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: Padding.base * 2,
    paddingHorizontal: Padding.base * 2,
    borderTopWidth: BorderWidth.base,
    borderTopColor: BorderColor.normal,
    justifyContent: 'space-around',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: TextColor.normal,
    fontSize: FontSize.normal,
    fontWeight: FontWeight.normal,
  },
  icon: {
    fontSize: 32,
    color: TextColor.normal,
    paddingEnd: Padding.base,
  },
});

const onKeyboardDismiss = () => Keyboard.dismiss();

const ShareSheet = (props: Props) => {
  const {keyboardShown = false} = useKeyboard();

  useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  }, [keyboardShown]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {keyboardShown ? (
          <Ionicons
            style={styles.backIcon}
            name={'chevron-back'}
            onPress={onKeyboardDismiss}
          />
        ) : null}
        <View style={styles.headerContent}>
          <Avatar />
          <View style={styles.headerBody}>
            <Text style={styles.title} numberOfLines={1}>
              {'Saitama'}
            </Text>
            <View style={newFeedBadgeStyles.container}>
              <Text style={newFeedBadgeStyles.title}>{'New Feed '}</Text>
              <Ionicons style={newFeedBadgeStyles.icon} name={'caret-down'} />
            </View>
          </View>
        </View>
        <View style={styles.headerBuffer} />
        <MaterialIcons name={'fullscreen'} style={styles.fullscreen} />
      </View>
      <View style={styles.inputContent}>
        <TextInput
          placeholder={'Say something about this...'}
          placeholderTextColor={TextColor.light}
          style={styles.input}
          onChangeText={() => {}}
        />
      </View>
      <View style={styles.shareContainer}>
        <Button
          title={'Share Now'}
          titleStyle={styles.share}
          style={styles.shareContent}
        />
      </View>
      <View style={shareOptionsStyles.container}>
        {ShareOptionData.map((options: ShareOptionsType, index: number) => (
          <Button
            icon={options.icon}
            title={options.title}
            style={shareOptionsStyles.button}
            titleStyle={shareOptionsStyles.title}
            iconStyle={shareOptionsStyles.icon}
          />
        ))}
      </View>
    </View>
  );
};

export default ShareSheet;

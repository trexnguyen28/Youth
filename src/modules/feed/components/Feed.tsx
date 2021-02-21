import React from 'react';
import {View, Text, ViewProps, StyleSheet} from 'react-native';

import {FeedDataType} from '../types';
import {Padding, BorderWidth} from '../../../styles/spacing';
import {BgColor, TextColor, BorderColor} from '../../../styles/color';
import {FontSize, FontWeight} from '../../../styles/typography';
import Avatar from '../../../components/Avatar';
import {ActionIconSize, FeedAvatarSize, FeedMenuIconSize} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import moment from 'moment';
import Button from '../../../components/Button';

interface Props extends ViewProps, FeedDataType {}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: Padding.base,
    justifyContent: 'flex-start',
    backgroundColor: BgColor.white,
    borderTopWidth: BorderWidth.base,
    borderTopColor: BorderColor.normal,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: Padding.horizontal,
    paddingVertical: Padding.base,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: Padding.base,
  },
  title: {
    fontSize: FontSize.normal,
    fontWeight: FontWeight.bold,
    color: TextColor.normal,
    paddingBottom: Padding.small,
  },
  subTitle: {
    fontSize: FontSize.xsmall,
    color: TextColor.light,
    alignItems: 'baseline',
  },
  subTitleIcon: {
    fontSize: FontSize.small,
    color: TextColor.light,
  },
  menu: {
    fontSize: FeedMenuIconSize,
    color: TextColor.light,
    paddingVertical: Padding.small,
  },
  status: {
    fontSize: FontSize.status,
    color: TextColor.normal,
    paddingTop: 0,
    paddingBottom: Padding.base,
    paddingHorizontal: Padding.horizontal,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: Padding.horizontal,
    paddingVertical: Padding.base,
    borderTopWidth: BorderWidth.base,
    borderTopColor: BorderColor.normal,
  },
  actionBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Padding.small / 2,
  },
  actionIcon: {
    paddingHorizontal: Padding.small / 2,
    fontSize: ActionIconSize,
    color: TextColor.light,
  },
  actionTitle: {
    color: TextColor.light,
    fontSize: FontSize.small,
    paddingHorizontal: Padding.small / 2,
  },
});

const Feed = (props: Props) => {
  const {userName, avtUri, creationDate, status} = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar source={{uri: avtUri}} size={FeedAvatarSize} />
        <View style={styles.headerContent}>
          <Text style={styles.title} numberOfLines={1}>
            {userName}
          </Text>
          <Text style={styles.subTitle} numberOfLines={1}>
            {moment(creationDate).fromNow()}
            {' \u00B7 '}
            <Ionicons name={'earth'} style={styles.subTitleIcon} />
          </Text>
        </View>
        <Ionicons name={'ellipsis-horizontal'} style={styles.menu} />
      </View>
      {status ? (
        <Text style={styles.status} numberOfLines={5}>
          {status}
        </Text>
      ) : null}
      <View style={styles.footer}>
        <Button
          title={'Like'}
          icon={'thumb-up-off-alt'}
          IconSource={MaterialIcons}
          iconStyle={styles.actionIcon}
          titleStyle={styles.actionTitle}
          style={styles.actionBox}
        />
        <Button
          title={'Comment'}
          icon={'chatbox-outline'}
          iconStyle={styles.actionIcon}
          titleStyle={styles.actionTitle}
          style={styles.actionBox}
        />
        <Button
          title={'Share'}
          icon={'arrow-redo-outline'}
          iconStyle={styles.actionIcon}
          titleStyle={styles.actionTitle}
          style={styles.actionBox}
        />
      </View>
    </View>
  );
};

export default Feed;

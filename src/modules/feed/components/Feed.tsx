import React, {useRef, useCallback, useState} from 'react';
import {View, Text, ViewProps, StyleSheet, LayoutAnimation} from 'react-native';

import {FeedDataType, FeedPrivacy} from '../types';
import {Padding, BorderWidth} from '../../../styles/spacing';
import {TextColor, BorderColor} from '../../../styles/color';
import {FontSize, FontWeight} from '../../../styles/typography';
import Avatar from '../../../components/Avatar';
import {ActionIconSize, FeedAvatarSize, FeedMenuIconSize} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import moment from 'moment';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import PrivacyIcon from './PrivacyIcon';
import FeedPhotos from './FeedPhotos';
import {BottomSheetModal, BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import ShareSheet from './ShareSheet';
import {useNavigation} from '@react-navigation/native';

interface Props extends ViewProps, FeedDataType {}

const styles = StyleSheet.create({
  container: {
    marginBottom: Padding.base,
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
  bottomSheetContent: {
    flex: 1,
    alignItems: 'center',
    height: 500,
  },
});

const ShareBottomSheetSnapPoints = ['50%', '80%'];

const Feed = (props: Props) => {
  const {
    userName,
    avtUri,
    creationDate,
    status,
    photos,
    privacy = FeedPrivacy.public,
  } = props;

  const navigation = useNavigation();
  const [showMore, setShowMore] = useState(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleSheetChanges = useCallback((index: number) => {
    LayoutAnimation.easeInEaseOut();
    if (index === 1) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  }, []);

  const handleSharePress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    navigation.setOptions({tabBarVisible: false});
  }, []);

  const handleShareDismiss = useCallback(() => {
    navigation.setOptions({tabBarVisible: true});
  }, [navigation]);

  return (
    <>
      <Card style={styles.container}>
        <View style={styles.header}>
          <Avatar source={{uri: avtUri}} size={FeedAvatarSize} />
          <View style={styles.headerContent}>
            <Text style={styles.title} numberOfLines={1}>
              {userName}
            </Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              {moment(creationDate).fromNow()}
              {' \u00B7 '}
              <PrivacyIcon privacy={privacy} />
            </Text>
          </View>
          <Ionicons name={'ellipsis-horizontal'} style={styles.menu} />
        </View>
        {status ? (
          <Text style={styles.status} numberOfLines={5}>
            {status}
          </Text>
        ) : null}
        <FeedPhotos photos={photos} />
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
            onPress={handleSharePress}
          />
        </View>
      </Card>
      <BottomSheetModal
        dismissOnPanDown
        ref={bottomSheetModalRef}
        onDismiss={handleShareDismiss}
        onChange={handleSheetChanges}
        snapPoints={ShareBottomSheetSnapPoints}
        backdropComponent={BottomSheetBackdrop}>
        <ShareSheet {...props} showMore={showMore} />
      </BottomSheetModal>
    </>
  );
};

export default Feed;

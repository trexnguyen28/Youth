import React from 'react';
import {View, Text, Image} from 'react-native';
import {ActionBlockStyles as styles} from './styles';
import Avatar from '../../../../components/Avatar';
import {ActionAvatarSize} from '../../constants';
import Button from '../../../../components/Button';

interface Props {}

const ActionBlock = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Avatar size={ActionAvatarSize} imgStyle={styles.avatar} />
        <Text style={styles.title}>{"What's on your mind?"}</Text>
      </View>
      <View style={styles.footerContainer}>
        <Button
          title={'Live'}
          icon={'videocam'}
          iconStyle={styles.liveIcon}
          titleStyle={styles.actionTitle}
          style={[styles.actionBox, styles.actionBorderBox]}
        />
        <Button
          title={'Photo'}
          icon={'images'}
          iconStyle={styles.imagesIcon}
          titleStyle={styles.actionTitle}
          style={[styles.actionBox, styles.actionBorderBox]}
        />
        <Button
          title={'Room'}
          icon={'camera'}
          iconStyle={styles.cameraIcon}
          titleStyle={styles.actionTitle}
          style={styles.actionBox}
        />
      </View>
    </View>
  );
};

export default ActionBlock;

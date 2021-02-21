import React from 'react';
import {FeedPrivacy} from '../types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';
import {FontSize} from '../../../styles/typography';
import {TextColor} from '../../../styles/color';
import {IconProps} from 'react-native-vector-icons/Icon';

interface Props extends Omit<IconProps, 'name'> {
  privacy: FeedPrivacy;
}

const styles = StyleSheet.create({
  icon: {
    fontSize: FontSize.small,
    color: TextColor.light,
  },
});

const FeedPrivacyIconMap: Record<FeedPrivacy, string> = {
  public: 'earth',
  friend: 'people',
  custom: 'cog',
};

const PrivacyIcon = (props: Props) => {
  const {privacy, style, ...rest} = props;
  const iconStyle = StyleSheet.flatten([styles.icon, props.style]);

  return (
    <Ionicons {...rest} name={FeedPrivacyIconMap[privacy]} style={iconStyle} />
  );
};

export default PrivacyIcon;

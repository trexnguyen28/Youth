import React from 'react';
import {View} from 'react-native';

import {HeaderStyles as styles} from './styles';
import Logo from '../../../../components/Logo';
import Button from '../../../../components/Button';

interface Props {}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.rightContent}>
        <Button style={styles.button} icon={'search'} iconStyle={styles.icon} />
        <Button
          style={styles.button}
          icon={'chatbubbles'}
          iconStyle={styles.icon}
        />
      </View>
    </View>
  );
};

export default Header;

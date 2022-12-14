import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from './CustomHeader.style';

export default function CustomHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.hidingh3}>23:47</Text>
      <Image
        source={require('../../../assets/icons/connectIcon.png')}
        style={styles.connectIcon}
      />
      <Image
        source={require('../../../assets/icons/appIcon.png')}
        style={styles.appIcon}
      />
      <Image
        source={require('../../../assets/icons/settingIcon.png')}
        style={styles.settingIcon}
      />
    </View>
  );
}

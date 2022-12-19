import {View, Image, Text, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './CustomHeader.style';

export default function CustomHeader({sourceImg}) {
  const navigation = useNavigation();
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
      <Image source={sourceImg} style={styles.synIcon} />
      <Pressable onPress={() => navigation.navigate('SettingScreen')}>
        <Image
          source={require('../../../assets/icons/settingIcon.png')}
          style={styles.settingIcon}
        />
      </Pressable>
    </View>
  );
}

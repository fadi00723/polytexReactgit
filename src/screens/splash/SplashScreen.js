import {View, Text, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './SplashScreen.style';

export default function SplashScreen() {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate('HomeScreen');
  }, 2000);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icons/appIcon.png')}
        style={styles.appIcon}
      />
    </View>
  );
}

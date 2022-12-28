import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './DeviceDetailScreen.style';
import {useNavigation} from '@react-navigation/native';
export default function DeviceDetailScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <CustomHeader />
      <View style={styles.innerView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '5%',
          }}>
          <Pressable
            onPress={() => {
              console.log('backpressed'), navigation.goBack();
            }}
            hitSlop={40}>
            <Image
              source={require('../../../assets/icons/backIcon.png')}
              style={styles.backIcon}
            />
          </Pressable>
          <Text style={styles.mainHiding}>Device Details</Text>
          <View style={{width: 30, height: 30}} />
        </View>
        <View style={styles.viewNew}>
          <Text style={styles.hidingh4}>DEVICE ID</Text>
          <Text style={styles.hidingh4}>SITE NAME</Text>
          <Text style={styles.hidingh4}>DEVICE MAC ADDRESS</Text>
          <Text style={styles.hidingh4}>DEVICE IP ADDRESS</Text>
          <Text style={styles.hidingh4}>WEB SERVER NAME</Text>
          <Text style={styles.hidingh4}>APPLICATION VERSION</Text>
          <Text style={styles.hidingh4}>HARDWARE MODEL</Text>
        </View>
      </View>
    </View>
  );
}

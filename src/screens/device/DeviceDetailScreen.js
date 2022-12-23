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
          <Text style={styles.hidingh4}>Device id</Text>
          <Text style={styles.hidingh4}>Site name</Text>
          <Text style={styles.hidingh4}>Device MAC address</Text>
          <Text style={styles.hidingh4}>Device IP address</Text>
          <Text style={styles.hidingh4}>Web server name</Text>
          <Text style={styles.hidingh4}>Application version</Text>
          <Text style={styles.hidingh4}>Hardware model</Text>
        </View>
      </View>
    </View>
  );
}

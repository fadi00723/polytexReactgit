import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './ScanProgress.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function ScanProgress() {
  const renderModal = () => {
    return (
      <View style={styles.mainModal}>
        <Image
          source={require('../../../assets/icons/meterIcon.png')}
          style={{width: 40, height: 29}}
        />
        <Text style={styles.hidingh2}>READING POWER:</Text>
        <Text style={styles.hidingh3}>X dbi</Text>
      </View>
    );
  };
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
          <Text style={styles.hidingH1}>Wash Received</Text>
          <View style={{height: 30, width: 30}} />
        </View>
        <View style={styles.centeredView}>
          <View style={styles.containerView}>
            <Text style={styles.txtH1}>Scanning in progress</Text>
          </View>
          <TouchableOpacity style={styles.circleView}>
            <Text style={styles.hidingH1}>STARsadsT SCAN</Text>
          </TouchableOpacity>
          {renderModal()}
        </View>
      </View>
    </View>
  );
}

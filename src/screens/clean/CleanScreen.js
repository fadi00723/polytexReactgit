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
import styles from './CleanScreen.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function CleanScreen() {
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
            justifyContent: 'center',
            paddingVertical: '5%',
          }}>
          <Pressable
            onPress={() => {
              console.log('here');
              navigation.goBack();
            }}>
            <Image
              source={require('../../../assets/icons/backIcon.png')}
              style={styles.backIcon}
            />
          </Pressable>
          <Text style={styles.hidingH1}>Clean</Text>
        </View>
        <View style={styles.centeredView}>
          <Image
            source={require('../../../assets/icons/cleanIcon.png')}
            style={styles.transIcon}
          />
        </View>
        <View style={styles.centeredView}>
          <TouchableOpacity style={styles.circleView}>
            <Text style={styles.hidingH1}>START SCAN</Text>
          </TouchableOpacity>
          {renderModal()}
        </View>
      </View>
    </View>
  );
}

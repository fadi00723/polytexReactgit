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
import styles from './SupplyLocation.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import strings from '../../constants/lng/LocalizedStrings';

export default function SupplyLocation({route}) {
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
  const {address, items, type} = route.params;
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
          {type == 'Edit' ? (
            <Text style={styles.hidingH1}>Add/Edit</Text>
          ) : (
            <Text style={styles.hidingH1}>Choose Location</Text>
          )}
          <View style={{width: 30, height: 30}} />
        </View>
        <View style={styles.centeredView}>
          <Text style={styles.hidingH1}>{items}</Text>
          <Text style={styles.hidingH1}>{address}</Text>
          <TouchableOpacity
            style={styles.circleView}
            onPress={() => navigation.navigate('ScanProgress')}>
            <Text style={styles.hidingH1}>{strings.STARTSCAN}</Text>
          </TouchableOpacity>
          {renderModal()}
        </View>
      </View>
    </View>
  );
}

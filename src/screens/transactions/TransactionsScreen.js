import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './TransactionsScreen.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function TransactionsScreen() {
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../assets/icons/backIcon.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.hidingH1}>Transactions</Text>
        </View>
        <View style={styles.centeredView}>
          <Image
            source={require('../../../assets/icons/transactionIcon.png')}
            style={styles.transIcon}
          />
          <CustomButton
            label={'Clean'}
            onPress={() => navigation.navigate('CleanScreen')}
          />
          <CustomButton
            label={'Supply To Location'}
            onPress={() => navigation.navigate('LocationScreen')}
          />
          <CustomButton label={'Soil'} />
        </View>
      </View>
    </View>
  );
}

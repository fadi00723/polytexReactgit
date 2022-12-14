import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './HomeScreen.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const renderModal = () => {
    return (
      <View style={styles.mainModal}>
        <Image
          source={require('../../../assets/icons/syncIcon.png')}
          style={{width: 35, height: 35}}
        />
        <Text style={styles.hidingh2}>LAST SYNC:</Text>
        <Text style={styles.hidingh3}>17:49 29/11/2022</Text>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <CustomHeader />
      <View style={styles.innerView}>
        <Text style={styles.hidingH1}>Full Cycle Solution</Text>
        <View style={styles.centeredView}>
          <CustomButton
            label={'TRANSACTIONS'}
            onPress={() => navigation.navigate('TransactionsScreen')}
          />
          <CustomButton label={'ADD/EDIT ITEMS'} />
          <CustomButton label={'QUICK SCAN'} />
          <View>{renderModal()}</View>
        </View>
      </View>
    </View>
  );
}

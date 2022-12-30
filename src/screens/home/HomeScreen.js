import {View, Text, Image, BackHandler} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './HomeScreen.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import strings from '../../constants/lng/LocalizedStrings';

export default function HomeScreen() {
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  const renderModal = () => {
    return (
      <View style={styles.mainModal}>
        <Image
          source={require('../../../assets/icons/syncIcon.png')}
          style={{width: 35, height: 35}}
        />
        <Text style={styles.hidingh2}>LAST SYNC: </Text>
        <Text style={styles.hidingh3}>17:49 29/11/2022</Text>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <CustomHeader />
      <View style={styles.innerView}>
        <Text style={styles.hidingH1}>{strings.FULLCYCLESOLUTION}</Text>
        <View style={styles.centeredView}>
          <CustomButton
            label={strings.TRANSACTIONS}
            onPress={() => navigation.navigate('TransactionsScreen')}
          />
          <CustomButton
            label={strings.ADDEDITITEMS}
            onPress={() => navigation.navigate('EditItems')}
          />
          <CustomButton
            label={strings.QUICKSCAN}
            onPress={() => navigation.navigate('QuickScan')}
          />
          <View>{renderModal()}</View>
        </View>
      </View>
    </View>
  );
}

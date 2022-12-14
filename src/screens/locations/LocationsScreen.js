import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './LocationScreen.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function LocationScreen() {
  const [locations, setLocations] = useState([
    {
      address: 'Pnimit A',
    },
    {
      address: 'Yoldot B',
    },
    {
      address: 'Intensive Care',
    },
    {
      address: 'Location 1',
    },
    {
      address: 'Location 2',
    },
  ]);
  const renderButton = item => {
    return (
      <CustomButton
        label={item.address}
        onPress={() =>
          navigation.navigate('SupplyLocation', {address: item.address})
        }
      />
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../assets/icons/backIcon.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.hidingH1}>Choose Location</Text>
        </View>
        <View style={styles.centeredView}>
          <Image
            source={require('../../../assets/icons/mapIcon.png')}
            style={styles.mapIcon}
          />
          <ScrollView>
            {locations.map(renderButton)}
            {/* <CustomButton label={'Pnimit A'} />
            <CustomButton label={'Yoldot B'} />
            <CustomButton label={'Intensive Care'} />
            <CustomButton label={'Location 1'} />
            <CustomButton label={'Location 2'} />
            <CustomButton label={'Location 3'} /> */}
            <View style={{height: 150}} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

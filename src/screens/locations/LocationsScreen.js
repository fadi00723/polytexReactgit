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
import styles from './LocationScreen.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Api from '../../../Api/Api';
import Toast from 'react-native-root-toast';

export default function LocationScreen() {
  useEffect(() => {
    Api.request('get', 'Gx/getLocations')
      .then(response => {
        console.log(response.response.locations);
        setLocations(response.response.locations);
        // Localdata.setvalue('token', response.response.data.wt);
        // Toast.show('Logged in successfully');
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const [locations, setLocations] = useState();
  const renderButton = (item, i) => {
    return (
      <CustomButton
        key={i}
        label={item.locationName}
        onPress={() =>
          navigation.navigate('SupplyLocation', {address: item.locationName})
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
          <Text style={styles.mainHiding}>Choose Locations</Text>
          <View style={{width: 30, height: 30}} />
        </View>
        <View style={styles.centeredView}>
          <Image
            source={require('../../../assets/icons/mapIcon.png')}
            style={styles.mapIcon}
          />
          <ScrollView>
            {locations != undefined && locations.map(renderButton)}
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

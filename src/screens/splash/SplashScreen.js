import {View, Text, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './SplashScreen.style';
import Api from '../../../Api/Api';
import Global_Functions from '../../../Api/Functions/GlobalFunctions';
import Toast from 'react-native-root-toast';
import OwnStorage from '../../Api/StorageController';

export default function SplashScreen() {
  const navigation = useNavigation();
  var Localdata = new OwnStorage();

  const LoginData = {
    RequestStationConnectRequest: {
      Data: {
        StationTypeId: 3,
        StationModelId: 1100,
        MacAddress: '',
        StationIP: '185.132.4.156',
        Version: '1.0.0',
        StationNum: 24913,
        Height: 0,
        Width: 0,
        FTT: '472525',
        RT: '',
      },
    },
  };
  setTimeout(() => {
    let path = 'StationCommunications/Auth';

    Api.request('post', path, LoginData)
      .then(response => {
        console.log(response.response.data.wt);
        Localdata.setvalue('api_token', response.response.data.wt);
        Toast.show('Logged in successfully');
        navigation.navigate('HomeScreen');
      })
      .catch(error => {
        console.log(error);
      });
  }, 2000);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icons/appIcon.png')}
        style={styles.appIcon}
      />
    </View>
  );
}

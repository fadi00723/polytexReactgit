import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './EditItemScreen.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Api from '../../../Api/Api';
import Toast from 'react-native-root-toast';
import OwnStorage from '../../Api/StorageController';

export default function EditItem() {
  const navigation = useNavigation();
  var Localdata = new OwnStorage();
  const [Items, setItems] = useState([]);

  useEffect(() => {
    console.log('token ghere');

    Api.request('get', 'Gx/getItemTypes')
      .then(response => {
        console.log(response.response.itemTypes);
        setItems(response.response.itemTypes);
        // Localdata.setvalue('token', response.response.data.wt);
        // Toast.show('Logged in successfully');
      })
      .catch(error => {
        console.log(error);
        for (const [key, value] of Object.entries(error.response.data.errors)) {
          console.log(`${key}: ${value}`);
          Toast.show(`${key}: ${value}`);
        }
      });
  }, []);
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
          <Text style={styles.hidingH1}>Choose item type to Add/Edit</Text>
          <View style={{width: 18, height: 95}} />
        </View>
        <View>
          {Items.map((item, i) => {
            return (
              <CustomButton
                key={i}
                label={item.fullName}
                onPress={() =>
                  navigation.navigate('EditItemSubType', {
                    items: item.fullName,
                    itemSubTypes: item.itemSubTypes,
                  })
                }
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}

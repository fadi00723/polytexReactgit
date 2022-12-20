import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './EditItemSubType.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function EditItemSubType({route}) {
  const [locations, setLocations] = useState([
    {
      address: 'XS',
    },
    {
      address: 'S',
    },
    {
      address: 'XL',
    },
    {
      address: 'L',
    },
  ]);
  const renderButton = item => {
    return (
      <CustomButton
        label={item.address}
        onPress={() =>
          navigation.navigate('SupplyLocation', {
            address: item.address,
            items: items,
            type: 'Edit',
          })
        }
      />
    );
  };
  const {items} = route.params;
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
          <Text style={styles.hidingH9}>Choose item sub-type to Add/Edit</Text>
          <View style={{width: 30, height: 30}} />
        </View>
        <View style={styles.centeredView}>
          {/* <Image
            source={require('../../../assets/icons/mapIcon.png')}
            style={styles.mapIcon}
          /> */}
          <ScrollView>
            {locations.map(renderButton)}
            <View style={{height: 150}} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

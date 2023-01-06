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
  const [locations, setLocations] = useState();
  const renderButton = (item, i) => {
    return (
      <CustomButton
        key={i}
        label={item.fullName}
        onPress={() =>
          navigation.navigate('SupplyLocation', {
            address: item.fullName,
            items: items,
            type: 'Edit',
          })
        }
      />
    );
  };
  const {items, itemSubTypes} = route.params;
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
          <View style={{width: 18, height: 30}} />
        </View>
        <View style={styles.centeredView}>
          {/* <Image
            source={require('../../../assets/icons/mapIcon.png')}
            style={styles.mapIcon}
          /> */}
          <View style={{width: 60, height: 38}} />
          <ScrollView>
            {itemSubTypes.map(renderButton)}
            <View style={{height: 150}} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

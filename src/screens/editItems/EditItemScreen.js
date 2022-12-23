import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './EditItemScreen.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function EditItem() {
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
          <Text style={styles.hidingH1}>Choose item type to Add/Edit</Text>
          <View style={{width: 18, height: 95}} />
        </View>
        <View>
          <CustomButton
            label={'T-shirt'}
            onPress={() =>
              navigation.navigate('EditItemSubType', {
                items: 'T-shirts',
              })
            }
          />
          <CustomButton
            label={'Pants'}
            onPress={() =>
              navigation.navigate('EditItemSubType', {
                items: 'Pants',
              })
            }
          />
          <CustomButton
            label={'Blanket'}
            onPress={() =>
              navigation.navigate('EditItemSubType', {
                items: 'Blanket',
              })
            }
          />
          <CustomButton
            label={'Blue & White pents'}
            onPress={() =>
              navigation.navigate('EditItemSubType', {
                items: 'Blue & White pents',
              })
            }
          />
        </View>
      </View>
    </View>
  );
}

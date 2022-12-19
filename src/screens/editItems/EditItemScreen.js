import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './EditItemScreen.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function EditItems() {
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
          <Text style={styles.hidingH1}>Choose Item type to Add/Edit</Text>
          <View style={{width: 30, height: 30}} />
        </View>
        <View>
          <View style={styles.centeredView}>
            <TouchableOpacity style={styles.containerbtn}>
              <Text style={styles.txtH1}>T-shirts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerbtn}>
              <Text style={styles.txtH1}>latest</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.centeredView}>
            <TouchableOpacity style={styles.containerbtn}>
              <Text style={styles.txtH1}>{'new'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerbtn}>
              <Text style={styles.txtH1}>latest</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

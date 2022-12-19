import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './RFIDSettingScreen.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import GlobalColors from '../../utils/GlobalColors';
import Slider from '@react-native-community/slider';
const countries = ['RG_EU3', 'RG_EU32', 'RG_NA'];

export default function RFIDSettingScreen() {
  const [minimum, setMinumum] = useState(5);
  const [maximum, setMaximum] = useState(88);
  const [currentVal, setCurrentVal] = useState(5);
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
          <Text style={styles.hidingH1}>RFID Settings</Text>
          <View style={{width: 30, height: 30}} />
        </View>
        <View style={styles.centeredView}>
          <Text style={styles.hidingH5}>Select Frequency area:</Text>
          <View style={{paddingTop: '5%'}}>
            <SelectDropdown
              data={countries}
              defaultValueByIndex={1}
              dropdownStyle={{
                backgroundColor: GlobalColors.LightBlack,
                borderRadius: 16,
              }}
              rowTextStyle={{color: 'white'}}
              dropdownOverlayColor={'transparent'}
              buttonTextStyle={{
                color: 'white',
                backgroundColor: GlobalColors.LightBlack,
              }}
              buttonStyle={{
                backgroundColor: GlobalColors.LightBlack,
                width: '90%',
                borderRadius: 16,
              }}
              renderDropdownIcon={isOpened => {
                return (
                  <Image
                    source={
                      !isOpened
                        ? require('../../../assets/icons/arrowdownIcon.png')
                        : require('../../../assets/icons/arrowUpIcon.png')
                    }
                    style={{width: 15, height: 15, left: '15%'}}
                  />
                );
              }}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: '7%',
              }}>
              <Text style={styles.hidingH6}>Adjust RFID dbi:</Text>
              <View style={styles.GreenBtn}>
                <Text style={styles.btnText}>{currentVal}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <Text style={styles.hidingH6}>{minimum}</Text>
              <Slider
                style={{width: '85%', height: 40}}
                minimumValue={minimum}
                maximumValue={maximum}
                onValueChange={value => {
                  var intvalue = Math.trunc(value);
                  setCurrentVal(intvalue);
                }}
                minimumTrackTintColor={GlobalColors.lightGrey}
                maximumTrackTintColor={GlobalColors.lightGrey}
                thumbImage={require('../../../assets/icons/thumbIcon.png')}
              />
              <Text style={styles.hidingH6}>{maximum}</Text>
            </View>
            <View style={styles.btnView}>
              <TouchableOpacity style={styles.newBtn}>
                <Text style={styles.hidingH7}>START </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.newBtn}>
                <Text style={styles.hidingH7}>STOP </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.newBtn}>
                <Text style={styles.hidingH7}>CLEAR </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              top: '5%',
              width: '90%',
              height: '25%',
              backgroundColor: GlobalColors.skyBlue,
            }}>
            <View style={{flexDirection: 'row', top: '25%', left: '20%'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Total:0</Text>
              <Text style={{left: 23, fontSize: 20, fontWeight: 'bold'}}>
                Unique:0
              </Text>
            </View>
          </View>
        </View>
        <View style={{top: '5%'}}>
          <CustomButton label={'SAVE'} onPress={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  );
}

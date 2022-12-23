import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './SettingScreen.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {CommonActions, useNavigation} from '@react-navigation/native';
import GlobalColors from '../../utils/GlobalColors';
import strings from '../../constants/lng/LocalizedStrings';
import OwnStorage from '../../Api/StorageController';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingScreen() {
  const [showModal, setShowModal] = useState(false);
  const [showSync, setShowSync] = useState(false);
  const [lang, setLang] = useState('');
  const [selectedlang, setselectedlang] = useState('');
  const navigation = useNavigation();
  var localdata = new OwnStorage();

  const selectedLng = async () => {
    const lngData = await AsyncStorage.getItem('language');
    setselectedlang(lngData);
    console.log('abhi language ye wali h', lngData);
    if (!!lngData) {
      strings.setLanguage(lngData);
    }
  };

  const onChangeLng = lng => {
    if (lng === 'en') {
      localdata.setvalue('language', 'en');
      console.log('english');
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: 'SettingScreen'}],
      });
      navigation.dispatch(resetAction);
      return;
    }
    if (lng === 'pt') {
      localdata.setvalue('language', 'pt');
      console.log('Portuguese');
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: 'SettingScreen'}],
      });
      navigation.dispatch(resetAction);
      //strings.setLanguage(lng);
      return;
    }
  };

  const setlngPortuguese = () => {
    localdata.setvalue('language', 'pt');
    onChangeLng('pt');
  };

  const setlngEnglish = () => {
    localdata.setvalue('language', 'en');
    onChangeLng('en');
  };
  useEffect(() => {
    selectedLng();
    getlang();
    // console.log('abhi language ye wali h', lngData);
  });
  const getlang = async () => {
    const lngData = await AsyncStorage.getItem('language');
    console.log('abhi language ye wali h', lngData);
    setLang(lngData);
  };
  const syncdata = () => {
    setShowSync(true);
    setTimeout(() => {
      setShowSync(false);
    }, 3000);
  };
  return (
    <View style={styles.mainContainer}>
      <CustomHeader
        sourceImg={
          showSync ? require('../../../assets/icons/syncIcon2.gif') : null
        }
      />
      <View style={styles.innerView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '5%',
          }}>
          <Pressable
            onPress={() => {
              console.log('backpressed'), navigation.navigate('HomeScreen');
            }}
            hitSlop={40}>
            <Image
              source={require('../../../assets/icons/backIcon.png')}
              style={styles.backIcon}
            />
          </Pressable>
          <Text style={styles.hidingH1}>{strings.SETTINGS}</Text>
          <View style={{width: 30, height: 30}} />
        </View>
        <View style={{height: 65}} />
        <ScrollView contentContainerStyle={styles.centeredView}>
          <CustomButton
            label={strings.LANGUAGE}
            imgSrc={
              lang == 'en'
                ? require('../../../assets/icons/EnglishIcon.png')
                : require('../../../assets/icons/PortugueseIcon.png')
            }
            styleImg={{width: 30, height: 30, borderRadius: 15, left: '90%'}}
            onPress={() => setShowModal(true)}
          />
          <CustomButton label={strings.SYNCDATA} onPress={() => syncdata()} />
          <CustomButton
            label={strings.RFIDSETTING}
            onPress={() => navigation.navigate('RFIDSettingScreen')}
          />
          <CustomButton
            label={strings.ALERTS}
            onPress={() => navigation.navigate('AlertScreen')}
          />
          <CustomButton
            label={strings.DEVICEDETAILS}
            onPress={() => navigation.navigate('DeviceDetailScreen')}
          />
          <CustomButton
            label={strings.ADVANCEDSETTINGS}
            onPress={() => navigation.navigate('AdvanceSettings')}
          />
        </ScrollView>
      </View>
      <View>
        <Modal
          visible={showModal}
          transparent
          animationType="slide"
          hardwareAccelerated>
          <View style={styles.centeredview}>
            <View style={styles.modalView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View style={{width: 20, height: 20}} />
                <Pressable onPress={() => setShowModal(false)}>
                  <Image
                    source={require('../../../assets/icons/crossIcon.png')}
                    style={{width: 20, height: 20, bottom: '50%'}}
                  />
                </Pressable>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setShowModal(false), setlngEnglish();
                  }}>
                  <View style={{flexDirection: 'row', marginVertical: '5%'}}>
                    <Image
                      style={{width: 30, height: 30}}
                      source={require('../../../assets/icons/English.png')}
                    />
                    <Text style={styles.txtH1}>{strings.ENGLISH}</Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 0.8,
                    borderBottomColor: GlobalColors.lightGrey,
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    setShowModal(false), setlngPortuguese();
                  }}>
                  <View style={{flexDirection: 'row', marginVertical: '5%'}}>
                    <Image
                      style={{width: 30, height: 30, borderRadius: 15}}
                      source={require('../../../assets/icons/PortugueseIcon.png')}
                    />
                    <Text style={styles.txtH1}>Portuguese</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

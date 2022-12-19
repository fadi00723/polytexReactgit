import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './SettingScreen.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import GlobalColors from '../../utils/GlobalColors';

export default function SettingScreen() {
  const [showModal, setShowModal] = useState(false);
  const [showSync, setShowSync] = useState(false);
  const navigation = useNavigation();
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
          showSync ? require('../../../assets/icons/syncIcon.gif') : null
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
              console.log('backpressed'), navigation.goBack();
            }}
            hitSlop={40}>
            <Image
              source={require('../../../assets/icons/backIcon.png')}
              style={styles.backIcon}
            />
          </Pressable>
          <Text style={styles.hidingH1}>Settings</Text>
          <View style={{width: 30, height: 30}} />
        </View>
        <ScrollView contentContainerStyle={styles.centeredView}>
          <CustomButton
            label={'Language'}
            imgSrc={require('../../../assets/icons/EnglishIcon.png')}
            styleImg={{width: 30, height: 30}}
            onPress={() => setShowModal(true)}
          />
          <CustomButton label={'Sync data'} onPress={() => syncdata()} />
          <CustomButton
            label={'RFID settings'}
            onPress={() => navigation.navigate('RFIDSettingScreen')}
          />
          <CustomButton
            label={'Alerts'}
            onPress={() => navigation.navigate('AlertScreen')}
          />
          <CustomButton
            label={'Device details'}
            onPress={() => navigation.navigate('DeviceDetailScreen')}
          />
          <CustomButton
            label={'Advanced settings'}
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
                <TouchableOpacity onPress={() => setShowModal(false)}>
                  <View style={{flexDirection: 'row', marginVertical: '5%'}}>
                    <Image
                      style={{width: 30, height: 30}}
                      source={require('../../../assets/icons/English.png')}
                    />
                    <Text style={styles.txtH1}>English</Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 0.8,
                    borderBottomColor: GlobalColors.lightGrey,
                  }}
                />
                <TouchableOpacity onPress={() => setShowModal(false)}>
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

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './QuickScan.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import GlobalColors from '../../utils/GlobalColors';

export default function QuickScan() {
  const [showModal, setShowModal] = useState(false);
  const errorModal = () => {
    return (
      <View style={styles.errorView}>
        <Text style={styles.hidingH6}>NO CONNECTION TO RFID READER</Text>
        <Text style={styles.hidingH7}>Please try to restart the device</Text>
      </View>
    );
  };
  const renderModal = () => {
    return (
      <View style={styles.mainModal}>
        <Image
          source={require('../../../assets/icons/meterIcon.png')}
          style={{width: 40, height: 29}}
        />
        <Text style={styles.hidingh2}>READING POWER:</Text>
        <Text style={styles.hidingh3}>X dbi</Text>
      </View>
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
          <Text style={styles.hidingH1}>Quick Scan</Text>
          <View style={{width: 30, height: 30}} />
        </View>
        <View style={styles.centeredView}>
          <View style={styles.transIcon} />
          {/* <Image
            source={require('../../../assets/icons/soilIcon.png')}
            style={styles.transIcon}
          /> */}
          <TouchableOpacity
            style={styles.circleView}
            onPress={() => {
              setShowModal(true);
            }}>
            <Text style={styles.hidingH1}>{strings.STARTSCAN}</Text>
          </TouchableOpacity>

          {renderModal()}
        </View>
      </View>
      <View>
        <Modal
          visible={showModal}
          transparent
          animationType="slide"
          hardwareAccelerated>
          <View style={styles.centeredview}>
            <View style={styles.modalView}>
              <View>
                <View style={{left: '40%', paddingTop: '8%'}}>
                  <Pressable onPress={() => setShowModal(false)}>
                    <Image
                      source={require('../../../assets/icons/minimizeIcon.png')}
                    />
                  </Pressable>
                </View>
              </View>
              <Image
                source={require('../../../assets/icons/warningIcon.png')}
                style={styles.warningIcon}
              />
              <Text
                style={{
                  fontSize: 35,
                  textAlign: 'center',
                  color: GlobalColors.orange,
                  bottom: 23,
                  width: '50%',
                  fontWeight: 'bold',
                }}>
                Oh no,
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  color: GlobalColors.orange,
                  bottom: 23,
                  width: '70%',
                  fontWeight: '600',
                }}>
                no connection to RFID reader
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: 'center',
                  color: GlobalColors.white,
                  bottom: 23,
                  width: '50%',
                  top: '5 %',
                }}>
                Please try to restart the device
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

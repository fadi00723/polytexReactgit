import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  BackHandler,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './AdvanceSettingsLast.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import GlobalColors from '../../utils/GlobalColors';
import CustomModal from '../../components/CustomModal/CustomModal';

export default function AdvanceSettingsLast() {
  const [showModal, setShowModal] = useState(false);
  const [showModalExit, setShowModalExit] = useState(false);
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
          <Text style={styles.hidingH1}>Advanced Settings</Text>
          <View style={{width: 30, height: 30}} />
        </View>
        <View style={styles.centeredView}>
          <CustomButton
            label={'Delete FTT'}
            onPress={() => setShowModal(true)}
          />

          <CustomButton
            label={'Exit application'}
            onPress={() => setShowModalExit(true)}
          />
          {showModalExit ? (
            <CustomModal
              visible={showModalExit}
              setShowModal={setShowModalExit}
              modalTitle={'Are you sure you want to exit the application?'}
              onPressConfirm={() => {
                setShowModalExit(false);
                BackHandler.exitApp();
              }}
            />
          ) : (
            <CustomModal
              visible={showModal}
              setShowModal={setShowModal}
              modalTitle={'Are you sure you want to delete FTT?'}
              onPressConfirm={() => {
                setShowModal(false);
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
}

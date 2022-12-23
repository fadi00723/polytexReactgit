import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  TextInput,
  Keyboard,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './DeleteFTT.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import GlobalColors from '../../utils/GlobalColors';

export default function DeleteFTT() {
  const [showModal, setShowModal] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);

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
          <Text style={styles.mainHiding}>Enter FTT</Text>
          <View style={{width: 30, height: 30}} />
        </View>
        <View style={styles.centeredView}>
          <View style={styles.textInput}>
            <TextInput
              placeholder={'Please type your code'}
              secureTextEntry={true}
              onEndEditing={() => {
                setShowModalSuccess(true);
              }}
            />
          </View>
        </View>
        {/* {renderKeypad()} */}
      </View>
      <View>
        <Modal
          visible={showModalSuccess}
          transparent
          animationType="slide"
          hardwareAccelerated>
          <View style={styles.centeredviewModal}>
            <View style={styles.modalView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View style={{width: 20, height: 20}} />
                <Pressable
                  onPress={() => {
                    setShowModalSuccess(false),
                      navigation.navigate('HomeScreen');
                  }}>
                  <Image
                    source={require('../../../assets/icons/crossIcon.png')}
                    style={{width: 20, height: 20, bottom: '120%', left: 23}}
                  />
                </Pressable>
              </View>
              <View style={{top: '30%'}}>
                <Text style={styles.text}>FTT changed successfully</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

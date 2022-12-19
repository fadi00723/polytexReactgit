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
import styles from './AdvanceSettings.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import GlobalColors from '../../utils/GlobalColors';

export default function AdvanceSettings() {
  const [showModal, setShowModal] = useState(false);
  const renderKeypad = () => {
    return (
      <View style={{padding: '12%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingBottom: '5%',
          }}>
          <TouchableOpacity style={styles.boxView}>
            <Text style={styles.boxText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxView}>
            <Text style={styles.boxText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxView}>
            <Text style={styles.boxText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxViewBack}
            onPress={() => setShowModal(true)}>
            <Image
              source={require('../../../assets/icons/arrowLeftIcon.png')}
              style={styles.boxTextImg}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingBottom: '5%',
          }}>
          <TouchableOpacity style={styles.boxView}>
            <Text style={styles.boxText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxView}>
            <Text style={styles.boxText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxView}>
            <Text style={styles.boxText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxViewBack}>
            <Text style={styles.boxText}>c</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingBottom: '5%',
          }}>
          <TouchableOpacity style={styles.boxView}>
            <Text style={styles.boxText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxView}>
            <Text style={styles.boxText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxView}>
            <Text style={styles.boxText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxViewTick}
            onPress={() => navigation.navigate('AdvanceSettingsLast')}>
            <Image
              source={require('../../../assets/icons/tickIcon.png')}
              style={styles.boxTextImg}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={styles.boxViewEmpty}></View>
          <TouchableOpacity style={styles.boxView}>
            <Text style={styles.boxText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxView}>
            <Text style={styles.boxText}>.</Text>
          </TouchableOpacity>
          <View style={styles.boxViewEmpty}></View>
        </View>
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
          <Text style={styles.hidingH1}>Enter Advance Settings</Text>
          <View style={{width: 30, height: 30}} />
        </View>
        <View style={styles.centeredView}>
          <View style={styles.textInput}>
            <TextInput
              placeholder={'Please type your code'}
              secureTextEntry={true}
            />
          </View>
        </View>
        {renderKeypad()}
      </View>
      <View>
        <Modal
          visible={showModal}
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
                <Pressable onPress={() => setShowModal(false)}>
                  <Image
                    source={require('../../../assets/icons/crossIcon.png')}
                    style={{width: 20, height: 20, bottom: '120%', left: 23}}
                  />
                </Pressable>
              </View>
              <View style={{top: '30%'}}>
                <Text style={styles.text}>Wrong Code!</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

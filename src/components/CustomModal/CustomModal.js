import {
  Text,
  View,
  Modal,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './CustomModal.style';
import React, {useState} from 'react';
import GlobalColors from '../../utils/GlobalColors';
import ScanProgress from '../../screens/supply/ScanProgress';

const CustomModal = ({visible, setShowModal, modalTitle, onPressConfirm}) => {
  return (
    <View>
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centeredview}>
          <View style={styles.modalView}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                color: GlobalColors.white,
                bottom: 23,
                fontFamily: 'Montserrat-Medium',
                width: '50%',
              }}>
              {modalTitle}
            </Text>
            <TouchableOpacity
              style={styles.containerBtn}
              onPress={onPressConfirm}>
              <Text style={styles.txtH1}>CONFIRM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.containerBtnCancel}
              onPress={() => setShowModal(false)}>
              <Text style={styles.txtH1}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './AlertScreen.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cell,
} from 'react-native-table-component';
import GlobalColors from '../../utils/GlobalColors';

export default function AlertScreen() {
  const [showModal, setShowModal] = useState(false);
  const [tableHead, setTableHead] = useState(['Time', 'Alert ID']);
  const [tableData, setTableData] = useState([
    ['20/11/2022 12:17', '0x6506', ''],
    ['20/11/2022 12:17', '0x6506', ''],
  ]);
  const renderRow = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          borderTopColor: GlobalColors.lightGrey,
          borderTopWidth: 0.2,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          justifyContent: 'space-between',
        }}>
        <Text style={styles.dateText}>20/11/2022 </Text>
        <Text style={styles.timeText}> 12:17 </Text>
        <Text style={styles.alertText}>0X6506</Text>
        <TouchableOpacity
          style={{
            width: 60,
            height: '40%',
            borderRadius: 23,
            alignItems: 'center',
            justifyContent: 'center',
            left: 20,
            backgroundColor: GlobalColors.darkOrange,
          }}
          onPress={() => setShowModal(true)}>
          <Text style={styles.btntext}>MORE</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 10,
              width: '80%',
            }}
          />
        </View>
      </View>
    );
  };
  const renderTable = () => {
    return (
      <View style={styles.containerTable}>
        <Table>
          <Row
            data={tableHead}
            flexArr={[0.5, 2]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper} />
        </Table>
        {renderRow()}
        {renderRow()}
        {renderRow()}
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
          <Text style={styles.hidingH1}>Device Alerts</Text>
          <View style={{width: 30, height: 30}} />
        </View>
        <View style={styles.centeredView}>{renderTable()}</View>
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
                      source={require('../../../assets/icons/crossIcon.png')}
                      style={{width: 20, height: 20}}
                    />
                  </Pressable>
                </View>
              </View>
              <Text style={styles.text}>TIME</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '35%',
                }}>
                <Text style={styles.dateText}>20/11/2022</Text>
                <Text style={styles.timeText}>12:17</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  top: '20%',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/icons/arrowLeft.png')}
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.text}>ALERTID</Text>
                  <Text style={[styles.dateText, {textAlign: 'center'}]}>
                    0X6506
                  </Text>
                </View>
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/icons/arrowRight.png')}
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
              </View>
              <View style={{top: '35%'}}>
                <Text style={styles.text}>MORE INFO</Text>
                <Text style={[styles.dateText, {width: '10%'}]}>
                  There is no Connection to the RFID reader
                </Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

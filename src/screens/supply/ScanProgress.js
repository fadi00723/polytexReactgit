import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './ScanProgress.style';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import {useNavigation} from '@react-navigation/native';
import GlobalColors from '../../utils/GlobalColors';
import CustomModal from '../../components/CustomModal/CustomModal';

export default function ScanProgress({route}) {
  useEffect(() => {
    console.log('type', type);
  });
  const [playpause, setPlayPasue] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showDone, setShowDone] = useState(false);
  const [showDiscard, setShowDiscard] = useState(false);
  const [tableHead, setTableHead] = useState(['ITEM', 'SUB', 'SCANNED']);
  const [tableTitle, setTableTitle] = useState(['1', '2']);
  const [tableData, setTableData] = useState([
    ['Blue shirt', 'M', '120'],
    ['Shirt', 'XL', 85],
    ['Unregistered', '', 15],
  ]);
  const renderModal = () => {
    return (
      <View style={styles.mainModal}>
        <Pressable onPress={() => setPlayPasue(!playpause)}>
          {playpause ? (
            <Image
              source={require('../../../assets/icons/pauseActiveIcon.png')}
              style={{width: 60, height: 60}}
            />
          ) : (
            <Image
              source={require('../../../assets/icons/playActiveIcon.png')}
              style={{width: 60, height: 60}}
            />
          )}
        </Pressable>
        <Pressable>
          {playpause ? (
            <Image
              source={require('../../../assets/icons/crossInactiveIcon.png')}
              style={{width: 60, height: 60}}
            />
          ) : (
            <Pressable
              onPress={() => {
                setShowModal(true), setShowDiscard(true);
              }}>
              <Image
                source={require('../../../assets/icons/crossActiveIcon.png')}
                style={{width: 60, height: 60}}
              />
            </Pressable>
          )}
        </Pressable>
        <Pressable>
          {playpause ? (
            <Image
              source={require('../../../assets/icons/tickInactiveIcon.png')}
              style={{width: 60, height: 60}}
            />
          ) : (
            <Pressable onPress={() => setShowModal(true)}>
              <Image
                source={require('../../../assets/icons/tickActiveIcon.png')}
                style={{width: 60, height: 60}}
              />
            </Pressable>
          )}
        </Pressable>
        <CustomModal
          visible={showModal}
          setShowModal={setShowModal}
          modalTitle={
            showDiscard
              ? 'Are you sure you want to discard scanned results?'
              : type == 'Soil'
              ? 'Upload soil items?'
              : 'Received Scan Items'
          }
          onPressConfirm={() => {
            setShowModal(false), setShowDone(true);
          }}
        />
      </View>
    );
  };
  const renderTable = () => {
    return (
      <View style={styles.containerTable}>
        <Table>
          <Row
            data={tableHead}
            flexArr={[4, 2, 3]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            {/* <Col
              data={tableTitle}
              style={styles.title}
              heightArr={[28, 28]}
              textStyle={styles.text}
            /> */}
            <Rows
              data={tableData}
              flexArr={[4, 2, 3]}
              style={styles.row}
              textStyle={styles.text2}
            />
          </TableWrapper>
        </Table>
      </View>
    );
  };
  const navigation = useNavigation();
  const {type} = route.params;
  return (
    <View style={styles.mainContainer}>
      <CustomHeader />
      {showDone ? (
        <View style={styles.innerView}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              padding: '50%',
            }}>
            <Image
              source={require('../../../assets/icons/doneIcon.gif')}
              style={{width: 200, height: 200}}
            />
          </View>
        </View>
      ) : (
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
            <Text style={styles.hidingH1}>
              {type == 'Clean'
                ? 'Clean'
                : type == 'Supply Location'
                ? 'Supply Location'
                : type == 'Soil'
                ? 'Soil'
                : 'Wash Received'}
            </Text>
            <View style={{height: 30, width: 30}} />
          </View>
          <View style={styles.centeredView}>
            {playpause ? (
              <View style={styles.containerView}>
                <Text style={styles.txtH1}>Scanning in progress</Text>
              </View>
            ) : (
              <View style={styles.containerViewStopped}>
                <Text style={styles.txtH1}>Scan Stopped</Text>
              </View>
            )}
            {renderTable()}
            {renderModal()}
          </View>
        </View>
      )}
    </View>
  );
}

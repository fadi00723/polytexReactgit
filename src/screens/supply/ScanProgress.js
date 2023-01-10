import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  TouchableWithoutFeedback,
  ActivityIndicator,
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
import Api from '../../../Api/Api';
import Toast from 'react-native-root-toast';

export default function ScanProgress({route}) {
  useEffect(() => {
    console.log('type', type, location, items, location_id);
  });
  const [playpause, setPlayPasue] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showDone, setShowDone] = useState(false);
  const [showDiscard, setShowDiscard] = useState(false);
  const [tableHead, setTableHead] = useState(['ITEM', 'SUB', 'SCAN/STD']);
  const [tableTitle, setTableTitle] = useState(['1', '2']);
  const listofIds = [
    '2831B38304BC4E08',
    '2831B38304BC4E08',
    '2831B38301D17D16',
    '3350005FE2CFF625',
    '2831B3830231734E',
    '2831B383054B7F8A',
    '2831B38301D17071',
    '3350005FE2A60AE2',
    '2831B38303AE5642',
    '3350006000F4FE62',
    '2831B38303AE5937',
    '3350007FE2F35F7A',
    '3350007FE27B0A1D',
    '2831B3830231736D',
    '2831B383E0774C05',
    '2831B38304BC4328',
    '2831B38211645FD0',
    '3350004001DC8483',
    '3350004001DC9C03',
    '2831B382D04A869E',
    '3350007FE27B097D',
    '2831B382113270D9',
    '2831B383E06BA6B7',
    '2831B383053E927C',
    '3350005FE2CFF14C',
    '2831B38211641B37',
    '2831B3830267FADE',
    '2831B38304B2EEF8',
    '2831B38304BC5445',
    '2831B382D0483A84',
    '2831B383053DE622',
    '2831B3830242FD63',
    '2831B382115110DC',
    '2831B38211639FAA',
    '2831B3821164DDE5',
    '2831B382D0483A0A',
    '2831B382D04A7BA5',
    '2831B38300EFEE10',
    '2831B38300F047B7',
    '2831B3830113B6FF',
    '2831B38302317337',
    '2831B3830231739E',
    '2831B383041144BF',
    '2831B38304B2EED3',
    '2831B383053EAD5C',
    '2831B383054B85A3',
    '2831B383E094D9B9',
    '2831B383E0A0B59E',
    '2831B383E0A0B6AF',
    '2831B383E0A468DB',
    '2831B383E0BE0520',
    '3350004001DC8693',
    '2831B383E0A46878',
    '3350007FE27B2BE6',
    '3350007FE2F3512C',
    '2831B382118D6F5D',
    '2831B38302317351',
    '2831B3830050B5DF',
    '2831B382D0035FFA',
    '2831B38304BC48F2',
    '2831B38303E878F7',
    '2831B383E094D8EC',
    '335000A666FE4CE2',
    '3350007FE27AFC76',
    '2831B383E0A46A03',
    '3350007FE2F358B4',
    '2831B382114905D8',
    '2831B38211490FC6',
    '2831B38304CAA0BD',
    '2831B3821164961A',
    '2831B38304D820E7',
    '2831B382D00E7567',
    '3350005FE2A6075E',
    '2831B382D0085AC8',
    '2831B383E0775E6D',
    '2831B38304292D16',
    '2831B383E0A468A5',
    '3350004001DCA048',
    '2831B3821163A3E0',
    '2831B3821164934C',
    '2831B382D00E7499',
    '2831B382116578C1',
    '3350005FE2CFF621',
    '2831B382D00E8D73',
    '2831B3821164EE19',
    '2831B383E094D7E5',
    '2831B382112FCE82',
    '2831B382D047455F',
    '3350007FE2F357A8',
    '335000999A5BD4B3',
    '3350007FE27B2486',
    '2831B38304CA96F2',
    '2831B383053DEDE3',
    '2831B383E0A0B6DF',
    '2831B383054B692C',
    '2831B383E0EFEE8A',
    '2831B383E0A469CB',
    '3350005FE2A5FD55',
    '2831B383041143E0',
    '2831B382D013DC5D',
    '2831B383053DEF09',
    '3350007FE2F347A8',
    '2831B383E06BB032',
    '2831B38300D257C1',
    '2831B38303AE59BD',
    '2831B38211631A1C',
    '2831B38302317324',
    '2831B38303E88538',
    '3350007FE2F35E8B',
    '2831B383E0BE07E2',
    '2831B38211510333',
  ];
  const [tableData, setTableData] = useState([
    // ['Blue shirt', 'M', '120'],
    // ['Shirt', 'XL', 85],
    // ['Unregistered', '', 15],
  ]);

  showDone &&
    setTimeout(() => {
      location == '' || location == undefined
        ? navigation.navigate('HomeScreen')
        : type == 'Edit'
        ? navigation.navigate('EditItems')
        : navigation.navigate('LocationScreen');
    }, 2000);
  useEffect(() => {
    type == 'Supply To' &&
      Api.request('get', 'Gx/getItemIdsList')
        .then(response => {
          //logic to get tags and get items from the call and manupalate data for table
          const tempdata = [];
          const tempTbledata = [];

          let tempfinal = [];
          const length = 0;
          let unregstered = 0;

          response.response.itemIds.forEach(element => {
            if (listofIds.includes(element.rfid)) {
              tempdata.push({
                Mainitem: element.itemTypeName,
                subitem: element.itemSubTypeName,
                totalitems: element.statusId,
              });
            } else {
            }
          });
          tempfinal = supplyReport;

          for (var a = 0; a < supplyReport.length; a++) {
            tempfinal[a].totalitems = 0;
          }

          for (var i = 0; i < supplyReport.length; i++) {
            for (var j = 0; j < tempdata.length; j++) {
              if (
                tempdata[j].Mainitem == supplyReport[i].itemTypeName &&
                tempdata[j].subitem == supplyReport[i].itemSubTypeName
              ) {
                tempfinal[i].totalitems = tempfinal[i].totalitems + 1;
              } else {
              }
            }
          }
          unregstered = listofIds.length - 1 - response.response.itemIds.length;

          tempfinal.forEach(element => {
            tempTbledata.push([
              element.itemTypeName,
              element.itemSubTypeName,
              element.totalitems + '/' + element.standardValue,
            ]);
          });

          tempTbledata.push(['Unknown', '', unregstered + '/' + '-']);
          console.log('tempdta', tempdata);
          setTableData(tempTbledata);
        })
        .catch(error => {
          console.log(error);
        });
    //logic to get tags and get items from the call and manupalate data for table
  }, []);

  const supplytolocation = () => {
    const params = {
      actionDate: new Date().toString,
      tagIds: listofIds,
      isOffline: true,
      locationId: location_id,
      stationId: 24913,
    };
    console.log(params);
    Api.request('post', 'Gx/supplyToLocation', params)
      .then(response => {
        console.log(response.description);
        Toast.show(response.description);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const renderModal = () => {
    return (
      <View style={styles.modalView}>
        <Pressable onPress={() => setPlayPasue(!playpause)}>
          {playpause ? (
            <Image
              source={require('../../../assets/icons/pauseActiveIcon.png')}
              style={{
                width: 55,
                height: 55,
                marginHorizontal: '2%',
                right: '54%',
              }}
            />
          ) : (
            <Image
              source={require('../../../assets/icons/playActiveIcon.png')}
              style={{
                width: 55,
                height: 55,
                marginHorizontal: '2%',
                right: '48%',
              }}
            />
          )}
        </Pressable>
        <Pressable>
          {playpause ? (
            <Image
              source={require('../../../assets/icons/crossInactiveIcon.png')}
              style={{width: 55, height: 55, marginHorizontal: '2%'}}
            />
          ) : (
            <Pressable
              onPress={() => {
                setShowModal(true), setShowDiscard(true);
              }}>
              <Image
                source={require('../../../assets/icons/crossActiveIcon.png')}
                style={{
                  width: 55,
                  height: 55,
                  marginHorizontal: '2%',
                  left: 4,
                }}
              />
            </Pressable>
          )}
        </Pressable>
        <Pressable>
          {playpause ? (
            <Image
              source={require('../../../assets/icons/tickInactiveIcon.png')}
              style={{
                width: 55,
                height: 55,
                marginHorizontal: '2%',
                left: '60%',
              }}
            />
          ) : (
            <Pressable
              onPress={() => {
                setShowDiscard(false), setShowModal(true);
              }}>
              <Image
                source={require('../../../assets/icons/tickActiveIcon.gif')}
                style={{
                  width: 63,
                  height: 63,
                  marginHorizontal: '2%',
                  left: '55%',
                }}
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
              : type == 'Clean'
              ? 'Upload clean items?'
              : type == 'Supply To'
              ? 'Supply scanned items to: ' + location + '?'
              : type == 'Edit'
              ? 'Do you want to associate scanned items?'
              : 'Received Scan Items'
          }
          onPressConfirm={() => {
            type == 'Supply To' && supplytolocation();
            console.log('confirm Pressed');
            if (showDiscard) {
              setShowModal(false), setTableTitle(['']), setTableData(['']);
            } else {
              setShowModal(false), setShowDone(true);
            }
          }}
        />
      </View>
    );
  };
  const renderTable = () => {
    return (
      <View style={styles.containerTable}>
        {tableData.length <= 0 ? (
          <ActivityIndicator
            style={{alignSelf: 'center', height: 300}}
            size="large"
            color="white"></ActivityIndicator>
        ) : (
          <ScrollView style={{height: '61%'}}>
            <Table>
              <Row
                data={tableHead}
                flexArr={[3, 3, 3]}
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
                  flexArr={[3, 3, 3]}
                  style={styles.row}
                  textStyle={styles.text2}
                />
              </TableWrapper>
            </Table>
          </ScrollView>
        )}
      </View>
    );
  };
  const renderScannedModel = () => {
    return (
      <View style={{height: '13%'}}>
        <View style={styles.containerViewScanned}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Montserrat-Light',
                color: GlobalColors.lightGrey,
              }}>
              SCANNED:
            </Text>
            <Text style={{fontFamily: 'Montserrat-Bold', color: 'white'}}>
              {' '}
              12 items{' '}
            </Text>
          </View>
        </View>
        <View style={{top: '240%', alignSelf: 'center'}}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              color: 'white',
              fontSize: 19,
            }}>
            {items}
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              color: 'white',
              fontSize: 19,
              textAlign: 'center',
            }}>
            {location}
          </Text>
        </View>
      </View>
    );
  };
  const navigation = useNavigation();
  const {type, location, items, location_id, supplyReport} = route.params;
  return (
    <View style={styles.mainContainer}>
      <CustomHeader />
      {showDone ? (
        <TouchableWithoutFeedback
          style={{flex: 1}}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}>
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
        </TouchableWithoutFeedback>
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
            <View>
              <Text style={styles.hidingH1}>
                {type == 'Clean'
                  ? 'Clean'
                  : type == 'Supply Location'
                  ? 'Supply To ' + location
                  : type == 'Soil'
                  ? 'Soil'
                  : type == 'Edit'
                  ? 'Add/Edit '
                  : type == 'Supply To'
                  ? 'Supply To'
                  : 'Wash Received'}
              </Text>
              {type == 'Supply To' ? (
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontFamily: 'Montserrat-Light',
                    fontSize: 23,
                  }}>
                  {location}
                </Text>
              ) : null}
            </View>
            <View style={{height: 20, width: 20}} />
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
            {type == 'Edit' ? renderScannedModel() : renderTable()}
            {renderModal()}
          </View>
        </View>
      )}
    </View>
  );
}

import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
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
} from 'react-native-table-component';
import GlobalColors from '../../utils/GlobalColors';

export default function AlertScreen() {
  const [tableHead, setTableHead] = useState(['Time', 'Alert ID', 'More Info']);
  const [tableTitle, setTableTitle] = useState(['1', '2']);
  const [tableData, setTableData] = useState([
    ['20/11/2022 12:17', '0x6506', 'There is no connection to the RFID reader'],
  ]);
  const renderTable = () => {
    return (
      <View style={styles.containerTable}>
        <Table
          borderStyle={{borderWidth: 1, borderColor: GlobalColors.lightGrey}}>
          <Row
            data={tableHead}
            flexArr={[2, 2, 2]}
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
              flexArr={[1, 1, 1]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
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
    </View>
  );
}

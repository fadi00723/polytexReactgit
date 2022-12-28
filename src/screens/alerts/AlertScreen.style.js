import {StyleSheet, Dimensions} from 'react-native';
import GlobalColors from '../../utils/GlobalColors';
import ScreenSize from '../../utils/ScreenSize';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.mainBlue,
    borderTopRightRadius: 180,
    borderTopLeftRadius: 180,
  },
  mainContainer: {
    backgroundColor: GlobalColors.darkBlue,
    justifyContent: 'center',
    flex: 1,
  },
  innerView: {
    backgroundColor: GlobalColors.mainBlue,
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  hidingH1: {
    fontSize: 20,
    color: GlobalColors.lightGrey,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntext: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    fontSize: 10,
  },
  dateText: {
    fontFamily: 'Montserrat-Light',
    color: GlobalColors.white,
    fontSize: 12,
    paddingLeft: '4%',
  },
  alertText: {
    fontFamily: 'Montserrat-Light',
    color: GlobalColors.white,
    fontSize: 12,
  },
  timeText: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    fontSize: 12,
  },
  mainModal: {
    backgroundColor: GlobalColors.darkBlue,
    width: ScreenSize.screenWidth * 0.9,
    height: ScreenSize.screenHeight * 0.08,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    top: 170,
  },
  hidingh2: {
    color: GlobalColors.lightGrey,
  },
  hidingh3: {
    color: GlobalColors.white,
    fontWeight: '400',
    lineHeight: 41,
    right: 25,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  transIcon: {
    width: 70,
    height: 63,
    marginBottom: '8%',
  },
  containerTable: {
    width: '80%',
    height: 50,
    paddingTop: 30,
    backgroundColor: GlobalColors.mainBlue,
  },
  head: {
    height: 40,
    backgroundColor: GlobalColors.darkBlue,
    borderRadius: 8,
  },
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    flex: 0.26,
    backgroundColor: GlobalColors.mainBlue,
  },
  row: {
    height: 100,
    borderBottomColor: GlobalColors.lightGrey,
    borderBottomWidth: 0.5,
    // backgroundColor: 'black',
  },
  text: {
    color: GlobalColors.lightGrey,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  },
  text2: {
    color: GlobalColors.white,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  text3: {
    color: GlobalColors.white,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    bottom: '5%',
  },
  modalView: {
    width: width * 0.9,
    height: height * 0.45,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: GlobalColors.mainBlue,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
  containerBtn: {
    backgroundColor: GlobalColors.orange,
    borderRadius: 16,
    width: ScreenSize.screenWidth * 0.75,
    height: ScreenSize.screenHeight * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%',
  },
  containerBtnCancel: {
    backgroundColor: GlobalColors.LightBlack,
    borderRadius: 16,
    width: ScreenSize.screenWidth * 0.75,
    height: ScreenSize.screenHeight * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%',
  },
  centeredview: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GlobalColors.LightBlack,
    justifyContent: 'center',
  },
  warningIcon: {
    width: 68,
    height: 68,
    marginVertical: '15%',
  },
});

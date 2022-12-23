import {StyleSheet} from 'react-native';
import GlobalColors from '../../utils/GlobalColors';
import ScreenSize from '../../utils/ScreenSize';
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
  mainHiding: {
    color: GlobalColors.lightGrey,
    fontSize: 23,
    fontFamily: 'Montserrat-Medium',
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
  hidingh4: {
    color: GlobalColors.lightGrey,
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    lineHeight: 41,
    paddingBottom: '10%',
  },
  someTxt: {
    color: GlobalColors.lightGrey,
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    lineHeight: 41,
    paddingBottom: '4%',
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
    backgroundColor: GlobalColors.mainBlue,
  },
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    flex: 0.26,
    backgroundColor: GlobalColors.mainBlue,
  },
  row: {
    height: 90,
    // backgroundColor: 'black',
  },
  text: {
    color: GlobalColors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewNew: {
    padding: '10%',
  },
  viewNewDeatil: {
    paddingTop: '10%',
    right: '5%',
  },
});

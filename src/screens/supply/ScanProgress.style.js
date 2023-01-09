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
    color: GlobalColors.lightGrey,
    fontSize: 23,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  centeredView: {
    alignItems: 'center',
  },
  mainModal: {
    backgroundColor: GlobalColors.LightBlack,
    width: ScreenSize.screenWidth * 0.85,
    height: ScreenSize.screenHeight * 0.1,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    top: '100%',
    padding: '5%',
  },
  modalView: {
    width: ScreenSize.screenWidth * 0.85,
    height: ScreenSize.screenHeight * 0.1,
    flexDirection: 'row',
    backgroundColor: GlobalColors.LightBlack,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    top: '25%',
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
  mapIcon: {
    width: 50,
    height: 73,
    marginBottom: '8%',
  },
  circleView: {
    width: 250,
    height: 250,
    backgroundColor: GlobalColors.darkOrange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 125,
    top: '30%',
  },

  containerView: {
    backgroundColor: GlobalColors.yellowish,
    borderRadius: 62,
    width: ScreenSize.screenWidth * 0.78,
    height: ScreenSize.screenHeight * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerViewScanned: {
    top: '120%',
    backgroundColor: GlobalColors.darkBlue,
    borderRadius: 62,
    width: ScreenSize.screenWidth * 0.78,
    height: ScreenSize.screenHeight * 0.09,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerViewScannedStopped: {
    backgroundColor: GlobalColors.lightGrey,
    borderRadius: 62,
    width: ScreenSize.screenWidth * 0.78,
    height: ScreenSize.screenHeight * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerViewStopped: {
    backgroundColor: GlobalColors.lightGrey,
    borderRadius: 62,
    width: ScreenSize.screenWidth * 0.78,
    height: ScreenSize.screenHeight * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtH1: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    color: GlobalColors.white,
  },
  appIcon: {
    width: 250,
    height: 70,
  },
  containerTable: {
    width: '80%',
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
    height: 28,
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
});

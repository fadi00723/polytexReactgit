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
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 26,
    lineHeight: 51.2,
    color: GlobalColors.lightGrey,
    textAlign: 'center',
    paddingVertical: 40,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
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
    fontFamily: 'Montserrat-Medium',
  },
  hidingh3: {
    color: GlobalColors.white,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
    lineHeight: 41,
    right: 25,
  },
});

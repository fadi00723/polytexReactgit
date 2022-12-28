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
  mainHiding: {
    color: GlobalColors.lightGrey,
    fontSize: 23,
    fontFamily: 'Montserrat-Medium',
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
    fontSize: 23,
    color: GlobalColors.white,
    fontFamily: 'Montserrat-SemiBold',
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
    top: '50%',
  },
  hidingh2: {
    color: GlobalColors.lightGrey,
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
  },
  hidingh3: {
    color: GlobalColors.white,
    lineHeight: 41,
    fontFamily: 'Montserrat-Bold',
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
    top: '10%',
  },
});

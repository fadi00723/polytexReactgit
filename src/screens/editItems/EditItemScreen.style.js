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
    textAlign: 'center',
    width: '60%',
    color: GlobalColors.lightGrey,
    fontFamily: 'Montserrat- Bold',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
  containerbtn: {
    backgroundColor: GlobalColors.orange,
    borderRadius: 16,
    width: ScreenSize.screenWidth * 0.35,
    height: ScreenSize.screenHeight * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%',
  },
  txtH1: {
    fontSize: 18,
    fontWeight: '600',
    color: GlobalColors.white,
    textAlign: 'center',
  },
});

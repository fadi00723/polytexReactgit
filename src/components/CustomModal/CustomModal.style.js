import {Dimensions, StyleSheet} from 'react-native';
import GlobalColors from '../../utils/GlobalColors';
import ScreenSize from '../../utils/ScreenSize';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  centeredview: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GlobalColors.LightBlack,
    justifyContent: 'center',
  },
  image: {
    height: height * 0.2,
    width: width * 0.38,
    alignSelf: 'center',
  },
  modalView: {
    width: width * 0.9,
    height: height * 0.6,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
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
  txtH1: {
    fontSize: 18,
    fontWeight: '600',
    color: GlobalColors.white,
  },
});

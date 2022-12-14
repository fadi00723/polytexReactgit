import {StyleSheet, Dimensions} from 'react-native';
import GlobalColors from '../../utils/GlobalColors';
import ScreenSize from '../../utils/ScreenSize';
export default StyleSheet.create({
  container: {
    backgroundColor: GlobalColors.orange,
    borderRadius: 16,
    width: ScreenSize.screenWidth * 0.9,
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
  appIcon: {
    width: 250,
    height: 70,
  },
});

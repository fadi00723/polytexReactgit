import {StyleSheet} from 'react-native';
import GlobalColors from '../../utils/GlobalColors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.mainBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIcon: {
    width: 250,
    height: 70,
  },
});

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
    width: '70%',
    height: '9.5%',
  },
});

import {StyleSheet} from 'react-native';
import GlobalColors from '../../utils/GlobalColors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.mainBlue,
    borderTopRightRadius: 180,
    borderTopLeftRadius: 180,
  },
  mainContainer: {
    backgroundColor: GlobalColors.darkBlue,
    flex: 1,
  },
  innerView: {
    backgroundColor: GlobalColors.mainBlue,
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});

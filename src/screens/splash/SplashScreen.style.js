import {Dimensions, StyleSheet} from 'react-native';
import GlobalColors from '../../utils/GlobalColors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.mainBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIcon: {
    width: width * 0.7,
    height: height * 0.1,
  },
});

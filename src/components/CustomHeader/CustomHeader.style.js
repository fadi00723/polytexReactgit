import {StyleSheet} from 'react-native';
import GlobalColors from '../../utils/GlobalColors';
export default StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '20%',
  },
  appIcon: {
    width: 125,
    height: 35.5,
    marginHorizontal: '10%',
  },
  settingIcon: {
    width: 30,
    height: 30,
    left: 23,
  },
  connectIcon: {
    width: 35,
    height: 25,
  },
  hidingh3: {
    color: GlobalColors.white,
    fontFamily: 'Montserrat-SemiBold',

    lineHeight: 41,
    right: 25,
  },
  synIcon: {
    width: 55,
    height: 55,
  },
});

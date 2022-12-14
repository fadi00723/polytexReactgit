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

  dropdown1RowStyle: {
    borderBottomColor: '#8798AD',
    width: '100%',
    alignSelf: 'center',
  },
  mainHiding: {
    color: GlobalColors.lightGrey,
    fontSize: 23,
    fontFamily: 'Montserrat-Medium',
  },
  dropdown1RowTxtStyle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
  },
  innerView: {
    backgroundColor: GlobalColors.mainBlue,
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
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
  btnText: {
    color: GlobalColors.LightBlack,
    fontSize: 25,
    fontWeight: 'bold',
  },
  GreenBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: GlobalColors.yellowish,
    justifyContent: 'center',
    alignItems: 'center',
    left: '30%',
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
  mainContainer: {
    backgroundColor: GlobalColors.darkBlue,
    height: '100%',
  },
  innerView: {
    backgroundColor: GlobalColors.mainBlue,
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  hidingH1: {
    fontSize: 20,
    color: GlobalColors.lightGrey,
  },
  hidingH5: {
    fontSize: 20,
    color: GlobalColors.white,
    fontFamily: 'Montserrat-Medium',
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '7%',
  },
  hidingH6: {
    fontSize: 20,
    color: GlobalColors.white,
    alignSelf: 'center',
    fontFamily: 'Montserrat-Medium',
  },

  hidingH7: {
    fontSize: 15,
    color: GlobalColors.white,
    alignSelf: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  newBtn: {
    width: ScreenSize.screenWidth * 0.29,
    height: ScreenSize.screenHeight * 0.065,
    borderRadius: 16,
    backgroundColor: GlobalColors.LightBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

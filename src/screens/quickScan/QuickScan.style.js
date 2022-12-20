import {Dimensions, StyleSheet} from 'react-native';
import GlobalColors from '../../utils/GlobalColors';
import ScreenSize from '../../utils/ScreenSize';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
    color: GlobalColors.white,
  },
  hidingH6: {
    fontSize: 17,
    color: GlobalColors.white,
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
    top: '45%',
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
    borderRadius: 500,
    top: '10%',
  },
  transIcon: {
    width: 62,
    height: 68,
    marginBottom: '8%',
  },
  warningIcon: {
    width: 68,
    height: 68,
    marginVertical: '15%',
  },
  centeredview: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GlobalColors.LightBlack,
    justifyContent: 'center',
  },
  errorView: {
    width: '90%',
    height: '25%',
    backgroundColor: GlobalColors.red,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
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
  hidingH7: {
    textAlign: 'center',
    width: '70%',
    opacity: 0.75,
    color: 'white',
    fontSize: 20,
    paddingTop: '2%',
  },
});

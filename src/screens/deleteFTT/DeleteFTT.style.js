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
    color: GlobalColors.lightGrey,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20%',
  },
  mainHiding: {
    color: GlobalColors.lightGrey,
    fontSize: 23,
    fontFamily: 'Montserrat-Medium',
    width: '70%',
    textAlign: 'center',
  },
  centeredviewModal: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: GlobalColors.LightBlack,
    paddingTop: '30%',
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
  containerTable: {
    width: '80%',
    height: 50,
    paddingTop: 30,
    backgroundColor: GlobalColors.mainBlue,
  },
  modalView: {
    width: width * 0.9,
    height: height * 0.35,
    top: '5%',
    padding: '12%',
    backgroundColor: GlobalColors.mainBlue,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
  head: {
    height: 40,
    backgroundColor: GlobalColors.mainBlue,
  },
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    flex: 0.26,
    backgroundColor: GlobalColors.mainBlue,
  },
  row: {
    height: 90,
    // backgroundColor: 'black',
  },
  text: {
    color: GlobalColors.white,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  textInput: {
    height: 60,
    width: '90%',
    borderRadius: 100,
    backgroundColor: GlobalColors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxView: {
    backgroundColor: GlobalColors.LightBlack,
    height: 65,
    width: 57,
    borderRadius: 24,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  boxViewEmpty: {
    height: 65,
    width: 57,
    borderRadius: 24,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  boxViewBack: {
    backgroundColor: '#002D56',
    height: 65,
    width: 80,
    borderRadius: 24,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  boxViewTick: {
    backgroundColor: '#00CC00',
    height: 65,
    width: 80,
    borderRadius: 24,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 23,
  },
  boxTextImg: {
    width: 10,
    height: 10,
  },
});

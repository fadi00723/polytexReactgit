import {View, Text} from 'react-native';
import React from 'react';
import SplashScreen from '../screens/splash/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import TransactionsScreen from '../screens/transactions/TransactionsScreen';
import LocationScreen from '../screens/locations/LocationsScreen';
import SupplyLocation from '../screens/supply/SupplyLocation';
import CleanScreen from '../screens/clean/CleanScreen';
import ScanProgress from '../screens/supply/ScanProgress';
import SoilScreen from '../screens/soil/SoilScreen';
import EditItems from '../screens/editItems/EditItemScreen';
import SettingScreen from '../screens/setting/SettingScreen';
import RFIDSettingScreen from '../screens/RFID/RFIDSettingScreen';
import AlertScreen from '../screens/alerts/AlertScreen';
import DeviceDetailScreen from '../screens/device/DeviceDetailScreen';
import AdvanceSettings from '../screens/advanceSetting/AdvanceSettings';
import AdvanceSettingsLast from '../screens/advanceSettingLast/AdvanceSettingsLast';

const Stack = createNativeStackNavigator();

export default function StackNavigations() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="TransactionsScreen" component={TransactionsScreen} />
      <Stack.Screen name="LocationScreen" component={LocationScreen} />
      <Stack.Screen name="SupplyLocation" component={SupplyLocation} />
      <Stack.Screen name="CleanScreen" component={CleanScreen} />
      <Stack.Screen name="ScanProgress" component={ScanProgress} />
      <Stack.Screen name="SoilScreen" component={SoilScreen} />
      <Stack.Screen name="EditItems" component={EditItems} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="RFIDSettingScreen" component={RFIDSettingScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="DeviceDetailScreen" component={DeviceDetailScreen} />
      <Stack.Screen name="AdvanceSettings" component={AdvanceSettings} />
      <Stack.Screen
        name="AdvanceSettingsLast"
        component={AdvanceSettingsLast}
      />
    </Stack.Navigator>
  );
}

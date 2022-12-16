import {View, Text} from 'react-native';
import React from 'react';
import SplashScreen from '../screens/splash/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import TransactionsScreen from '../screens/transactions/TransactionsScreen';
import LocationScreen from '../screens/locations/LocationsScreen';
import SupplyLocation from '../screens/supply/SupplyLocation';
import CleanScreen from '../screens/clean/CleanScreen';

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
    </Stack.Navigator>
  );
}

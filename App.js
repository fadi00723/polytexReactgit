import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigations from './src/navigations/StackNavigations';
import GlobalColors from './src/utils/GlobalColors';
import SystemNavigationBar from 'react-native-system-navigation-bar';

export default function App() {
  SystemNavigationBar.immersive();
  return (
    <NavigationContainer>
      <StatusBar hidden backgroundColor={GlobalColors.darkBlue} />
      <StackNavigations />
    </NavigationContainer>
  );
}

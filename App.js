import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigations from './src/navigations/StackNavigations';
import GlobalColors from './src/utils/GlobalColors';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden backgroundColor={GlobalColors.darkBlue} />
      <StackNavigations />
    </NavigationContainer>
  );
}

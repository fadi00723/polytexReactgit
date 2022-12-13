import {View, Text} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import styles from './HomeScreen.style';
import GlobalColors from '../../utils/GlobalColors';

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <CustomHeader />
      <View style={styles.innerView}>
        <Text>Full Cycle Solution</Text>
      </View>
    </View>
  );
}

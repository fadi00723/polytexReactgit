import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './CustomButton.style';

export default function CustomButton({label, onPress}) {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.txtH1}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

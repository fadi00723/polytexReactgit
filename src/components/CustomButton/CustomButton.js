import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './CustomButton.style';

export default function CustomButton({label, onPress, imgSrc, styleImg}) {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.txtH1}>{label}</Text>
          <Image source={imgSrc} style={styleImg} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

import React from 'react';
import { View, Text, Image } from 'react-native';
import logo from '../../../assets/logocps.png'

import { styles } from './LogoStyles';

export function Logo() {
  return (
    <View>
   <Text style={styles.title}> MAMMA MIA!</Text>

<Image
 source={logo}
style={{
  resizeMode:'contain',
  height:180,
  marginLeft:'auto',
  marginRight: 'auto',
}}
 />

    </View>
  );
}

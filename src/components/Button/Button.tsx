import React, {useState} from 'react';
import {  Text, Pressable } from 'react-native';

import { styles } from './ButtonStyles';

import { ClaTextInput } from '../TextInput/ClaTextInput';

import * as Clipboard from 'expo-clipboard';







export function Button() {
  const[pass, setPass] = useState('')

 

function handleCopyButton(){
 Clipboard.setStringAsync(pass)

}

  return (
    <>
     <ClaTextInput pass={pass} setPass={setPass}/>


<Pressable
onPress={handleCopyButton}
style={styles.button}>
<Text style={styles.text}>🌼 Copiar</Text>
</Pressable>

    
    </>
  );
}
import React, {useState} from 'react';
import {  Text, Pressable } from 'react-native';

import { styles } from './ButtonStyles';

import {TextInput } from '../../components/TextInput/TextInput';
import generatePass from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard';



export function Button() {
  const[pass, setPass] = useState('')

  function handleGenerateButton(){
    let generateToken =generatePass()
    setPass(generateToken)
  }

function handleCopyButton(){

  Clipboard.setStringAsync(pass)
}

  return (
    <>
     <TextInput pass={pass}/>

<Pressable
onPress={handleGenerateButton}
style={styles.button}
>
<Text  style={styles.text}>🌷 Gerar</Text>
</Pressable>

<Pressable
onPress={handleCopyButton}
style={styles.button}>
<Text style={styles.text}>🌼 Copiar</Text>
</Pressable>

    
    </>
  );
}
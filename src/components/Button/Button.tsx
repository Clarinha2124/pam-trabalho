import React, {useState} from 'react';
import {  Text, Pressable } from 'react-native';

import { styles } from './ButtonStyles';

import { CpsTextInput } from '../TextInput/TextInput';
import generatePass from '../../services/passwordService';





export function CpsButton() {
  const[pass, setPass] = useState('')

  function handleGenerateButton(){
    let generateToken =generatePass()
    setPass(generateToken)
  }

function handleCopyButton(){

 
}

  return (
    <>
     <CpsTextInput pass={pass}/>

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
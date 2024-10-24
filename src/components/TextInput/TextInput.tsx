import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './TextInputStyles';



interface CpsTextInputProps{
  pass:string
}



export function CpsTextInput( props: CpsTextInputProps) {
  return (

<TextInput style={styles.Inputer}
placeholder='Pass'

value={props.pass}


/>

 
  );
}
import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './CpsTextInputStyles';



interface CpsTextInputProps{
  pass:string
}



export function CpsTextInput( props: CpsTextInputProps) {
  return (

<CpsTextInput style={styles.Inputer}
placeholder='Pass'

value={props.pass}


/>

 
  );
}
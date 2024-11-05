import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './TextInputStyles';


interface TextInputProps{
    pass:string
}


export function ClaTextInput (props: TextInputProps){
return(
 
    <TextInput style={styles.Inputer}
    placeholder='Pass'

value={props.pass}

/>

);   
}
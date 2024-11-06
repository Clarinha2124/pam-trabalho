import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './ClaTextInputStyles';


interface TextInputProps{
    pass:string;
    setPass:(value:String)=> void;
}


export function ClaTextInput({pass, setPass}: TextInputProps){
return(
 
    <TextInput style={styles.Inputer}
    placeholder='Pass'
    value={pass}
    onChangeText={setPass}

/>

);   
}
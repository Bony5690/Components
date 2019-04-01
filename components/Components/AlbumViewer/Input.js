import React from 'react';
import { View, Text, TextInput  } from 'react-native';

const Input = (props) => {
    return (
        <View style={{  marginHorizontal: 20, }}>
        <TextInput 
        placeholder={props.placeholder}
        multiline={true}
        style={props.inputStyle}
        placeholderTextColor="#ffffff"
        value={props.value} />
        </View>
    )
}


export default Input;
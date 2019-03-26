import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


const ActionButton = (props) => {
    return(
        <View style={{ justifyContent: 'flex-end', marginBottom: 20, marginLeft: 20,}}>
        <TouchableOpacity onPress={props.onPress}>
        <Image 
            style={props.style}
            source={props.source}/>
        </TouchableOpacity> 
        </View>
    )
  
}

export default ActionButton;

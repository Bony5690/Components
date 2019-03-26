import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


const ShareButton = (props) => {
    return(
        <View style={{ alignItems: 'flex-end', marginTop: 30, marginRight: 35,}}>
        <TouchableOpacity onPress={props.onPress}>
        <Image 
            style={props.style}
            source={props.source}/>
        </TouchableOpacity> 
        </View>
    )
  
}

export default ShareButton;
import React from 'react';
import { View,  TextInput, Image, Text, Button } from 'react-native';

const Input = (props) => {
    return (
        <View style={{ justifyContent: 'center'}}>
             <Text style={props.titleStyle}>Property</Text>
            <View style={{ flexDirection: 'row', }}>
                <Image
                    style={props.imageStyle}
                    source={props.source} />
                    <TextInput
                    style={props.style}
                    onChange={props.onChange}
                    value={props.value}
                    placeholderTextColor={props.placeholderTextColor}
                    placeholder={props.placeholder} />
                    <View style={{textAlign:'center'}}>
                    </View>
            </View>

        </View>

    )

}

export default Input;


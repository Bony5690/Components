import React from 'react';
import { View,  TextInput, Image } from 'react-native';

const Input = (props) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20 }}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={props.imageStyle}
                    source={props.source} />
                <TextInput
                        value={props.value}
                    placeholderTextColor={props.placeholderTextColor}
                    placeholder={props.placeholder} />
            </View>
        </View>

    )

}

export default Input;


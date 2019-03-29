import React, { Component } from 'react';
import { View, Text, TextInput, } from 'react-native';
import { tsPropertySignature } from '@babel/types';
import PropTypes from 'prop-types'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

const NumberInput = (props) => {
    return (
        <View>
            <View style={props.wrapperStyle}>
                <TextInput
                    placeholder={props.placeholder}
                    editable={true}
                    clearTextOnFocus={true}
                    style={props.inputStyle}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    onChange={props.onChange}
                    keyboardType='number-pad'
                />
            </View>

        </View>
    )
}


export default NumberInput;





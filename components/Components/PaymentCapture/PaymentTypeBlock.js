import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const PaymentTextBlock = (props) => {
    return (
        <View>
            <View style={{ backgroundColor: 'white', height: 36 }}>
            <TouchableOpacity onPress={props.onPress}>
                <View 
                style={props.topBorderStyle}
                >
                <View>
                    
                </View>
                <Text style={props.placeholderTextStyle}> {props.paymentType}</Text>
                </View>
             
                <View> 
                    <View 
                    style={props.bottomBorderStyle}
                  />
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )

}


export default PaymentTextBlock;

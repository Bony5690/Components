import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const MoneyTab = (props) => {
    return (
        <View>
            <View style={{ width: 65, height: 35, backgroundColor: '#6DA3D3', borderBottomRightRadius: 30, borderTopRightRadius: 30 }}>
                <Text style={{ padding: 7, fontSize: 18, color: 'white', fontWeight: '500' }}>${props.requestAmount}</Text>
            </View>
        </View>
    )

}


export default MoneyTab;

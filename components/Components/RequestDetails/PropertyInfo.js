import React from 'react';
import { View, Text, Image } from 'react-native';

const PropertyInfo = (props) => {
    return (
        <View style={{ width: '100%', marginTop: 0 }}>
            <Text style={{ paddingLeft: 10, fontSize: 20, color: '#8E8E93', paddingBottom: 5 }}>Property Info</Text>
            <View style={{
                borderBottomColor: '#8E8E93',
                borderTopColor: '#8E8E93',
                borderTopWidth: 0.2,
                borderBottomWidth: 0.2,
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'white'
            }}>
                <View>
                    <Text> {props.address}</Text>
                    <Text> {props.cityStateZip}</Text>
                </View>
                <Image source={require('../ActiveAssists/Assets/showing-dark.png')} />
            </View>
        </View>
    )
}

export default PropertyInfo;

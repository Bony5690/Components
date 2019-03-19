import React from 'react';
import { View, Text, Image } from 'react-native';


const TimeBlockDetails = (props) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                style={{ width: 45, height: 40 }}
                source={require('../ActiveAssists/Assets/showing-dark.png')} />
            <Text style={{ fontSize: 20, color: '#8E8E93', marginTop: 10 }}>{props.requestType}</Text>
            <Text style={{ fontSize: 12, marginTop: 10 }}>{props.dayOfWeek}</Text>
            <Text style={{ fontSize: 18, color: '#8E8E93' }}>{props.date}</Text>
            <Text style={{ fontSize: 11, color: '#8E8E93' }}> {props.time}</Text>
        </View>
    )

}


export default TimeBlockDetails;

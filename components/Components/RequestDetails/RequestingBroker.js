import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RequestingBroker = (props) => {

    return (
        <View>
            <Text style={{fontSize: 20, color: '#8E8E93', padding: 10}}>Requesting Broker</Text>
            <View style={styles.wrapperStyle}>
                <Text>hello</Text>
            </View>
        </View>
    )

}


export default RequestingBroker;

const styles = StyleSheet.create({
    wrapperStyle: {
        width: 300, height: 100, backgroundColor: 'white', padding: 5, borderRadius: 6, shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 0,
        elevation: 1,
        
    },
});
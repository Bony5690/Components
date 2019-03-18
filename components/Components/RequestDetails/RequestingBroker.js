import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import StarRating from '../RequestDetails/star-rating';

const RequestingBroker = (props) => {

    return (
        <View >
            <Text style={{ fontSize: 20, color: '#8E8E93', paddingTop: 15, paddingBottom: 5, paddingHorizontal: 14 }}>Requesting Broker</Text>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.wrapperStyle}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ margin: 10 }}>
                            <Image
                                style={{width: 30, height: 30, borderRadius: 10}}
                                source={require('../ActiveAssists/Assets/broker.jpg')} />
                        </View>
                        <View style={{marginTop: 5}}>
                            <Text>Marshall Beck</Text>
                            <Text>Dream Town Reality</Text>
                            <StarRating value={4}/>
                        </View>

                    </View>
                </View>
            </View>

        </View>
    )

}


export default RequestingBroker;

const styles = StyleSheet.create({
    wrapperStyle: {
        width: 350, height: 85, backgroundColor: 'white', padding: 5, borderRadius: 6, shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 0,
        elevation: 1,


    },
});
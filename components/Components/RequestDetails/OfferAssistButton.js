import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const OfferAssist = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.wrapperStyle}>
                    <View>
                        <Image
                            style={{ width: 20, height: 20, margin: 5 }}
                            source={require('../ActiveAssists/Assets/greenthumb.jpg')} />
                    </View>

                    <View>
                        <Text style={{ fontSize: 20 }}>Offer To Assist</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default OfferAssist;

const styles = StyleSheet.create({
    wrapperStyle: {
        width: 410, height: 100, backgroundColor: 'white', shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 0,
        elevation: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

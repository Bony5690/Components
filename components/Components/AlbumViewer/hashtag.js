import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';

class HashTag extends React.Component {

    render() {
        const { onClose, text, keyProp } = this.props;
            return (
                <View style={[this.props.style, styles.wrap]}>
                    <Text style={styles.buttonText} key={keyProp}>{`#${text}`}</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Image style={styles.buttonX} source={require('./Assets/icon-circle-x.png')} />
                    </TouchableOpacity>
                </View>
            )
    }
}
const styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#A9A9A9',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5, 
    },
    buttonText: {
        color: 'white',
        fontSize: 13,
        paddingRight: 20, 
        marginLeft: 10,    
    },
    buttonX: {
        alignSelf: 'center',
        margin: 'auto',
        height: 22,
        width: 22,
    },

});

export default  HashTag;
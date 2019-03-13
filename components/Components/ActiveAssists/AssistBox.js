import React from 'react';
import { Text, Image, View, StyleSheet, FlatList } from 'react-native';

const AssistBox = (props) => {
  return (
    <View style={styles.wrapper}>
    <View style={{ flexDirection: 'row', }}>
        <Image
            style={styles.imageStyle}
            source={require('./Assets/showing-dark.png')} />
        <Text style={styles.assistTypeText}>Showing</Text>
    </View>
    <View>
        <Text style={styles.addressText}>{props.address}</Text>
    </View>
</View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 250,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 6,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        padding: 5,
        shadowRadius: 0,
         left: 22,
         top: 20
    },
    imageStyle: {
        width: 14, height: 14, marginLeft: 5
    },
    assistTypeText:{
        fontSize: 12, paddingLeft: 5
    },
    addressText: {
      fontSize: 14, padding: 5, 
    }
})

export default AssistBox;




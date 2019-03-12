import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';


const AssistTime = (props) => {
    return(
        <View style={{marginHorizontal: 10, marginTop: 30}}>
            <Text>{props.today}</Text>
            <Text>{props.time}</Text>
        </View>
    )
  
}


const styles = StyleSheet.create({
   wrapper: {
        width: 250,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 6, 
        shadowColor: '#000',
        marginHorizontal: 10,
        marginVertical: 60,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 0,
        // elevation: 1
   } 
})


export default AssistTime;

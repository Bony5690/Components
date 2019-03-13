import React from 'react';
import { Text,  View, StyleSheet } from 'react-native';


const AssistTime = (props) => {
    return(
        <View style={styles.wrapperStyles}>
            <Text style={styles.todayStyle}>{props.today}</Text>
            <Text style={styles.timeStyle}>{props.time}</Text>
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
   } ,
   todayStyle: {
       color: '#8E8E93',
       fontSize: 11
   },
   timeStyle: {
       color: '#8E8E93',
       fontSize: 11
   },
   wrapperStyles: {
    marginHorizontal: 10, marginTop: 35
   }
})


export default AssistTime;

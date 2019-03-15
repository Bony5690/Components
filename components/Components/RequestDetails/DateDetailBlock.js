import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MoneyTab from './MoneyTab';
import TimeBlockDetails from './TimeBlockDetails';



const TimeDetails = (props) => {
    return(
        <View>
            <View style={{flexDirection: 'row'}}>
                <MoneyTab requestAmount={props.requestAmount}/>
                <View style={{left: 80}}>
                <TimeBlockDetails/>
                </View>
                
        </View>
        </View>
        
    )
  
}

//marginTop: 10, fontSize: 18, paddingRight: 20
export default TimeDetails;

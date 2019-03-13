import React  from 'react';
import {  View, StyleSheet,  } from 'react-native';
import TimeLine from '../TimeLine';
import AssistTime from './AssistTime';
import AssistBox from './AssistBox';

const ActiveAssist = (props) => {
    return(
        <View>
            <View style={{flexDirection: 'row',  }}>
                <AssistTime 
                time={props.time}
                today={props.today}/>
                <TimeLine />
                <AssistBox address={props.address}/>
            </View>
        </View>
    )
}


export default ActiveAssist;

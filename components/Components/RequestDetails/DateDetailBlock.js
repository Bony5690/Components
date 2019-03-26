import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MoneyTab from './MoneyTab';
import TimeBlockDetails from './TimeBlockDetails';



const TimeDetails = (props) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', marginTop: 60, }}>
                <MoneyTab requestAmount={props.requestAmount} />
                <View style={{ left: 80 }}>
                    <TimeBlockDetails 
                    requestType={props.requestType}
                    time={props.time}
                    date={props.date}
                    dayOfWeek={props.dayOfWeek} />
                </View>

            </View>
        </View>

    )

}

export default TimeDetails;

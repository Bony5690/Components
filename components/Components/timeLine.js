import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';


const TimeLine = (props) => {
  return (
    <View >

      <View style={styles.timeline}>
        <View style={styles.line}>
          <View style={styles.topLine} />
         
        </View>
        <View style={styles.dot} />
      </View>

    </View>
  )

}


export default TimeLine;


const styles = StyleSheet.create({
 
  timeline: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 40,
    justifyContent: 'center', // center the dot
    alignItems: 'center',
  },
  line: {
    top: 45,
    left: 0,
    width: 2,
    height: 70,
    bottom: 0,
  },
  topLine: {
    flex: 1,
    width: 2,
    backgroundColor: '#6DA3D3',
  },
  dot: {
    width: 7,
    height: 7,
    top: -5,
    borderRadius: 8,
    backgroundColor: '#6DA3D3',
  },
  bottomLine: {
      flex: 1,
      width: 2,
      backgroundColor: 'black',
    },
});
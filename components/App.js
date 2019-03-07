import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import DateTime from './Components/DatePicker';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <DateTime/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
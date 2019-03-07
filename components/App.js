import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import DateTime from './Components/DatePicker';
import Input from './Components/Input/Input';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Input
         imageStyle={{width: 20, height: 20}}
         source={require('./Components/Input/Assets/search.png')}
        value='Search for a property'
         placeholderTextColor="#FFFFFF"
         />
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
  }
});

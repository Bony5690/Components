import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import DateTime from './Components/DatePicker';
import Input from './Components/Input/Input';

export default class App extends Component {
    constructor(){
      super()
      this.state = {
         value: 'Search for a property'
      }
    }

    inputHandler = (e) => {
      this.setState({value: e.target.value})
    }

  render() {
    return (
      <View style={styles.container}>
      <View style={{marginTop: 50, marginBottom: 20, marginHorizontal: 20}}>
      <Input
         titleStyle={{color: '#8E8E93', marginBottom: 10, paddingLeft: 5, fontSize: 20, letterSpacing: 0.38, lineHeight: 24}}
         style={{paddingLeft: 5, fontSize: 17, color: '#6DA3D3' }}
         onChange={(value) => this.inputHandler(value)}
         imageStyle={{width: 18, height: 18,}}
         source={require('./Components/Input/Assets/search.png')}
           value={this.state.value}
         placeholderTextColor="#FFFFFF"
         />
      </View>
        
         <DateTime/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  }
});

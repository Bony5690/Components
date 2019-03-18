import React, { Component } from 'react';
import { View, } from 'react-native';
import Star from './star';

export default class StarRating extends Component {
  render() {
  	const value = this.props.value;
    let starlist = [];
    for (let i = 0; i < 5; i++) {
      starlist.push(<Star value={Math.min(Math.max(value-i,0),1)} key={i}/>);
    }
    return (
      <View style={[{ height: 25, width: 125, flexDirection: 'row', backgroundColor: '#ddd', }, this.props.style]}>
        {starlist}
      </View>
    );
  }
}
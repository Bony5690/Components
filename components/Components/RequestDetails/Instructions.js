import React from 'react';
import { View, Text } from 'react-native';

const Instructions = (props) => {
  return (
      <View>
          <Text style={{ fontSize: 20, color: '#8E8E93', paddingTop: 15, paddingBottom: 5, paddingHorizontal: 14}}>Instructions</Text>
          <Text style={{fontSize: 18, paddingHorizontal: 14 }}>{props.Instructions}</Text>
      </View>
  )
}

export default Instructions;

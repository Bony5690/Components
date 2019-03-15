import React from 'react';
import { View, Text, Image  } from 'react-native';

const PropertyInfo = (props) => {
  return(
      <View style={{width: '100%', marginTop: 0}}>
          <Text style={{paddingLeft: 10, fontSize: 20, color: '#8E8E93', paddingBottom: 5}}>Property Info</Text>
          <View style={{borderBottomColor: 'gray', 
          borderTopColor: 'gray', 
          borderTopWidth: 1, 
          borderBottomWidth: 1, 
          padding: 10, 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          backgroundColor: 'white' }}>
          <View>
          <Text>180 N. Jefferson St.</Text>
              <Text>Chicago, IL 60654 </Text>
          </View>
              <Image source={require('../ActiveAssists/Assets/showing-dark.png')}/>
          </View>
      </View>
  )
}

export default PropertyInfo;

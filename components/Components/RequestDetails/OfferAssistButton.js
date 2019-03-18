import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const OfferAssist = (props) => {
  return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
          <TouchableOpacity>
          <View style={styles.wrapperStyle}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
          <Image 
          style={{width: 40, height: 40}}
          source={require('../ActiveAssists/Assets/greenthumb.jpg')} />
          </View>
          <View>
          <Text style={{fontSize: 25}}>Offer To Assist</Text>
          </View>
          </View>
          </View>
          </TouchableOpacity>
      </View>
  )
}

export default OfferAssist;

const styles = StyleSheet.create({
    wrapperStyle: {
        width: 450, height: 100, backgroundColor: 'white', padding: 5, borderRadius: 6, shadowColor: '#000',
        alignItems: 'center',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 0,
        elevation: 1,


    },
});

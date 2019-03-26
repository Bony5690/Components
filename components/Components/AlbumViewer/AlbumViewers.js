import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet, } from 'react-native';
import ActionButton from './ActionButton';
import ShareButton from './ShareButton';
import Swiper from 'react-native-swiper';

const AlbumViewer = (props) => {

  return (
    <View>
      <ImageBackground source={require('../AlbumViewer/input-bg-orange.jpg')} style={{ width: '100%', height: '100%', }}>
        <ShareButton
        onPress={props.shareButton}
          style={{ width: 50, height: 50 }}
          source={require('./Assets/Share-Image.png')} />
        <Swiper 
        activeDotColor='#000000'
        style={styles.wrapper} showsButtons={false}>
          <View style={styles.slide1}>
          <Image 
          style={{width: 350, height: 350}}
          source={require('./Assets/album-pic.jpg')}/>
          </View>
          <View style={styles.slide2}>
          <Image 
          style={{width: 350, height: 350}}
          source={require('./Assets/album-pic.jpg')}/>
          </View>
          <View style={styles.slide3}>
          <Image
          style={{width: 350, height: 350}}
           source={require('./Assets/album-pic.jpg')}/>
          </View>
        </Swiper>
        <ActionButton
          onPress={props.onPress}
          style={{ width: 35, height: 35 }}
          source={require('./Assets/action-button.png')} />
      </ImageBackground>


    </View>
  )

}


export default AlbumViewer;

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

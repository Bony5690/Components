import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet, } from 'react-native';
import ActionButton from './ActionButton';
import ShareButton from './ShareButton';
import Share, { ShareSheet, Button } from 'react-native-share'
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'
import Swiper from 'react-native-swiper';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Input from './Input'
import SlidePic from './Assets/album-pic1.jpg'
import input from './Input'
import HashTag from './hashtag'
import HashTagList from './hashTagList'
import BluePic from './Assets/input-bg-blue.jpg'
import GreenPic from './Assets/input-bg-green.jpg'
import OrangePic from '../AlbumViewer/input-bg-orange.jpg'

class AlbumViewer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tags: [{ id: 1, name: 'nature' }, { id: 2, name: 'rain' }],
      activeSlide: 0,
      backgroundColor: [OrangePic, BluePic, GreenPic],

      items: [{
        backgroundImage: OrangePic,
        image: SlidePic,
        tags: [{ text: 'rain' }, { text: 'water' }, { text: 'snow' }]
      },
      {
        backgroundImage: BluePic,
        image: SlidePic,
        tags: [{ text: 'rain' }, { text: 'water' }]
      },
      {
        backgroundImage: GreenPic,
        image: SlidePic,
        tags: [{ text: 'rain' }]
      },
      ]

    }
  }

  get pagination() {
    const { items, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={items.length}
        containerStyle={{ top: -220 }}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: -8,

        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
      />
    );
  }



  moreAction(index) {
    switch (index) {
      case 2:
        setTimeout(() => this.onAlert())
        break;
      case 1:
        setTimeout(() => alert('this works: case1'))

        break;

    }
  }


  showActionSheet = () => {
    this.ActionSheet.show()
  }
  _renderItem({ item, index }) {


   




    let shareOptions = {
      title: "React Native",
      message: "Hola mundo",
      url: "http://facebook.github.io/react-native/",
      subject: "Share Link" //  for email
    };
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%', }}
        source={item.backgroundImage}>
        <ShareButton
          onPress={() => Share.open(shareOptions)}

          style={{ width: 50, height: 50, marginTop: 20 }}
          source={require('./Assets/Share-Image.png')} />


        <View style={{ marginTop: 45 }}>

          <Image
            source={item.image} />
          <Text style={{ marginHorizontal: 20, color: 'white', fontSize: 24, fontWeight: '600', marginTop: 10 }}>Family always makes me energized</Text>
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            {
              item.tags.map((tag, index) => (

                <HashTag
                  key={index}
                  style={{ backgroundColor: '#ffffff', margin: 5 }}
                  buttonStyle={{ color: '#000000' }}
                  text={tag.text} />
              ))
            }

          </View>

        </View>
        {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 40 }}>
          <ActionButton
           actionButton={() => alert('test')}
            style={{ width: 35, height: 35, }}
            source={require('./Assets/action-button.png')} />

        </View> */}

      </ImageBackground>



    );

  }




  render() {
    const { items } = this.state
    const itemWidth = 400
    const sliderWidth = 400
    return (
      <View>

        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={items}
          layout={'default'}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          firstItem={0}
          slideStyle={{ height: '100%', }}
          activeDotIndex={0}
          dotColor={'black'}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}

        />

        {this.pagination}
        <View>

        <ActionButton
          onPress={this.props.onPress}
            style={{ width: 35, height: 35, top: -275 }}
            source={require('./Assets/action-button.png')} />

         
        </View>
      </View>
    )
  }
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
  },
  actionSheetRow: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', height: 60, },
  actionSheetRowImage: { marginLeft: 40, maxHeight: 30, maxWidth: 30, },
  actionSheetRowText: { marginLeft: 32, marginTop: 5, fontSize: 18 },
  button: { alignSelf: 'center', borderRadius: 8, borderWidth: 1, borderColor: 'white', },
  buttonText: { paddingTop: 8, paddingBottom: 8, paddingLeft: 12, paddingRight: 12, color: 'white', fontSize: 18, },
})
// const options = [
//   'Cancel',
//   <View style={styles.actionSheetRow}>
//     <Text style={{ color: 'black', fontWeight: '600' }}>Delete Entry</Text>
//   </View>,
//   <View style={styles.actionSheetRow}>
//     <Text>Edit Entry</Text>
//   </View>,

// ];
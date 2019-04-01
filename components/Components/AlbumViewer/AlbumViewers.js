import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet, } from 'react-native';
import ActionButton from './ActionButton';
import ShareButton from './ShareButton';
import Swiper from 'react-native-swiper';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Input from './Input'
import SlidePic from './Assets/album-pic1.jpg'
import input from './Input'
import HashTag from './hashtag'

class AlbumViewer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tags: [{ id: 1, name: 'nature' }, { id: 2, name: 'rain' }],
      activeSlide: 0,

      items: [{
        image: SlidePic,
      },
      {
        image: SlidePic,
      },
      {
        image: SlidePic,
      },
      ]

    }
  }

  _renderItem({ item, index }) {
    return (
      <View >
        <Image
          source={item.image} />
      </View>


    );
  }


  get pagination() {
    const { items, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={items.length}
        containerStyle={{ flex: 1, marginRight: 70 }}
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


  render() {
    const { items, tags } = this.state
    const itemWidth = 375
    const sliderWidth = 375
    return (
      <View>
        <ImageBackground
          style={{ padding: 50 }}
          source={require('../AlbumViewer/input-bg-orange.jpg')} style={{ width: '100%', height: '100%', }}>
          <ShareButton
            onPress={this.props.shareButton}
            style={{ width: 50, height: 50 }}
            source={require('./Assets/Share-Image.png')} />

          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={items}
            layout={'default'}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            firstItem={0}
            slideStyle={{ justifyContent: 'center' }}
            activeDotIndex={0}
            dotColor={'black'}
            onSnapToItem={(index) => this.setState({ activeSlide: index })}
      
          />

          <View style={{ flex: 1, justifyContent: 'flex-start'}}>
            <Input
              inputStyle={{ color: 'white', fontSize: 24, fontWeight: '600', }}
              value='Family always makes me energized'
            />

            <View style={{ flexDirection: 'row', margin: 10 }}>
              {tags.map((tag, index) => (
                <HashTag
                  style={{
                    margin: 3, backgroundColor: '#FFFFFF'
                  }}
                  text={tag.name} />
              ))}
            </View>
          </View>


          <View style={{ flexDirection: 'row' }}>
            <ActionButton
              onPress={this.props.onPress}
              style={{ width: 35, height: 35, }}
              source={require('./Assets/action-button.png')} />
            {this.pagination}
          </View>

        </ImageBackground>


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
  }
})

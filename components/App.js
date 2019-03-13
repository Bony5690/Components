import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
// import AssistBlock from './Components/AssistBlock/ActiveAssist';
// import TimeLine from './Components/TimeLine';
import ActiveAssist from './Components/ActiveAssists/ActiveAssist';



export default class App extends Component {
  constructor() {
    super()
    this.state = {
      value: 'Search for a property',
      data: [
        {
          id: 1,
          today: 'Wednesday',
          time: '1:00 P.M.',
          address: '169 W. Hurons'
        },
        {
          id: 2,
          today: 'Wednesday',
          time: '1:00 P.M.',
          address: '169 W. Huron St. '
        },
        {
          id: 3,
          today: 'Wednesday',
          time: '1:00',
          address: '169 W. Huron St. '
        },
        {
          id: 4,
          today: 'Wednesday',
          time: '1:00 P.M.',
          address: '169 W. Huron St. '
        },
        {
          id: 5,
          today: 'Wednesday',
          time: '1:00 P.M.',
          address: '169 W. Huron St. '
        },
        {
          id: 6,
          today: 'Wednesday',
          time: '1:00 P.M.',
          address: '169 W. Huron St. '
        },
        {
          id: 7,
          today: 'Wednesday',
          time: '1:00 P.M.',
          address: '169 W. Huron St. '
        },
        {
          id: 8,
          today: 'Wednesday',
          time: '1:00 P.M.',
          address: '169 W. Huron St. '
        },
        {
          id: 9,
          today: 'Wednesday',
          time: '1:00 P.M.',
          address: '169 W. Huron St. '
        },
        {
          id: 11,
          today: 'Wednesday',
          time: '1:00 P.M.',
          address: '169 W. Huron St. '
        },
        {
          id: 12,
          today: 'Wednesday',
          time: '1:00 P.M.',
          address: '169 W. Huron St. '
        },
        {
          id: 13,
          today: 'Wednesday',
          time: '1:00 P.M.',
          address: '169 W. Huron St. '
        },
        {
          id: 14,
          today: 'Wednesday',
          time: '1:00 P.M.',
          address: '169 W. Huron St. '
        },
        {
          id: 15,
          today: 'Wednesday',
          time: '1:00 P.M.',
          address: '169 W. Huron St. '
        },
        {
          id: 16,
          today: 'Wednesday',
          time: '1:00 P.M.',
          address: '169 W. Huron St. '
        }
      ]
    }
  }

  inputHandler = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    console.log(this.state.data)
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <FlatList
            keyExtractor={item => item.id}
            data={this.state.data}
            renderItem={({ item }) => (
              <ActiveAssist
                today={item.today}
                time={item.time}
                address={item.address}
              />

            )}

          />
        </View>
        {/* <View style={{marginTop: 50, marginBottom: 20, marginHorizontal: 20}}>
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
        
         <DateTime/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  }
});

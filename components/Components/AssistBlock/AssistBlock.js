import React, {Component} from 'react';
import { Text, Image, View, StyleSheet, FlatList } from 'react-native';
import TimeLine from '../timeLine';
import AssistTime from './AssistTime';

class AssistBlock extends Component {

    constructor(){
        super()
        this.state = {
           value: 'Search for a property',
           items: [
             {
               id: 1,
              address: '169 W. Huron St. '
             },
             {
              id: 2,
              address: '169 W. Huron St. '
             },
             {
              id: 3,
              address: '169 W. Huron St. '
             },
             {
              id: 4,
              address: '169 W. Huron St. '
             }
           ]
        }
      }


    render(){
        const { items} = this.state;
        return(
            <View>
            <View style={{flexDirection: 'row',  }}>
                <AssistTime 
                time={this.props.time}
                today={this.props.today}/>
                <TimeLine />
            <View style={styles.wrapper}>
                <View style={{ flexDirection: 'row', }}>
                    <Image
                        style={{ width: 18, height: 18 }}
                        source={require('../Input/Assets/search.png')} />
                    <Text>Phooshoot</Text>
                </View>
                <View>
                    <Text>{this.props.address}</Text>
                </View>
            </View>
            </View>
        </View>
        )
    }
}


// const AssistBlock = (props) => {
//     return (

//         <View>
     
            
//             <View style={{flexDirection: 'row', }}>
//                 <AssistTime/>
//                 <TimeLine/>
//             <View style={styles.wrapper}>
//                 <View style={{ flexDirection: 'row', }}>
//                     <Image
//                         style={{ width: 18, height: 18 }}
//                         source={require('../Input/Assets/search.png')} />
//                     <Text>Phooshoot</Text>
//                 </View>
//                 <View>
//                     <Text>180 N Jefferson. St</Text>
//                 </View>
//             </View>
//             </View>
//         </View>

//     )

// }


const styles = StyleSheet.create({
    wrapper: {
        width: 250,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 6,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        padding: 5,
        shadowRadius: 0,
         left: 25,
         top: 20
    },
    timeline: {
        // position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: 40,
        justifyContent: 'center', // center the dot
        alignItems: 'center',
    },
    line: {
        position: 'absolute',
        top: -50,
        left: 19,
        width: 2,
        height: 125,
        bottom: 0,
    },
    topLine: {
        flex: 1,
        width: 2,
        backgroundColor: '#6DA3D3',
    },
    // bottomLine: {
    //   flex: 1,
    //   width: 4,
    //   backgroundColor: 'black',
    // },
    // hiddenLine: {
    //   width: 0,
    // },
    dot: {
        width: 9,
        height: 9,
        borderRadius: 8,
        backgroundColor: '#6DA3D3',
    },
})


export default AssistBlock;

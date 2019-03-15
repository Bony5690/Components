import React from 'react';
import { View, Text, Image} from 'react-native';


const TimeBlockDetails = (props) => {
    return(
        <View style={{alignItems: 'center'}}>
              <Image 
            style={{width: 45, height: 40}}
            source={require('../ActiveAssists/Assets/showing-dark.png')}/>
            <Text style={{ fontSize: 20, color: '#8E8E93', marginTop: 10}}>Showing</Text>
            <Text style={{ fontSize: 12, marginTop: 10}}>Wednesday</Text>
            <Text style={{ fontSize: 18, color: '#8E8E93'}}>Oct. 19</Text>
            <Text style={{ fontSize: 11, color: '#8E8E93'}}> 11:30 AM</Text>
        </View>
    )
  
}


export default TimeBlockDetails;

import React from 'react';
import { View, Text,  } from 'react-native';
import { CheckBox } from 'react-native-elements'

const Check = (props) => {
    return(
        <View>
         <CheckBox
  title='Click Here'
  checked={props.checked}
/>

        </View>
    )
  
}


export default Check;
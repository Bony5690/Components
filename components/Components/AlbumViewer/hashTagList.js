import React from 'react';
import { View, Text } from 'react-native';
import HashTag from './hashtag'

const HashTagList = (props) => {

    return (
        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 30 }}>
              {props.tags.map((tag, index) => (
                <HashTag
                key={index}
                  style={{
                    margin: 3, backgroundColor: '#FFFFFF'
                  }}
                  text={tag.tag} />
              ))}
            </View>
 
    )
  
}

export default HashTagList;

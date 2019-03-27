import React, {Component}  from 'react';
import { View, Text, TextInput,    } from 'react-native';
import { tsPropertySignature } from '@babel/types';
import PropTypes from 'prop-types'



class PaymentInput extends Component {
    render() {
        return(
            <View>
  
            <View style={this.props.wrapperStyle}>
   
            <TextInput
            placeholder={this.props.placeholder}
            clearTextOnFocus={true}
              style={this.props.inputStyle}
                value={this.props.value}
                onChange={this.props.onChange}

            /> 
            </View>
            
        </View>
        )
    }
}


export default PaymentInput;






import React, {Component}  from 'react';
import { View, Text, TextInput,    } from 'react-native';
import { tsPropertySignature } from '@babel/types';
import PropTypes from 'prop-types'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";


class PaymentInput extends Component {
    render() {
        return(
            <View>
              {/* <LiteCreditCardInput onChange={() => form => console.log(form)} /> */}


            <View style={this.props.wrapperStyle}>
            <TextInput
            placeholder={this.props.placeholder}
            editable={true}
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
// const PaymentInput = (props) => {
//     return(
//         <View>
//             <View style={props.wrapperStyle}>
//             <TextInput
//             placeholder={props.placeholder}
//             editable={true}
//             clearTextOnFocus={true}
//               style={props.inputStyle}
//                 value={props.value}
//                 onChange={props.onChange}
//             /> 
//             </View>
            
//         </View>
//     )
  
// }

export default PaymentInput;


PaymentInput.propTypes = {
    value: PropTypes.object.isRequired
}



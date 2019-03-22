import React from 'react';
import { View, Text, } from 'react-native';
import PaymentTextBlock from './PaymentTypeBlock';
import PaymentInput from './PaymentInfoInput';

const AddPaymentInfo = (props) => {
    return (
        <View>
            <Text style={{ paddingTop: 10, paddingLeft: 10, paddingBottom: 10, fontSize: 20, color: '#8E8E93', letterSpacing: 0.38, lineHeight: 24 }}>Payment Type</Text>
            <PaymentTextBlock
                onPress={props.onBankPress}
                topBorderStyle={{
                    borderTopColor: '#8E8E93',
                    borderTopWidth: 0.2,
                    padding: 10,
                    flexDirection: 'row',
                    textAlign: 'right',

                }}
                bottomBorderStyle={{
                    borderBottomColor: '#8E8E93',
                    borderBottomWidth: 0.2,
                    padding: 2.5,

                }}
                paymentType='Bank Account' />

            <PaymentTextBlock
                onPress={props.onCardPress}
                topBorderStyle={{
                    borderTopColor: '#8E8E93',
                    borderTopWidth: 0.2,
                    padding: 10,
                    flexDirection: 'row',
                    textAlign: 'right',


                }}
                bottomBorderStyle={{
                    borderBottomColor: '#8E8E93',
                    borderBottomWidth: 0.2,
                    padding: 0.3,
                }}
                paymentType='Credit Card' />
                {
                    !props.creditCardInfo &&
                    <View style={{marginTop: 8, marginLeft: 10}}>
                    <Text>Using a credit card will incur a 3% additional fee</Text>
                    </View>
                }

                    
                 
                
            <Text style={{marginTop: 20, marginLeft: 10, marginBottom: 12, fontSize: 20, color: '#8E8E93', letterSpacing: 0.38, lineHeight: 24 }}>Payment Details</Text>

                {
                    props.checkingBlock &&
             
            <PaymentTextBlock
                topBorderStyle={{
                    borderTopColor: '#8E8E93',
                    borderTopWidth: 0.2,
                    padding: 10,
                    flexDirection: 'row',
                    textAlign: 'right',

                }}
                bottomBorderStyle={{
                    borderBottomColor: '#8E8E93',
                    borderBottomWidth: 0.2,
                    padding: 0.3,

                }}
                paymentType='Checking' />

            }
            {
                props.savingsBlock &&
     
            <PaymentTextBlock
                topBorderStyle={{
                    borderTopColor: '#8E8E93',
                    borderTopWidth: 0.2,
                    padding: 10,
                    flexDirection: 'row',
                    textAlign: 'right',

                }}
                bottomBorderStyle={{
                    borderBottomColor: '#8E8E93',
                    borderBottomWidth: 0.3,
                    padding: 0.3,

                }}
                paymentType='Savings' />
            }
            <View>
                {
                    props.bankPay &&

                    <View style={{ marginTop: 0 }}>
                        <PaymentInput
                            placeholder='Routing Number'
                            wrapperStyle={{ marginTop: 30, backgroundColor: 'white' }}
                            onChange={props.onRoutNum}
                            inputStyle={{
                                color: '#8E8E93',
                                borderTopWidth: 0.2,
                                borderBottomWidth: 0.2,
                                padding: 10,
                                borderTopColor: '#8E8E93',
                                borderBottomColor: '#8E8E93'
                            }}
                            value={props.routingNum} />
                        <PaymentInput
                            onChange={props.accountNum}
                            placeholder='Account Number'
                            inputStyle={{
                                color: '#8E8E93',
                                borderTopWidth: 0.2,
                                borderBottomWidth: 0.2,
                                padding: 10,
                                borderTopColor: '#8E8E93',
                                borderBottomColor: '#8E8E93',

                            }}
                            onChange={props.onAccountNum}
                            wrapperStyle={{ backgroundColor: 'white' }}
                            value={props.accountNum} />
                    </View>



                }


                {
                    props.cardPay &&

                    <View style={{ marginTop: 20 }}>
                        <PaymentInput
                            placeholder='Card Number'
                            inputStyle={{
                                color: '#8E8E93',
                                borderTopWidth: 0.2,
                                borderBottomWidth: 0,
                                padding: 10,
                                borderTopColor: '#8E8E93',
                                borderBottomColor: '#8E8E93',

                            }}
                            onChange={props.onCardNum}
                            wrapperStyle={{ backgroundColor: 'white' }}

                            onChange={(val) => this.setValue('cardNum', val)}
                            value={props.cardNum} />



                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <PaymentInput
                                placeholder='MM/YY'
                                inputStyle={{
                                    color: '#8E8E93',
                                    borderTopWidth: 0.2,
                                    borderBottomWidth: 0.2,
                                    padding: 10,
                                    borderTopColor: '#8E8E93',
                                    borderBottomColor: '#8E8E93',

                                }}
                                onChange={props.onExpDate}
                                wrapperStyle={{ backgroundColor: 'white', width: 175, marginTop: 10 }}
                                value={props.expDate} />

                            <PaymentInput
                                placeholder='123'
                                inputStyle={{
                                    color: '#8E8E93',
                                    borderTopWidth: 0.2,
                                    borderBottomWidth: 0.2,
                                    padding: 10,
                                    borderTopColor: '#8E8E93',
                                    borderBottomColor: '#8E8E93',

                                }}
                                wrapperStyle={{ backgroundColor: 'white', width: 175, marginTop: 10 }}
                                onChange={props.onCvv}
                                value={props.cVV} />
                        </View>

                    </View>
                }












            </View>


        </View>
    )

}


export default AddPaymentInfo;

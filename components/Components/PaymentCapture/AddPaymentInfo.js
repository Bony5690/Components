import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PaymentTextBlock from './PaymentTypeBlock';
import PaymentInput from './PaymentInfoInput';
import NumberInput from './NumberInput';

const AddPaymentInfo = (props) => {
    return (
        <View>
            <Text style={styles.paymentTypeStyles}>Payment Type</Text>
            <PaymentTextBlock
                onPress={props.onBankPress}
                topBorderStyle={styles.topBorderStyle}
                bottomBorderStyle={{
                    borderBottomColor: '#8E8E93',
                    borderBottomWidth: 0.2,

                }}
                placeholderTextStyle={{ color: 'black', fontSize: 15 }}
                paymentType='Bank Account' />

            <PaymentTextBlock
                onPress={props.onCardPress}
                topBorderStyle={styles.shotenedBorderStyle}
                bottomBorderStyle={styles.bottomBorderStyle}
                placeholderTextStyle={{ color: 'black', fontSize: 15 }}
                paymentType='Credit Card' />
            {
                !props.creditCardInfo &&
                <View style={{ marginTop: 8, marginLeft: 10 }}>
                    <Text style={styles.creditCardDisclaimer}>Using a credit card will incur a 3% additional fee</Text>
                </View>
            }




            <Text style={styles.paymentTypeStyles}>Payment Details</Text>

            {
                props.checkingBlock &&

                <PaymentTextBlock
                    topBorderStyle={styles.topBorderStyle}
                    bottomBorderStyle={styles.bottomBorderStyle}
                    placeholderTextStyle={{ color: 'black', fontSize: 15 }}
                    paymentType='Checking' />

            }
            {
                props.savingsBlock &&

                <PaymentTextBlock
                    topBorderStyle={styles.shotenedBorderStyle}
                    bottomBorderStyle={styles.bottomBorderStyle}
                    placeholderTextStyle={{ color: 'black', fontSize: 15 }}
                    paymentType='Savings' />
            }
            <View>
                {
                    props.bankPay &&

                    <View style={{ marginTop: 0 }}>
                        <View>

                        </View>
                        <PaymentInput
                            topBorder={{
                                borderTopColor: '#8E8E93',
                                borderTopWidth: 0.2
                            }}
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
                                borderBottomWidth: 0.2,
                                padding: 10,
                                borderTopColor: '#8E8E93',
                                borderBottomColor: '#8E8E93',
                                fontSize: 15,
                                letterSpacing: -0.08,
                                lineHeight: 18

                            }}
                            onChange={props.onCardNum}
                            wrapperStyle={{ backgroundColor: 'white' }}
                            onChange={props.onCardNum}
                            value={props.cardNum} />



                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ paddingTop: 10, paddingLeft: 10, }}>Exp. Date</Text>
                                <NumberInput
                                    placeholder='MM/YY'
                                    inputStyle={{
                                        color: '#8E8E93',
                                        borderTopWidth: 0.2,
                                        borderBottomWidth: 0.2,
                                        padding: 10,
                                        borderTopColor: '#8E8E93',
                                        borderBottomColor: '#8E8E93',


                                    }}
                                    onChangeText={props.onExpDate}
                                    wrapperStyle={{ backgroundColor: 'white', width: 175, marginTop: 10 }}
                                    value={props.expDate}
                                />




                            </View>

                            <View>
                                <Text style={{ paddingTop: 10, paddingLeft: 10, }}>CVV</Text>
                                <NumberInput
                                    placeholder='123'
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
                                    onChange={props.onCvv}
                                />
                            </View>


                        </View>

                        <View>
                            <NumberInput
                                placeholder='Zip Code'
                                inputStyle={{
                                    color: '#8E8E93',
                                    borderTopWidth: 0.2,
                                    borderBottomWidth: 0.2,
                                    padding: 10,
                                    borderTopColor: '#8E8E93',
                                    borderBottomColor: '#8E8E93',
                                    fontSize: 15,
                                    letterSpacing: -0.08,
                                    lineHeight: 18

                                }}
                                wrapperStyle={{ backgroundColor: 'white', marginTop: 20 }}
                                onChange={props.onZipCode}
                                value={props.zipCode} />
                        </View>
                    </View>
                }












            </View>


        </View>
    )

}


export default AddPaymentInfo;


const styles = StyleSheet.create({
    paymentTypeStyles: {
        paddingTop: 40, paddingLeft: 10, paddingBottom: 10, fontSize: 20, color: '#8E8E93', letterSpacing: 0.38, lineHeight: 24
    },
    topBorderStyle: {
        borderTopColor: '#8E8E93',
        borderTopWidth: 0.2,
        padding: 10,
        flexDirection: 'row',
        textAlign: 'right',
    },
    shotenedBorderStyle: {
        borderTopColor: '#8E8E93',
        borderTopWidth: 0.2,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        textAlign: 'right',
        left: 12

    },
    bottomBorderStyle: {
        borderBottomColor: '#8E8E93',
        borderBottomWidth: 0.2,
        padding: 0.2,
    },
    creditCardDisclaimer: {
        color: '#8E8E93', fontSize: 13, letterSpacing: -0.08, lineHeight: 18
    }


})

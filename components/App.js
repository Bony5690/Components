import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { Svg } from 'react-native-svg';
import Share, { ShareSheet, Button } from 'react-native-share'
import ShareButton from './Components/AlbumViewer/ShareButton';
import ActionButton from './Components/AlbumViewer/ActionButton';
import AddPaymentInfo from './Components/PaymentCapture/AddPaymentInfo';
import { Platform, StyleSheet, Text, View, FlatList, ImageBackground, Image } from 'react-native';
// import AssistBlock from './Components/AssistBlock/ActiveAssist';
// import TimeLine from './Components/TimeLine';
import ActiveAssist from './Components/ActiveAssists/ActiveAssist';
import TextInputLines from './Components/LimitedInput/LimitedInput';
// import TimeLineDetails from './Components/TimeLine';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'
import TimeDetails from './Components/RequestDetails/DateDetailBlock';
import PropertyInfo from './Components/RequestDetails/PropertyInfo';
import RequestingBroker from './Components/RequestDetails/RequestingBroker';
import Instructions from './Components/RequestDetails/Instructions';
import OfferAssist from './Components/RequestDetails/OfferAssistButton';
import Camera from './Components/ActiveAssists/Assets/photoshoot-dark.svg';
import PaymentTextBlock from './Components/PaymentCapture/PaymentTypeBlock';
import PaymentInput from './Components/PaymentCapture/PaymentInfoInput';
import DateTime from './Components/DatePicker';
import AlbumViewer from './Components/AlbumViewer/AlbumViewers';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      value: 'Search for a property',
      visible: false,
      checked: false,
      routingNum: '',
      accountNum: '',
      cardNum: '',
      expDate: '',
      cvv: '',
      bankPay: true,
      cardPay: false,
      zipcode: '',
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

  onOpen = () => {
    console.log("OPEN")
    this.setState({ visible: true });
  }

  onCancel = () => {
    console.log("CANCEL")
    this.setState({ visible: false });
  }

  onAlert = () => {
    alert('Are you sure you want to delete your post')
  }


  moreAction(index) {
    switch (index) {
      case 2:
        setTimeout(() => this.onAlert())
        break;
      case 1:
        setTimeout(() => alert('this works: case1'))

        break;

    }
  }

  // changeTextHandler = (e) => {
  //   this.setState({ value: e.target.value })
  // }

  inputHandler = (e) => {
    this.setState({ value: e.target.value })
  }

  setValue = (name, val) => {
    if (name === 'expDate' && val.length === 2) {
      val = val + '/'
      this.setState({ [name]: val })
    } else {
      this.setState({ [name]: val })
    }

  }

  setBankPay = () => {
    this.setState({ bankPay: true, cardPay: false })
  }

  setCardPay = () => {
    this.setState({ cardPay: true, bankPay: false, })
  }

  showActionSheet = () => {
    this.ActionSheet.show()
  }





  render() {
    let shareOptions = {
      title: "React Native",
      message: "Hola mundo",
      url: "http://facebook.github.io/react-native/",
      subject: "Share Link" //  for email
    };

    const { checked, accountNum, routingNum, cardNum, expDate, cvv, bankPay, cardPay, zipcode } = this.state
    return (
      <View style={{  backgroundColor: '#F5F5F5'}}>


        {/* <PaymentTextBlock 
      paymentType='Credit Card'
      shortenLine={true}/>  */}
        {/* Request Details */}
       {/* <TimeDetails
          date='OCT. 19'
          time='11:30 AM'
          requestType='Showing'
          dayOfWeek='Wednesday'
          requestAmount={75} />
        <PropertyInfo 
        address='180 N. Jefferson St.'
        cityStateZip='Chicago, IL 60654'
        />
        <RequestingBroker
          brokerName='John Doe'
          brokerFirm='Dream Town Reality'
        />
        <Instructions
          Instructions='Need Help with covering a photoshoot in River North Help Please!' />
        <OfferAssist
        />   */}
        <AlbumViewer
          shareButton={() => Share.open(shareOptions)}
          onPress={this.showActionSheet} />

        <ActionSheet
          ref={o => this.ActionSheet = o}
          options={options}
          cancelButtonIndex={0}
          onPress={(index) => this.moreAction(index)}
        />





        {/* <AddPaymentInfo
          zipcode={zipcode}
          onZipCode={(val) => this.setValue('zipcode', val)}
          creditCardInfo={bankPay}
          checkingBlock={bankPay}
          savingsBlock={bankPay}
          cardPay={cardPay}
          bankPay={bankPay}
          onBankPress={this.setBankPay}
          onCardPress={this.setCardPay}
          cVV={cvv}
          onCvv={(val) => this.setValue('cvv', val)}
          expDate={expDate}
          onExpDate={(val) => this.setValue('expDate', val)}
          onCardNum={(val) => this.setValue('cardNum', val)}
          cardNum={cardNum}
          accountNum={accountNum}
          accountNum={(val) => this.setValue('accountNum', val)}
          routingNum={routingNum}
          onRoutNum={(val) => this.setValue('routingNum', val)}
        /> */}

        {/* <PaymentInput
          placeholder='Routing Number'
          wrapperStyle={{ marginTop: 30, backgroundColor: 'white' }}
          onChange={(val) => this.setValue('routingNum', val)}
          inputStyle={{
            color: '#8E8E93',
            borderTopWidth: 0.2,
            borderBottomWidth: 0.2,
            padding: 10,
            borderTopColor: '#8E8E93',
            borderBottomColor: '#8E8E93'
          }}
          value={routingNum} />
        <PaymentInput
          placeholder='Account Number'
          inputStyle={{
            color: '#8E8E93',
            borderTopWidth: 0.2,
            borderBottomWidth: 0.2,
            padding: 10,
            borderTopColor: '#8E8E93',
            borderBottomColor: '#8E8E93',

          }}
          wrapperStyle={{ backgroundColor: 'white' }}
          onChange={(val) => this.setValue('accountNum', val)}
          value={accountNum} />


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
          wrapperStyle={{ backgroundColor: 'white' }}
          onChange={(val) => this.setValue('cardNum', val)}
          value={accountNum} />



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
            wrapperStyle={{ backgroundColor: 'white', width: 175, marginTop: 10 }}
            onChange={(val) => this.setValue('accountNum', val)}
            value={accountNum} />

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
            onChange={(val) => this.setValue('accountNum', val)}
            value={accountNum} />
        </View> 







        {/* Active Assists */}
        {/* <View style={{ marginTop: 20 }}>
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
        </View> */}


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

        {/* <DateTime/>  */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'flex-start',
    backgroundColor: '#F5F5F5',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  actionSheetRow: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', height: 60, },
  actionSheetRowImage: { marginLeft: 40, maxHeight: 30, maxWidth: 30, },
  actionSheetRowText: { marginLeft: 32, marginTop: 5, fontSize: 18 },
  button: { alignSelf: 'center', borderRadius: 8, borderWidth: 1, borderColor: 'white', },
  buttonText: { paddingTop: 8, paddingBottom: 8, paddingLeft: 12, paddingRight: 12, color: 'white', fontSize: 18, },
});



const options = [
  'Cancel',
  <View style={styles.actionSheetRow}>
    <Text style={{color: 'black', fontWeight: '600'}}>Delete Entry</Text>
  </View>,
  <View style={styles.actionSheetRow}>
    <Text>Edit Entry</Text>
  </View>,

];

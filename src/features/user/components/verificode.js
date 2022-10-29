import React, { useState, useRef, Component, createRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Switch, Alert, Dimensions, AsyncStorage,BackHandler } from 'react-native';
import {verifiCodeStyle} from "./styles";

import { StackNavigator } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import RadioButton from 'components/radio-button';
import ToggleSwitch from 'toggle-switch-react-native';
import CodeFiled from 'react-native-confirmation-code-field';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast from 'react-native-simple-toast';
import I18n, { getLanguages } from 'react-native-i18n';
//import VerifyCode from 'react-native-sms-verifycode';
const horizontalGradient = {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
};

const upToDownGradient = {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
};

class verifycode extends Component {
  static containerProps = { style: verifiCodeStyle.inputWrapStyle };
  inputFocusColor = '#EF757B'
  inputBlurColor = '#EDC0C2'
  codeInputRef = createRef();

  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  state = {
    inputBorderColor: this.inputBlurColor,
    email: '',
    required: false,
    errcode: "",
    confirmResult:null,
    phone:''
  }


  onFinishCheckingCode = code => {
    //console.log("email")
    //console.log(code)
    //alert(code)
    const { confirmResult } = this.state;
    if (this.isValidCode(code)) {
      if (confirmResult) {
        //console.log("Phone......")
      confirmResult.confirm(code)
      .then((user) => {
        //Toast.show("Code Confirmed!", Toast.LONG)
        
       
       const savephone={Firstname:'',Lastname:'',email:'',phone:this.state.phone,password:'',googleid:'',fbid:'',verified:'',photo:'',status:''}
			this.props.loginActions.register(savephone);
        this.setState({ message: 'Code Confirmed!' });
        this.props.navigation.navigate("HomeForm", { verify: code })
      })
      .catch(error => {
        Toast.show(`Code Confirm Error: ${error.message}`, Toast.LONG)
        this.setState({ message: `Code Confirm Error: ${error.message}` })});
    }

      // If code does not match, clear input with: this.refs.codeInputRef1.clear()
     // this.codeInputRef.current.clear();
    }
  };
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    this.props.navigation.navigate('UserForm',{PageType:'login'});
    return true;
  }




  isValidCode(value) {
    if (typeof value != 'string') {
      this.setState({ errcode: "Enter the code" })
      return false
    }
    this.setState({ errcode: "" })
    return true


  }



  cellProps = ({ index, isFocused, hasValue }) => {
    //console.log(index, isFocused, hasValue)
    if (isFocused) {
      //console.log('%')
      return {
        style: [verifiCodeStyle.inputbox, { borderColor: this.state.inputFocusColor, borderWidth: 3 }]
      }
    } else {
      //console.log('-')
      return {
        style: [verifiCodeStyle.inputbox, { borderColor: this.state.inputBlurColor, borderWidth: 0 }]
      }
    }
  }


  render() {
    if (this.state.required == false) {
      const { navigation } = this.props;
      //console.log(navigation.state.params.phonenumber)
      this.setState({confirmResult:navigation.state.params.confirmResult,phone:navigation.state.params.phonenumber})
      this.setState({ required: true })
    }
    return (
      <LinearGradient style={{ minHeight: Dimensions.get('window').height }} colors={['#FFF', '#FFF']} locations={[0.5, 1]}>
        <KeyboardAwareScrollView enableOnAndroid>
          <View style={verifiCodeStyle.container}>
            <Image style={{ width: 60, height: 100, borderRadius: 100, marginTop: 20, marginBottom: 0 ,alignSelf:'center'}} source={require("../../../assets/images/HUG_Final.png")} />
            <View style={{ paddingBottom: 8 }}>
              <Text style={verifiCodeStyle.title}>{I18n.t('Enter code')}</Text>
            </View>
            <View style={verifiCodeStyle.formWrap}>
              {/* <Text style={verifiCodeStyle.formLabel}>Awesome we have enabled a six digit code to the email address you provided.</Text> */}
              <View style={verifiCodeStyle.contain}>
                <CodeFiled
                  ref={this.codeInputRef}
                  inputPosition="full-width"
                  variant="border-circle"
                  activeColor={this.inputFocusColor}
                  inactiveColor={this.inputBlurColor}
                  cellBorderWidth={3}
                  autoFocus={true}
                  codeLength={6}
                  size={40}
                  keyboardType="numeric"
                  cellProps={{ style: verifiCodeStyle.inputbox }}
                  containerProps={verifycode.containerProps}
                  onFulfill={this.onFinishCheckingCode}
                />
              </View>
              <Text style={verifiCodeStyle.errors}>{this.state.errcode}</Text>
              <View style={verifiCodeStyle.btnWrap}>
                <TouchableOpacity onPress={this.onFinishCheckingCode}>
                  <View style={verifiCodeStyle.saveButton}>
                    <Text style={verifiCodeStyle.saveText}>{I18n.t('Continue')}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    );
  }
}

export default verifycode;

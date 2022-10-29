import React, { useState, Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Image,
	PermissionsAndroid,
	Dimensions,
	AsyncStorage,
	Keyboard,
	Button,
	ScrollView
} from 'react-native';
import {MemberStyles} from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import I18n, { getLanguages } from 'react-native-i18n';
import { PowerTranslator, ProviderTypes, TranslatorConfiguration } from 'react-native-power-translator';

import Mailer from 'react-native-mail';

// const translate = require('google-translate-api');
 
// translate('Ik spreek Engels', {to: 'en'}).then(res => {
//     console.log(res.text);
//     //=> I speak English
//     console.log(res.from.language.iso);
//     //=> nl
// }).catch(err => {
//     console.error(err);
// });

class HomeComponent extends Component {

	constructor(props) {
		super(props)
		this.state = { languageCode: 'en',loginType:'' };
	  }
	
	
	componentWillMount() {
	
		AsyncStorage.getItem('LoginType').then((data) => {
			type = data;
			this.setState({loginType:type})
			console.log(type)
		   });
		
	  }
	handleEmail = () => {
    Mailer.mail({
      subject: 'need help',
      recipients: ['doctor@greatcustomer.com'],
      ccRecipients: ['supportCC@example.com'],
      bccRecipients: ['supportBCC@example.com'],
      body: '<b>A Bold Body</b>',
      isHTML: true,
      attachment: {
        path: '',  // The absolute path of the file from which to read data.
        type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
        name: '',   // Optional: Custom filename for attachment
      }
    }, (error, event) => {
      Alert.alert(
        error,
        event,
        [
          { text: 'Ok', onPress: () => console.log('OK: Email Error Response') },
          { text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response') }
        ],
        { cancelable: true }
      )
    });
  }

	render() {
		TranslatorConfiguration.setConfig(ProviderTypes.Google, 'AIzaSyB5ip6KC-9KCIjO9Q7Rm47dYJDmOdjLgM0', this.state.languageCode);
		const { state }=this.props

      
		return (
			<LinearGradient style={{ minHeight: Dimensions.get('window').height }} colors={['#FFF', '#FFF']} locations={[0.5, 1]}>

	


					<View style={MemberStyles.container}>

					<KeyboardAwareScrollView style={{flex:1}} enableOnAndroid>
					<View style={MemberStyles.homeContainer}>
						<View style={MemberStyles.homeMenuContent}>
							
						<View style={MemberStyles.homeMenu}>
						<TouchableOpacity onPress={()=>{this.props.navigation.navigate('AppointmentForm',{navigationPageType:this.state.loginType=='kol'?'Kol':'member'} )}}>
						<View style={{alignItems:"center"}}>
						<Icons style={MemberStyles.topIcon} name={"ios-calendar"} size={50} />
						 <Text style={MemberStyles.homeMenuText}>{I18n.t('Appointment')}</Text> 
						{/* <PowerTranslator style={MemberStyles.subtitle} text={'Author: Confucianism'} /> */}
						</View>
						</TouchableOpacity>
						</View>
					
						<View style={MemberStyles.homeMenu}>
						<TouchableOpacity onPress={()=>{this.props.navigation.navigate('GroupForm',{navigationPageType:'group'})}}>
							<View style={{alignItems:"center"}}>
						<Icon style={MemberStyles.topIcon} name={"group"} size={50} />
						<Text style={MemberStyles.homeMenuText}>{I18n.t('Group')}</Text>
						</View>
						</TouchableOpacity>
						</View>

						<View style={MemberStyles.homeMenu}>
						<TouchableOpacity onPress={()=>{this.props.navigation.navigate('ContentForm',{navigationPageType:'list'})}}>
						<View style={{alignItems:"center"}}>
						<Icons style={MemberStyles.topIcon} name={"md-book"} size={50} />
						<Text style={MemberStyles.homeMenuText}>{I18n.t('Articles')}</Text>
						</View>
						</TouchableOpacity>
						</View>
						</View>

						<View style={MemberStyles.homeMenuContent}>
						<View style={MemberStyles.homeMenu}>
						<TouchableOpacity onPress={()=>{this.props.navigation.navigate('SubscribeForm',{navigationPageType:'choosesub'})}}>
						<View style={{alignItems:"center"}}>
						<MaterialIcon style={MemberStyles.topIcon} name={"email-plus-outline"} size={50} />
						<Text style={MemberStyles.homeMenuText}>{I18n.t('Subscripstion')}</Text>
						</View>
						</TouchableOpacity>
						</View>

						<View style={MemberStyles.homeMenu}>
						<TouchableOpacity onPress={()=>{this.props.navigation.navigate('FeedBackForm')}}>
						<View style={{alignItems:"center"}}>
						<MaterialIcon style={MemberStyles.topIcon} name={"email-open-outline"} size={50} />
						<Text style={MemberStyles.homeMenuText}>{I18n.t('Feedback')}</Text>
						</View>
						</TouchableOpacity>
						</View>

						<View style={MemberStyles.homeMenu}>
						<TouchableOpacity onPress={()=>{this.props.navigation.navigate('RattingForm')}}>
						<View style={{alignItems:"center"}}>
						<MaterialIcon style={MemberStyles.topIcon} name={"star-circle-outline"} size={50} />
						<Text style={MemberStyles.homeMenuText}>{I18n.t('Rattings')}</Text>
						</View>
						</TouchableOpacity>
						</View>
						</View>

						<View style={MemberStyles.homeMenuContent}>
						<View style={MemberStyles.homeMenu}>
						<TouchableOpacity onPress={() => { this.props.navigation.navigate('EventForm',{navigationPageType:'list'}); }} >
						<View style={{alignItems:"center"}}>
						<Icon style={MemberStyles.topIcon} name={"event-note"} size={50} />
						<Text style={MemberStyles.homeMenuText}>{I18n.t('Event')}</Text>
						</View>
						</TouchableOpacity>
						</View>

						<View style={MemberStyles.homeMenu}>
						<TouchableOpacity onPress={() => { this.props.navigation.navigate('ReminderForm'); }} >
						<View style={{alignItems:"center"}}>
						<Icons style={MemberStyles.topIcon} name={"md-alarm"} size={50} />
						<Text style={MemberStyles.homeMenuText}>{I18n.t('Reminder')}</Text>
						</View>
						</TouchableOpacity>
						</View>

						<View style={[MemberStyles.homeMenu,{borderWidth:0}]}>						
						</View>						
						</View>

					</View>
					<View style={{  margin:"3%",width:"94%",marginTop:35}}>
					<View style={MemberStyles.homeMenuContent}>
						<View style={[MemberStyles.viewContent]}>
								<Text style={MemberStyles.viewText}>{I18n.t('View Content')}</Text>
						</View>						
					</View>
					 <ScrollView contentContainerStyle={{flexDirection: 'row'}}
					    		 showsHorizontalScrollIndicator={false}
              			  		 horizontal={true} >
				  
					<View style={MemberStyles.profileMenu}>
						<View style={{alignItems:"center"}}>
						<Image style={MemberStyles.viewContentImage} source={require("../../../assets/images/doctor1.jpg")} />
						</View>
						</View>

						<View style={MemberStyles.profileMenu}>
						<View style={{alignItems:"center"}}>
						<Image style={MemberStyles.viewContentImage} source={require("../../../assets/images/doctor3.jpg")} />
						</View>
						</View>
						<View style={MemberStyles.profileMenu}>
						<View style={{alignItems:"center"}}>
						<Image style={MemberStyles.viewContentImage} source={require("../../../assets/images/doctor4.jpg")} />
						</View>
						</View>
						<View style={MemberStyles.profileMenu}>
						<View style={{alignItems:"center"}}>
						<Image style={MemberStyles.viewContentImage} source={require("../../../assets/images/doctor3.jpg")} />
						</View>
						</View>
						<View style={MemberStyles.profileMenu}>
						<View style={{alignItems:"center"}}>
						<Image style={MemberStyles.viewContentImage} source={require("../../../assets/images/doctor1.jpg")} />
						</View>
						</View>
				
						</ScrollView>
												
						</View>

					</KeyboardAwareScrollView>
					</View>

			
			</LinearGradient>
		)
	}
}



export default HomeComponent;

import React, { useState, Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,

	Image,
	PermissionsAndroid,
	Dimensions,
	AsyncStorage,
	Keyboard,
	Button,
	ScrollView,
	BackHandler
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import {detailsStyles} from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import LinearGradient from 'react-native-linear-gradient';

import I18n, { getLanguages } from 'react-native-i18n';

import Header from '../../../components/Header';

import Textarea from 'react-native-textarea';
class NotificationDetails extends Component {

	constructor() {
		super();
		this.state = { languageCode: 'en', selected_date: "", descrption: "" ,  loginType:''};
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
	}

	componentWillMount() {
		AsyncStorage.getItem('LoginType').then((data) => {
			type = data;
			this.setState({loginType:type})
			//console.log(type)
		   });
	
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
		}
	
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}
	  handleBackButtonClick() {
		this.props.navigation.navigate('NotificationForm',{navigationPageType:'list'});
		return true;
	}	
	handlechangeDate(value) {

		this.setState({ selected_date: value });

	}
	_goBack = () => this.props.navigation.navigate('NotificationForm',{navigationPageType:'list'});
	render() {



		return (

			<LinearGradient style={{ minHeight: Dimensions.get('window').height }} colors={['#FFF', '#FFF']} locations={[0.5, 1]}>

			<Header  title={this.state.loginType=='kol'? I18n.t('Notification Details')+" ("+ I18n.t('KOL')+")":I18n.t('Notification Details')+" ("+ I18n.t('Member')+")"}  goBack={this._goBack} />

				
				

				<View style={{height:"10%",justifyContent:'center'}}>
					<Text style={detailsStyles.title}>Notification Name</Text>
				</View>


				<KeyboardAwareScrollView style={{ flex: 1}} enableOnAndroid>
					
                  <View style={detailsStyles.container}>
					  <View  style={{flexDirection:"row"}}>
						  <View style={detailsStyles.leftContent}>
					    	
						<View style={{height:70}}> 
		<Text style={detailsStyles.leftContentText}>{I18n.t('Date')}</Text>
							</View>
						<View>
						<Text style={detailsStyles.leftContentText}>{I18n.t('Description')}</Text>
						</View>
						
						 
						 
						  </View>
						  <View style={detailsStyles.rightContent}>
						 
						<View style={{height:70}}> 
							<Text  style={detailsStyles.rightContentText} >03/02/2020</Text>
							</View>
						<View>
						<Text  style={detailsStyles.rightContentText} >Evenbord is a simple mobile conference,while was organised by QWERTY</Text>
						</View>
						  </View>
					  </View>
				  </View>




				</KeyboardAwareScrollView>

			</LinearGradient>

		)
	}
}



export default NotificationDetails;

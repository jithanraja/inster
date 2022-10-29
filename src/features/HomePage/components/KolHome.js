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
import {KolStyles} from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { PowerTranslator, ProviderTypes, TranslatorConfiguration } from 'react-native-power-translator';
import I18n, { getLanguages } from 'react-native-i18n';
// const translate = require('google-translate-api');
 
// translate('Ik spreek Engels', {to: 'en'}).then(res => {
//     console.log(res.text);
//     //=> I speak English
//     console.log(res.from.language.iso);
//     //=> nl
// }).catch(err => {
//     console.error(err);
// });

class KOLHomeComponent extends Component {	
	constructor() {
        super();
        this.state = { languageCode: 'en' };
	}
	
	componentWillMount() {
	
	  }
	
	render() {
		const {state}=this.props

		return (
			<KeyboardAwareScrollView  enableOnAndroid>
			<LinearGradient style={{ minHeight: Dimensions.get('window').height }} colors={['#FFF', '#FFF']} locations={[0.5, 1]}>
				
			

						<View style={KolStyles.homeMenuContent}>
						<LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.2}}   colors={['#FF80FF', '#d2a6ff', '#4fdba3']} style={[KolStyles.homeMenu,{ marginTop:"0%",}]}>
					
							<View style={KolStyles.titleOfRow}>
							<Text style={KolStyles.homeMenuText}>{I18n.t('Join User Count')}</Text>
						<Icons style={KolStyles.topIcon} name={"ios-contact"} size={40} />
					
						</View>
						
						<Text style={[KolStyles.numberOfGroup,{ color:'red'}]}>50</Text>
						
						</LinearGradient>

						<LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.5}}  colors={['#4577cc', '#88a6eb', '#4fdba3']} style={KolStyles.homeMenu}>
							<View style={KolStyles.titleOfRow}>
							<Text style={KolStyles.homeMenuText}>{I18n.t('Comments Count')}</Text>
						<MaterialIcon style={KolStyles.topIcon} name={"message-outline"} size={40} />
					
						</View>
						<Text style={[KolStyles.numberOfGroup,{ color:'white'}]}>140</Text>
						
						</LinearGradient>
						<LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.5}} colors={['#d6d627', '#d4d170', '#FF80FF']} style={KolStyles.homeMenu}>
							<View style={KolStyles.titleOfRow}>
							<Text style={KolStyles.homeMenuText}>{I18n.t('Groups Added')}</Text>
						<Icon style={KolStyles.topIcon} name={"group"} size={40} />
					
						</View>
						<Text style={[KolStyles.numberOfGroup,{ color:'blue'}]}>30</Text>
						</LinearGradient>
						</View>
						
			
			</LinearGradient>
			</KeyboardAwareScrollView>
		)
	}
}



export default KOLHomeComponent;

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

} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { iconStyles, iconStylesGoogle, loginStyle } from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FontIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'
import I18n, { getLanguages } from 'react-native-i18n';
import firebaseotp from 'react-native-firebase';
import Toast from 'react-native-simple-toast';

import {
	LoginButton,
	AccessToken,
	GraphRequest,
	GraphRequestManager,
	LoginManager
} from 'react-native-fbsdk';
import { GoogleClientID } from 'config/constants';

import firebase from 'firebase'


const firebaseConfig = {
	appId: '1:790023307485:android:8f43ce064a9696fc349b34',
	messagingSenderId: '790023307485',
	projectId: 'socialwal-1580994701445',
	storageBucket: 'socialwal-1580994701445.appspot.com',
	apiKey: "AIzaSyDdp023PrOGGC-e7BnxjRNeA82uMMHLXLo",
	databaseURL: "https://socialwal-1580994701445.firebaseio.com",

}
firebase.initializeApp(firebaseConfig)

///const applicationVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
class Login extends Component {
	//Initial state false for the switch. You can change it to true just to see.
	constructor(props) {
		super(props)
		this.unsubscribe = null;
	}
	state = {

		languages: [],
		selectedRadio: 0,
		loginType: 'fb',
		pushData: [],
		loggedIn: false,
		//user_name: '',
		avatar_url: '',
		avatar_show: false,
		phonenumber: '+91',
		showSpinner: true,
		user_name: '',
		token: '',
		profile_pic: '',

		confirmResult: null,

		userId: ''

	};


	CheckConnectivity = (value) => {
		//console.log(value)
		// For Android devices
		if (Platform.OS === "android") {
		  NetInfo.fetch().then(isConnected => {
			//console.log(value)
			if (isConnected.isConnected) {
			
				this.onLoginFacebook()
			
			} else {
			
			 Toast.show("Checking your network connection", Toast.LONG)
			}
		  });
		} else {
		  // For iOS devices
		  NetInfo.addEventListener(
			"connectionChange",
			this.handleFirstConnectivityChange
		  );
		}
	  };
	
	  handleFirstConnectivityChange = isConnected => {
		NetInfo.removeEventListener(
		  "connectionChange",
		  this.handleFirstConnectivityChange
		);
	
		if (isConnected === false) {
		  //Alert.alert("You are offline!");
		  Toast.show("Checking your network connection", Toast.LONG)
		} else {
		
			
		}
	  };


	//facebook login...
	onLoginFacebook = () => {
		LoginManager.logInWithPermissions(['public_profile', 'email'])
			.then(result => {
				if (result.isCancelled) {
					alert('cancelled');
				}
				//console.log(
					`login success with permissions: ${result.grantedPermissions.toString()}`,
				);
				return AccessToken.getCurrentAccessToken();
			})
			.then(data => {
				const credential = firebase.auth.FacebookAuthProvider.credential(
					data.accessToken,
				);
				return firebase.auth().signInWithCredential(credential);
			})
			.then(currentFBUser => {
				//console.log(`Facebook Login with user: ${JSON.stringify(currentFBUser)}`);
				//NOT WORKING 
				const { currentUser } = firebase.auth();
				const uid = currentUser.uid;
				//NOT WORKING
				firebase.auth().onAuthStateChanged(authedUser => {
					if (authedUser) {
						//console.log(`Facebook Login with user: ${JSON.stringify(authedUser)}`);
						AsyncStorage.setItem(
							"LoginType", 'fb')
					
					
						//Actions.home(); currentFBUser.user['photoURL']


						const fbuser={username:currentFBUser.additionalUserInfo.profile['first_name'],fullname:currentFBUser.additionalUserInfo.profile['first_name']+currentFBUser.additionalUserInfo.profile['last_name'],email:currentFBUser.user['email'],password:'',fbid:currentFBUser.additionalUserInfo.profile['id'],image:"raj.png"}

						this.props.loginActions.register(fbuser);
					} else {
						//console.log(`Check Auth: ${JSON.stringify(authedUser)}`);
						//	Actions.checkAuth();
					}
				});
			})
			.catch(error => {
				//console.log(`Login failed with ${error}`);
			});
	};





	componentDidMount() {
		//	this.setupGoogleSignin();

		AsyncStorage.getItem('userid').then((data) => {
			let	email = data;
		
				if (email != null && email.trim().length > 0) {
				   //this.props.navigation.navigate('HomeForm')
			   }
			   });
		

	}
	componentWillUnmount() {
		if (this.unsubscribe) this.unsubscribe();
	}


	
	getCurrentUserInfo = async () => {
		
	};

	handleSignIn = () => {
		AsyncStorage.setItem(
			"LoginType", this.state.loginType)
		AsyncStorage.setItem(
			"Login", "normal")
		this.props.navigation.navigate('Verificode')
	}

	onChangePhone = (value) => {
		let validnum = value.replace(".", '')
		validnum = validnum.replace(",", '')
		this.setState({ phonenumber: "+91" + validnum })
		//this.setState({ erremail: validate(this.state).erremail, validator: validate(this.state).validator })
	}

	onChangeRadioButton = (index, value) => {
		this.setState({ selectedRadio: index, loginType: value });
	}

	//login with phone number

	handleSendCode = () => {
		// Request to send OTP

		if (this.validatePhoneNumber()) {
			//console.log(this.state.phonenumber)
			const { phonenumber } = this.state;
			Toast.show("Sending code ...", Toast.LONG)
			this.setState({ message: 'Sending code ...' });

			firebaseotp.auth().signInWithPhoneNumber(phonenumber)
				.then(confirmResult => {

					Toast.show("Code has been sent!", Toast.LONG)
					AsyncStorage.setItem(
						"LoginType", this.state.loginType)
					AsyncStorage.setItem(
						"Login", "normal")
					this.props.navigation.navigate('Verificode', { confirmResult: confirmResult })

					this.setState({ confirmResult, message: 'Code has been sent!' })
				}
				)
				.catch(error => {
					Toast.show(`Sign In With Phone Number Error: ${error.message}`, Toast.LONG)
					this.setState({ message: `Sign In With Phone Number Error: ${error.message}` })
				});


		} else {
			alert('Invalid Phone Number')
		}
	}


	validatePhoneNumber = () => {
		var regexp = /^\+[0-9]?()[0-9](\d[0-9]{8,16})$/
		return regexp.test(this.state.phonenumber)
	}

	render() {



		const radioButtondata = [
			{
				label: I18n.t('KOL'),
				value: 'kol'
			},
			{
				label: I18n.t('Member'),
				value: 'member'
			}
		]


		return (
			<LinearGradient style={{ minHeight: Dimensions.get('window').height }} colors={['#000', '#000']} locations={[0.5, 1]}>

				<KeyboardAwareScrollView enableOnAndroid>
					<View style={loginStyle.container}>
						<Image style={{ width: 250, height: 250, borderRadius: 100, alignSelf: "center", margin: 20 }} source={require("../../../assets/images/logo1.png")} />
						<View style={{ paddingBottom: 20, alignSelf: "center" }}>
							<Text style={loginStyle.title}>Welcome to Vibester</Text>

							<Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', marginTop: 15,color:'#FFF' }}>Your Social Lifestyle</Text>
							<Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold',color:'#FFF' }}>Application</Text>
						</View>

						<View style={loginStyle.formWrap}>



							<TouchableOpacity onPress={() => { this.props.navigation.navigate('UserForm',{PageType:'register'}); }} >


								<View style={[loginStyle.signButton,{backgroundColor: '#000',borderTopWidth:1,borderLeftWidth:1,borderColor:'#a34100'}]}>
									<Text style={loginStyle.cancelText}>Sign Up</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity onPress={this.CheckConnectivity} >
								<View style={[loginStyle.signInButton,{backgroundColor: '#000',borderTopWidth:1,borderLeftWidth:1,borderColor:'#a34100'}]}>
									<Text style={loginStyle.cancelText}>Sign Up With Facebook</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => { this.props.navigation.navigate('UserForm',{PageType:'login'}); }} >


								<View style={[loginStyle.signButton]}>
									<Text style={loginStyle.cancelText}>Log in</Text>
								</View>
							</TouchableOpacity>



						</View>
					</View>
				</KeyboardAwareScrollView>
			</LinearGradient>
		)
	}
}




export default Login;

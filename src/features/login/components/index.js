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
import styles, { iconStyles, iconStylesGoogle } from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FontIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'
import I18n, { getLanguages } from 'react-native-i18n';
import firebaseotp from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';
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

///const applicationVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
class LoginScreen extends Component {
	//Initial state false for the switch. You can change it to true just to see.
	constructor(props) {
		super(props)
		this.unsubscribe = null;
	}
	state = {

		languages: [],
		selectedRadio: 0,
		loginType: 'kol',
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
		verificationCode: '',
		userId: ''

	};


	//facebook login...
	onLoginFacebook = () => {
		LoginManager.logInWithPermissions(['public_profile', 'email'])
			.then(result => {
				if (result.isCancelled) {
					alert('cancelled');
				}
				console.log(
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
				console.log(`Facebook Login with user: ${JSON.stringify(currentFBUser)}`);
				//NOT WORKING 
				const { currentUser } = firebase.auth();
				const uid = currentUser.uid;
				//NOT WORKING
				firebase.auth().onAuthStateChanged(authedUser => {
					if (authedUser) {
						console.log(`Facebook Login with user: ${JSON.stringify(authedUser)}`);
						AsyncStorage.setItem(
							"LoginType", this.state.loginType)
						AsyncStorage.setItem(
							"Login", "facebook")
						this.props.navigation.navigate('HomeForm')
						//Actions.home();
					} else {
						console.log(`Check Auth: ${JSON.stringify(authedUser)}`);
						//	Actions.checkAuth();
					}
				});
			})
			.catch(error => {
				console.log(`Login failed with ${error}`);
			});
	};





	componentDidMount() {
		//	this.setupGoogleSignin();

		GoogleSignin.configure({
			webClientId: GoogleClientID,
			offlineAccess: true,
			hostedDomain: '',
			forceConsentPrompt: true,
		});
		if (!firebaseotp.apps.length) {
			firebaseotp.initializeApp(firebaseConfig)
		}
		this.unsubscribe = firebaseotp.auth().onAuthStateChanged((user) => {
			if (user) {
				console.log(user.toJSON());
				this.setState({ user: user.toJSON() });
			} else {
				// User has been signed out, reset the state
				this.setState({
					user: null,
					message: '',
					codeInput: '',
					phonenumber: '+91',
					confirmResult: null,
				});
			}
		});

	}
	componentWillUnmount() {
		if (this.unsubscribe) this.unsubscribe();
	}


	_GooglesignIn = async () => {

		try {
			await GoogleSignin.hasPlayServices();
			const userInfo = await GoogleSignin.signIn()
				.then((user) => {
					console.log(user);
					AsyncStorage.setItem(
						"LoginType", this.state.loginType)
					AsyncStorage.setItem(
						"Login", "google")
					this.props.navigation.navigate('HomeForm')
				})
				.catch((err) => {
					console.log('WRONG SIGNIN', err);
				})
				.done();
			this.setState({ userInfo: userInfo, loggedIn: true });
		} catch (error) {
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				// user cancelled the login flow
			} else if (error.code === statusCodes.IN_PROGRESS) {
				// operation (f.e. sign in) is in progress already
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				// play services not available or outdated
			} else {
				// some other error happened
			}
		}
	};

	getCurrentUserInfo = async () => {
		try {
			const userInfo = await GoogleSignin.signInSilently();
			this.setState({ userInfo });
		} catch (error) {
			if (error.code === statusCodes.SIGN_IN_REQUIRED) {
				// user has not signed in yet
				this.setState({ loggedIn: false });
			} else {
				// some other error
				this.setState({ loggedIn: false });
			}
		}
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
			console.log(this.state.phonenumber)
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
			<LinearGradient style={{ minHeight: Dimensions.get('window').height }} colors={['#FFF', '#FFF']} locations={[0.5, 1]}>

				<KeyboardAwareScrollView enableOnAndroid>
					<View style={styles.container}>
						<Image style={{ width: 60, height: 100, borderRadius: 100, marginTop: 0, marginBottom: 0, alignSelf: "center" }} source={require("../../../assets/images/HUG_Final.png")} />
						<View style={{ paddingBottom: 20, alignSelf: "center" }}>
							<Text style={styles.title}>{I18n.t('Login')}</Text>
						</View>
						<View style={{ alignSelf: "center" }}>
							<RadioForm
								formHorizontal={true}
								animation={true}
							>
								{/* To create radio buttons, loop through your array of options */}
								{
									radioButtondata.map((obj, i) => (
										<RadioButton labelHorizontal={true} key={i} >
											{/*  You can set RadioButtonLabel before RadioButtonInput */}
											<RadioButtonInput
												obj={obj}
												index={i}
												isSelected={this.state.selectedRadio === i}
												onPress={() => this.onChangeRadioButton(i, obj.value)}
												borderWidth={2}
												buttonInnerColor={'#EF757B'}
												buttonOuterColor={this.state.selectedRadio === i ? '#EF757B' : '#EF757B'}
												buttonSize={10}
												buttonOuterSize={20}

											/>
											<RadioButtonLabel
												obj={obj}
												index={i}
												labelHorizontal={true}
												onPress={() => this.onChangeRadioButton(i, obj.value)}
												labelStyle={{ fontSize: 15, color: '#000', marginRight: 20 }}
												labelWrapStyle={{}}
											/>
										</RadioButton>
									))
								}
							</RadioForm>
						</View>
						<View style={styles.formWrap}>

							<View style={styles.contain}>
								<Text style={styles.inputLabel}>{I18n.t('Phone Number')}</Text>
								<TextInput style={[styles.input]}
									underlineColorAndroid="transparent"
									placeholder={I18n.t('Phone Number')}
									selectionColor="#00beed"
									placeholderTextColor="#8fa1b3"
									autoCapitalize="none"
									keyboardType="phone-pad"
									onChangeText={
										// Set this.state.email to the value in this Input box
										(value) => this.onChangePhone(value)
									}
								/>
								<Text style={styles.errors}>{this.state.erremail}</Text>



							</View>


							<TouchableOpacity onPress={this.handleSendCode} >
								<View style={[styles.signInButton]}>
									<Text style={styles.cancelText}>{I18n.t('Sign In')}</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => { this.props.navigation.navigate('RegisterForm'); }} >

								{/* <TouchableOpacity   onPress={this.googleAuth.bind(this)} > */}
								<View style={[styles.signButton]}>
									<Text style={styles.cancelText}> {I18n.t('Sign Up')}</Text>
								</View>
							</TouchableOpacity>


							<View style={styles.buttons}>
								<View style={{ marginTop: 0 }}>
									<FontIcon.Button
										name="facebook"
										backgroundColor="#3b5998"
										onPress={this.onLoginFacebook}
										{...iconStyles}
									>
										{I18n.t('FaceBook')}
									</FontIcon.Button>
								</View>




								<TouchableOpacity   >
									<View style={{ marginTop: 20 }}>

										<FontIcon.Button
											name="google"
											backgroundColor="#DD4B39"
											onPress={this._GooglesignIn}
											{...iconStylesGoogle}
										>
											{I18n.t('Google')}
										</FontIcon.Button>

									</View>
								</TouchableOpacity>


							</View>
						</View>
					</View>
				</KeyboardAwareScrollView>
			</LinearGradient>
		)
	}
}




export default LoginScreen;

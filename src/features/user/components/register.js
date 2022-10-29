import React, { useState, Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
//	TextInput,
	Image,
	PermissionsAndroid,
	Dimensions,
	AsyncStorage,
	Keyboard
} from 'react-native';
import {registerStyle} from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import ToggleSwitch from 'toggle-switch-react-native';
import { insertUsers } from 'services';
import { TextInput } from 'react-native-paper';
import { initialisedb } from 'config/db'
import Toast from 'react-native-simple-toast';
import ImgToBase64 from 'react-native-image-base64';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'

class Registerpage extends Component {


	inputFocusColor = '#EF757B'
	inputBlurColor = '#EF757B'
	

	//Initial state false for the switch. You can change it to true just to see.
	state = {
		email: '',
		password: '',
		confirmPassword: '',
		confirmationCode: '',
		fullname:'',
		modalVisible: false,
		selectedIndex: 0,
		switchValue: false,
		unameBorderColor: this.inputBlurColor,
		passBorderColor: this.inputBlurColor,
		secureTextEntry: true,
		rememeberMe: true,
		icEye: 'visibility-off',
		icPassEye: 'visibility-off',
		iconSize: 25,
		label: 'Password',
		iconColor: "#222222",
		isPassword: true,
		iscPassword: true,
		visible: false,
		selectedRadio: 0,

	};


	componentDidMount() {

	}

	changePwdType = () => {
		const { isPassword } = this.state;
		// set new state value
		this.setState({
			icEye: isPassword ? "visibility" : "visibility-off",
			isPassword: !isPassword,
		});

	};

	changeConfirmPwdType = () => {
		const { iscPassword } = this.state;
		// set new state value
		this.setState({
			icPassEye: iscPassword ? "visibility" : "visibility-off",
			iscPassword: !iscPassword,
		});

	};

	handleInputBlur = (inputName) => {
		if (inputName === 'uname') {
			this.setState({
				unameBorderColor: this.inputBlurColor
			})
		} else if (inputName === 'pass') {
			this.setState({
				passBorderColor: this.inputBlurColor
			})
		}

	}

	handleInputFocus = (inputName) => {
		if (inputName === 'uname') {
			this.setState({
				unameBorderColor: this.inputFocusColor
			})
		} else if (inputName === 'pass') {
			this.setState({
				passBorderColor: this.inputFocusColor
			})
		}

	}

	onChangePassword = (value) => {
		this.setState({ password: value })
		if(value==""){
			this.setState({errpassword:"password required"})
	   }else{
		   this.setState({errpassword:''})
	   }

	}

	onChangeConfirmPassword = (value) => {
		this.setState({ confirmPassword: value })

		if(value==""){
			this.setState({errcpassword:"confirmPassword required"})
	   }else  if(value!= this.state.password){
		this.setState({errcpassword:"Mismatch password"})
	   } else {
		   this.setState({errcpassword:''})
	   }
	

	}
	onChangeEmail = (value) => {
		this.setState({ email: value })
		if(value==""){
			this.setState({erremail:"email required"})
	   }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
		   this.setState({erremail:'Invalid email'})
	   }else {
		   this.setState({erremail:''})
	   }

	}
	onChangeName=(value)=>{
		this.setState({ fullname: value })
		if(value==""){
			this.setState({errname:"Name required"})
	   }else{
		   this.setState({errname:''})
	   }
	
	}

 signUp=()=>{

	this.validate()
	if(this.state.errname==''&&this.state.erremail==''&&this.state.errpassword==''&&this.state.errcpassword==''){
	//	this.props.navigation.navigate('HomeForm');
	AsyncStorage.setItem(
		"LoginType", 'signup')  
	
			const fbuser={username:this.state.fullname,fullname:this.state.fullname,email:this.state.email,password:this.state.password,fbid:'',image:"rr.png"}
			this.props.loginActions.register(fbuser)
		
	
}
	//this.props.navigation.navigate('UserForm',{PageType:'login'}); ../../../assets/images/user.png
 }


 validate(){
    //console.log("userrrr",this.state.email)

	if(this.state.fullname==""){
		this.setState({errname:"Name required"})
   }else{
	   this.setState({errname:''})
   }


	if(this.state.email==""){
 		this.setState({erremail:"email required"})
	}else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
		this.setState({erremail:'Invalid email'})
	}else {
		this.setState({erremail:''})
	}



	if(this.state.password==""){
		this.setState({errpassword:"password required"})
   }else{
	   this.setState({errpassword:''})
   }

    if(this.state.confirmPassword==""){
		this.setState({errcpassword:"confirmPassword required"})
   }else  if(this.state.confirmPassword!=this.state.password){
	this.setState({errcpassword:"Mismatch password"})
   } else {
	   this.setState({errcpassword:''})
   }

}


	render() {
		const { icEye, isPassword, iscPassword, icPassEye } = this.state;
		const radioButtondata = [
			{
				label: 'KOL',
				value: 'valueOne'
			},
			{
				label: 'Member',
				value: 'valueTwo'
			}
		]
		const checkRadio = (value) => {
			setRadio(value)
		}

		return (
			<LinearGradient style={{ minHeight: Dimensions.get('window').height }} colors={['#000', '#000']} locations={[0.5, 1]}>
				<KeyboardAwareScrollView enableOnAndroid>
					<View style={registerStyle.container}>
					<View style={{ paddingBottom: 20 ,flexDirection:'row'}}>
						<View style={{flex:1}}>
					<TouchableOpacity style={{ width: "30%" }} onPress={() => { this.props.navigation.navigate('UserForm',{PageType:'intro'}); }} >
									<View style={[registerStyle.signInButton, {  flexDirection:'row',marginRight: 5, paddingVertical: 5,}]}>
										<Ionicons  
											name={'ios-arrow-back'}
											size={20}
											style={{marginLeft:10,marginRight:5}}
											color={'#FFF'} />
										<Text style={registerStyle.cancelText}>Back</Text>
									</View>
								</TouchableOpacity>
								</View>
								<View style={{ width: "20%" }}>
								<TouchableOpacity style={{ width: "100%" }} onPress={() => { this.props.navigation.navigate('UserForm',{PageType:'login'}); }} >
									<View style={[registerStyle.signInButton, { marginRight: 5 , paddingVertical: 5,}]}>
										<Text style={registerStyle.cancelText}>Log In</Text>
									</View>
								</TouchableOpacity>
								</View>
						</View>
						<View style={{ paddingBottom: 20, alignSelf: "center" }}>
							<Text style={registerStyle.title}>Sign Up</Text>
						</View>

					
						<View style={registerStyle.formWrap}>

							<View style={registerStyle.contain}>


							
								<TextInput style={[registerStyle.input, { borderColor: this.state.unameBorderColor }]}
									underlineColorAndroid="transparent"
									underlineColor='#25383C'
									label="Full name"
									selectionColor="#00beed"
									placeholderTextColor="#8fa1b3"
									autoCapitalize="none"
									theme={{
										//roundness: 50,
									placeholderTextColor:'#FFF',
									
										colors: {
										  primary:'white',
										  underlineColor:'#FFF',
										  text: "white",
										  placeholder:"#FFF"
										},
										color:'#FFF'
									  }}
									onChangeText={
										// Set this.state.email to the value in this Input box
										(value) => this.onChangeName(value)
									}
								/>
								<Text style={registerStyle.errors}>{this.state.errname}</Text>


							


							
								<TextInput style={[registerStyle.input]}
									underlineColorAndroid="transparent"
									//placeholder="Phone"
									underlineColor='#25383C'
									label="Email"
									theme={{
										//roundness: 50,
									placeholderTextColor:'#FFF',
									
										colors: {
										  primary:'white',
										  underlineColor:'#FFF',
										  text: "white",
										  placeholder:"#FFF"
										},
										color:'#FFF'
									  }}
									selectionColor="#00beed"
								    placeholderTextColor="#8fa1b3"
									autoCapitalize="none"
									//	onBlur={() => this.handleInputBlur('uname')}
									//	onFocus={() => this.handleInputFocus('uname')}
									onChangeText={
										// Set this.state.email to the value in this Input box
										(value) => this.onChangeEmail(value)
									}
								/>

								<Text style={registerStyle.errors}>{this.state.erremail}</Text>


							
								<View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
									<View style={[registerStyle.inputPassword, { flexDirection: 'row', marginBottom: 0, paddingRight: 0 }]}>
										<TextInput style={{ flex: 1, fontWeight: 'bold',color:'#FFF',  backgroundColor: "#000", }}
											underlineColorAndroid="transparent"
											underlineColor='#25383C'
											label="Password"
											theme={{
												//roundness: 50,
											placeholderTextColor:'#FFF',
											
												colors: {
												  primary:'white',
												  underlineColor:'#FFF',
												  text: "white",
												  placeholder:"#FFF"
												},
												color:'#FFF'
											  }}
											//	secureTextEntry={this.state.secureTextEntry}
											secureTextEntry={isPassword}
											selectionColor="#00beed"
											placeholderTextColor="#8fa1b3"
											autoCapitalize="none"
											blurOnSubmit={true}
											onSubmitEditing={() => { Keyboard.dismiss() }}
											//	onBlur={() => this.handleInputBlur('pass')}
											//	onFocus={() => this.handleInputFocus('pass')}
											onChangeText={
												// Set this.state.email to the value in this Input box
												(value) => this.onChangePassword(value)
											}
										/>
										<Icon style={registerStyle.icon}
											name={icEye}
											size={25}
											color={'#FFF'}
											onPress={this.changePwdType}
										/>
									</View>
								</View>
								<Text style={registerStyle.errors}>{this.state.errpassword}</Text>

								
								
								<View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
									<View style={[registerStyle.inputPassword, { flexDirection: 'row', borderColor: this.state.passBorderColor, flex: 1, marginBottom: 0, paddingRight: 0 }]}>
										<TextInput style={{ flex: 1, fontWeight: 'bold',  backgroundColor: "#000",borderColor:"	#696969",  }}
											//underlineColorAndroid="transparent"
											label="Confirm password"
											//	secureTextEntry={this.state.secureTextEntry}
											secureTextEntry={iscPassword}
											selectionColor="#00beed"
											underlineColor='#25383C'
											placeholderTextColor="#8fa1b3"
											theme={{
												//roundness: 50,
											placeholderTextColor:'#FFF',
											//underlineColor:"#FFF",
												colors: {
												  primary:'white',
												  underlineColor:'red',
												  text: "white",
												  placeholder:"#FFF"
												},
												color:'#FFF'
											  }}
											autoCapitalize="none"
											blurOnSubmit={true}
											onSubmitEditing={() => { Keyboard.dismiss() }}
											//	onBlur={() => this.handleInputBlur('pass')}
											//	onFocus={() => this.handleInputFocus('pass')}
											onChangeText={
												// Set this.state.email to the value in this Input box
												(value) => this.onChangeConfirmPassword(value)
											}
										/>
										<Icon style={registerStyle.icon}
											name={icPassEye}
											size={25}
											color={'#FFF'}
											onPress={this.changeConfirmPwdType}
										/>
									</View>
								</View>
								<Text style={registerStyle.errors}>{this.state.errcpassword}</Text>


							</View>
							<View style={{ padding: 20, alignSelf: "center" }}>
							<Text style={registerStyle.BottomText}>By continuing you agree to Tone's Term &</Text>
							<Text style={registerStyle.BottomText}>conditions and privacy policy</Text>
						</View>
							<View style={registerStyle.btnsign}>

								<TouchableOpacity style={{ width: "100%" }} onPress={() => {this.signUp() }} >
									<View style={[registerStyle.signInButton, { marginRight: 5 }]}>
										<Text style={registerStyle.cancelText}>Sign Up</Text>
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




export default Registerpage;

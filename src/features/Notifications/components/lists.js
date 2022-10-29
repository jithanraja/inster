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
	ScrollView,
	BackHandler
} from 'react-native';
import { listStyles } from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import LinearGradient from 'react-native-linear-gradient';

import Header from '../../../components/Header';
// const translate = require('google-translate-api');

// translate('Ik spreek Engels', {to: 'en'}).then(res => {
//     //console.log(res.text);
//     //=> I speak English
//     //console.log(res.from.language.iso);
//     //=> nl
// }).catch(err => {
//     console.error(err);
// });
import axios from 'axios'
var qs = require('qs');
import  { API_URI } from '../../../_helpers/constants';
class NotificationsList extends Component {

	constructor() {
		super();
		this.state = { languageCode: 'en', loginType: '',userId:'' };
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
	}

	componentDidMount(){
		//console.log("RRRRRRRRR")
		AsyncStorage.getItem('userid').then((data) => {
			//console.log(data)

			this.setState({userId:data})
			this.props.notificationAction.allNotification(data)
		});
		
	}

	acceptNotification(notification){
	
		
		axios.post(`${API_URI}/insertFollowerBYStatus`, qs.stringify(notification))							
		.then(data => {
			
			this.props.notificationAction.allNotification(this.state.userId)
			//console.log("success",data.data)
		}).catch(err => {			
			//console.log(err)			 
		})
	
	  }



	componentWillMount() {
		AsyncStorage.getItem('LoginType').then((data) => {
			type = data;
			this.setState({ loginType: type })
			//console.log(type)
		});


		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}
	handleBackButtonClick() {
		this.props.navigation.navigate('HomeForm');
		return true;
	}

	_goBack = () => this.props.navigation.navigate('HomeForm');;

	render() {

     const {notification}=this.props

		return (

			<LinearGradient style={{ minHeight: Dimensions.get('window').height }} colors={['#000', '#000']} locations={[0.5, 1]}>


				<Header goBack={this._goBack} />
                <View>
					<Text style={{color:"#FFF",marginLeft:20,fontSize:18}}>Notifications</Text>
				</View>

				<KeyboardAwareScrollView  enableOnAndroid>
					<View style={listStyles.ListContent}>

					{notification.map((item, index) => (
						<View style={{ flexDirection: 'row', width: "90%",marginTop:10 }}>
							<View style={listStyles.postMenu}>
								<View>
									<Image style={listStyles.postImage} source={require("../../../assets/images/user.png")} />
								</View>

							</View>
							<View style={listStyles.titlePost}>
								<Text style={listStyles.titleText}>{(item.description).substring(0,100)}</Text>
								<View style={{ flexDirection: 'row' }}>
									<TouchableOpacity onPress={()=>{this.acceptNotification({id:item.id,userid:item.userid,friend_id:item.friend_id,status:"1"})}}>
									<Text style={listStyles.kmText}>Accept</Text>
									</TouchableOpacity>
									<TouchableOpacity onPress={()=>{this.acceptNotification({id:item.id,userid:item.userid,friend_id:item.friend_id,status:"0"})}}>
									<Text style={[listStyles.kmText, { marginLeft: 20, color: 'red' }]}>Reject</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
						))}
						{/* <View style={{ flexDirection: 'row', width: "90%",marginTop:20 }}>
							<View style={listStyles.postMenu}>
								<View>
									<Image style={listStyles.postImage} source={require("../../../assets/images/user.png")} />
								</View>

							</View>
							<View style={listStyles.titlePost}>
								<Text style={listStyles.titleText}>Taz Summer added an event to their likes</Text>
								<View style={{ flexDirection: 'row' }}>
								<Text style={[listStyles.kmText, { marginLeft: 20, color: 'blue' }]}>"House Every Evening"</Text> 
									
								</View>
							</View>
						</View>
						<View style={{ flexDirection: 'row', width: "90%",marginTop:20}}>
							<View style={listStyles.postMenu}>
								<View>
									<Image style={listStyles.postImage} source={require("../../../assets/images/user.png")} />
								</View>

							</View>
							<View style={listStyles.titlePost}>
								<Text style={listStyles.titleText}>SUZAN OKORIE sent you an invites to a private event</Text>
								<Text style={[listStyles.kmText, { marginLeft: 20, color: 'blue' }]}>"My Birthday Party"</Text> 
								<View style={{ flexDirection: 'row' }}>
									<Text style={listStyles.kmText}>Accept</Text>
									<Text style={[listStyles.kmText, { marginLeft: 20, color: 'red' }]}>Reject</Text>
								</View>
							</View>
						</View>

						<View style={{ flexDirection: 'row', width: "90%",marginTop:20}}>
							<View style={listStyles.postMenu}>
								<View>
									<Image style={listStyles.postImage} source={require("../../../assets/images/user.png")} />
								</View>

							</View>
							<View style={listStyles.titlePost}>
								<Text style={listStyles.titleText}>Jithan Raja Accept Your friend request</Text>
								
							</View>
						</View>

						<View style={{ flexDirection: 'row', width: "90%",marginTop:20}}>
							<View style={listStyles.postMenu}>
								<View>
									<Image style={listStyles.postImage} source={require("../../../assets/images/user.png")} />
								</View>

							</View>
							<View style={listStyles.titlePost}>
								<Text style={listStyles.titleText}>A. Samanther sent you a friend request</Text>
								<View style={{ flexDirection: 'row' }}>
									<Text style={listStyles.kmText}>Accept</Text>
									<Text style={[listStyles.kmText, { marginLeft: 20, color: 'red' }]}>Reject</Text>
								</View>
							</View>
						</View>


						<View style={{ flexDirection: 'row', width: "90%",marginTop:20}}>
							<View style={listStyles.postMenu}>
								<View>
									<Image style={listStyles.postImage} source={require("../../../assets/images/user.png")} />
								</View>

							</View>
							<View style={listStyles.titlePost}>
								<Text style={listStyles.titleText}>A. Samanther sent you a friend request</Text>
								<View style={{ flexDirection: 'row' }}>
									<Text style={listStyles.kmText}>Accept</Text>
									<Text style={[listStyles.kmText, { marginLeft: 20, color: 'red' }]}>Reject</Text>
								</View>
							</View>
						</View>


						<View style={{ flexDirection: 'row', width: "90%",marginTop:20}}>
							<View style={listStyles.postMenu}>
								<View>
									<Image style={listStyles.postImage} source={require("../../../assets/images/user.png")} />
								</View>

							</View>
							<View style={listStyles.titlePost}>
								<Text style={listStyles.titleText}>A. Samanther sent you a friend request</Text>
								<View style={{ flexDirection: 'row' }}>
								<Text style={[listStyles.kmText, { marginLeft: 20, color: 'blue' }]}>"House Every Evening"</Text> 
									
								</View>
							</View>
						</View>


						<View style={{ flexDirection: 'row', width: "90%",marginTop:20}}>
							<View style={listStyles.postMenu}>
								<View>
									<Image style={listStyles.postImage} source={require("../../../assets/images/user.png")} />
								</View>

							</View>
							<View style={listStyles.titlePost}>
								<Text style={listStyles.titleText}>A. Samanther sent you a friend request</Text>
								<View style={{ flexDirection: 'row' }}>
									<Text style={listStyles.kmText}>Accept</Text>
									<Text style={[listStyles.kmText, { marginLeft: 20, color: 'red' }]}>Reject</Text>
								</View>
							</View>
						</View>


						<View style={{ flexDirection: 'row', width: "90%",marginTop:20}}>
							<View style={listStyles.postMenu}>
								<View>
									<Image style={listStyles.postImage} source={require("../../../assets/images/user.png")} />
								</View>

							</View>
							<View style={listStyles.titlePost}>
								<Text style={listStyles.titleText}>A. Samanther sent you a friend request</Text>
								<View style={{ flexDirection: 'row' }}>
									<Text style={listStyles.kmText}>Accept</Text>
									<Text style={[listStyles.kmText, { marginLeft: 20, color: 'red' }]}>Reject</Text>
								</View>
							</View>
						</View>


						<View style={{ flexDirection: 'row', width: "90%",marginTop:20}}>
							<View style={listStyles.postMenu}>
								<View>
									<Image style={listStyles.postImage} source={require("../../../assets/images/user.png")} />
								</View>

							</View>
							<View style={listStyles.titlePost}>
								<Text style={listStyles.titleText}>A. Samanther sent you a friend request</Text>
								<View style={{ flexDirection: 'row' }}>
									<Text style={listStyles.kmText}>Accept</Text>
									<Text style={[listStyles.kmText, { marginLeft: 20, color: 'red' }]}>Reject</Text>
								</View>
							</View>
						</View>


						<View style={{ flexDirection: 'row', width: "90%",marginTop:20}}>
							<View style={listStyles.postMenu}>
								<View>
									<Image style={listStyles.postImage} source={require("../../../assets/images/user.png")} />
								</View>

							</View>
							<View style={listStyles.titlePost}>
								<Text style={listStyles.titleText}>A. Samanther sent you a friend request</Text>
								<View style={{ flexDirection: 'row' }}>
									<Text style={listStyles.kmText}>Accept</Text>
									<Text style={[listStyles.kmText, { marginLeft: 20, color: 'red' }]}>Reject</Text>
								</View>
							</View>
		</View> */}


						
					</View>








				</KeyboardAwareScrollView>

			</LinearGradient>

		)
	}
}



export default NotificationsList;

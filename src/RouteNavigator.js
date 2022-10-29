import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {createAppContainer,	createSwitchNavigator,} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from 'features/HomePage/containers';

import LocationScreen from 'features/Location/containers';
import UploadScreen from 'features/uploads/containers';
import Nofificationscreen from 'features/Notifications/containers';
import VibesScreen from 'features/Vibes/containers';

import ProfileScreen from 'features/Profile/containers';
import chatScreen from 'features/Chat/containers';

import UserFormScreen from 'features/user/containers';
import UploadFormScreen from 'features/uploads/containers';
//import Intro from "features/ReminderSet/screens/intro";

import VenueScreen from 'features/Venue/containers';
import * as firebase from 'firebase'
// const firebaseConfig = {
//   apiKey: "AIzaSyDdp023PrOGGC-e7BnxjRNeA82uMMHLXLo",
//   databaseURL: "https://socialwal-1580994701445.firebaseio.com",
// }
// firebase.initializeApp(firebaseConfig)




export class Profileimage extends Component {
	constructor() {
		super()
		this.state = {
			data: ''

		}
	}
	// console.log("Profile pic")
	componentDidMount() {
		AsyncStorage.getItem('profileimage').then((data) => {
	
			this.setState({ data: data })

		})
	}

	displayVal() {
		if (this.state.data != '' & this.state.data != null) {
			return (<Image style={{ width: 30, height: 30, alignSelf: "center", margin: 10, marginTop: 0, borderRadius: 30 }} source={{ uri: this.state.data }} />);
		}
		else {
			return (<Image style={{ width: 30, height: 30, alignSelf: "center", margin: 10, marginTop: 0, borderRadius: 30 }} source={require("./assets/images/user.png")} />);
		}


	}
	render() {

		return (
			this.displayVal()
			
		)

	};

}

export const createRootNavigator = () => {

     



	const TabScreen = createMaterialBottomTabNavigator(
		{
			Home: {
				screen: HomeScreen,
				navigationOptions: {
					 
					tabBarIcon: ({ tintColor }) => (
						<View>
							<Icons name={"ios-home"} color={tintColor} size={25} />
						</View>),
				},
				params: {
					navigationPageType:"home"
				}
			},
			Profile: {
				title:'',
				screen: ProfileScreen,

				navigationOptions: {
					 
					tabBarIcon: ({ tintColor }) => (
						<View>
							{<Profileimage />}
							{/* <Image style={{ width: 30, height: 30, alignSelf: "center" ,margin:10,marginTop:0,borderRadius:30}} source={require("./assets/images/user.png")} /> */}
						</View>),
				},
				params: {
					navigationPageType:"profile"
				}
			},


			uploads: {
				
				screen: UploadScreen,
				navigationOptions: {
					 
					tabBarIcon: ({ tintColor }) => (
						<View>
							<Image style={{ width: 35, height: 35, alignSelf: "center" ,margin:10,marginTop:0}} source={require("./assets/images/camera.png")} />
							{/* <Entypo name={"camera"} color={tintColor} size={25} /> */}
						</View>),
				},
				params: {
					navigationPageType:"camera"
				}
			},

			locations: {
				screen: LocationScreen,
				navigationOptions: {
					 
					tabBarIcon: ({ tintColor }) => (
						<View>
							<Icons name={"md-locate"} color={tintColor} size={25} />
						</View>),
				},
				params: {
					navigationPageType:"location"
				}

			},


			Vibes: {
				screen: VibesScreen,
				navigationOptions: {
					 
					tabBarLabel: "",
					tabBarIcon: ({ tintColor }) => (
						<View>
								<Image style={{ width: 35, height: 35, alignSelf: "center" }} source={require("./assets/images/vibeslogo.png")} />
							{/* <Fontisto name={"viber"} color={tintColor} size={25} /> */}
						</View>),
				},
				params: {
					navigationPageType:"list"
				}
			},
		},

		{
			activeColor: '#00beed',
			inactiveColor: '#FFFFFF',

			shifting: false,
			 
				labeled: false,
			 
			barStyle: { backgroundColor: '#000000' },
		}

	);

	//making a StackNavigator to export as default
	const App = createStackNavigator({

		TabScreen: {
			screen: TabScreen,
			navigationOptions: {
				header: null,
			},
		},
	});



	  
	const AppContainer = createSwitchNavigator(
		{

			
			HomeForm: {
				screen: App,
				navigationOptions: {
					header: null
				}
			},
		 
			Chat: {
				screen: chatScreen,
				navigationOptions: {
					header: null
				}
			},
			
		
			
			LocationForm: {
				screen: LocationScreen,
				navigationOptions: {
					header: null
				}
			},
			
			NotificationForm: {
				screen: Nofificationscreen,
				navigationOptions: {
					header: null
				}
			},
			
		
		
			ProfileForm: {
				screen: ProfileScreen,
				navigationOptions: {
					header: null
				}
			},
			UserForm: {
				screen: UserFormScreen, 
				navigationOptions: {
					header: null,
				},
				params: {
					PageType:"intro"
				}
			},
			VenueForm: {
				screen: VenueScreen, 
				navigationOptions: {
					header: null,
				},
				
			},
			MainForm: {
				screen: HomeScreen, 
				navigationOptions: {
					header: null,
				}
			},
		
			UploadForm: {
				screen: UploadFormScreen, 
				navigationOptions: {
					header: null,
				},
				params: {
					navigationPageType:"share"
				}
			
			},


			VibesForm: {
				screen: VibesScreen,
				navigationOptions: {
					header:null
				}
			},
		
		},		
		{
			initialRouteName: "UserForm"
		}
	);
	return createAppContainer(AppContainer)
};

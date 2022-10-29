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
	SafeAreaView,
	TextInput,

	BackHandler
} from 'react-native';

import axios from 'axios'

import  { API_URI } from '../../../_helpers/constants';
var qs = require('qs');
import { MemberStyles, MainHomeStyles } from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icons from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-simple-toast';
import I18n, { getLanguages } from 'react-native-i18n';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import DatePicker from 'react-native-datepicker'
import Textarea from 'react-native-textarea';
import { Appbar } from "react-native-paper";
import Header from '../../../components/Header'
import Geolocation from '@react-native-community/geolocation';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Geocoder from 'react-native-geocoding';
//import Contacts from 'react-native-contacts';
import { insertStory } from "services";
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
Geocoder.init("AIzaSyCF5jyxsZuDQVQncKCMbcZd4QdtE5qDvng");
//Geocoder.init("AIzaSyDdp023PrOGGC-e7BnxjRNeA82uMMHLXLo", {language : "en"});
class ShareVibes extends Component {

	constructor() {
		super();
		this.state = {
			languageCode: 'en',
			selected_date: "",
			name: "",
			description: "",
			index: 0,
			setIndex: 0,
			contacts: [],
			location: [],
			followers:[],
			followers:[],
			SelectedFakeContactList: [],
			SelectedLocationList: [],
			SelectedFollowingList:[],
			SelectedFollowersList:[],
			userId:'',
			routes: [
				{ key: 'friends', title: 'Friends' },
				{ key: 'location', title: 'Location' },
			],
			currentLongitude: 'unknown',
			currentLatitude: 'unknown',
			loading:false
		}
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

	}

	componentDidMount = () => {


		// AsyncStorage.getItem('userid').then((data) => {
		// 	// userid = data;
		// 	//this.props.friendsAction.getAllFriends(data)
		// 	});

		AsyncStorage.getItem('userid').then((data) => {
			// userid = data;
			 this.setState({ userId: data })
			});

		var that = this;
		//Checking for the permission just after component loaded
		if (Platform.OS === 'ios') {
			this.callLocation(that);
		} else {
			async function requestLocationPermission() {
				try {
					const granted = await PermissionsAndroid.request(
						PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
						'title': 'Location Access Required',
						'message': 'This App needs to Access your location'
					}
					)
					if (granted === PermissionsAndroid.RESULTS.GRANTED) {
						//To Check, If Permission is granted
						that.callLocation(that);
					} else {
						alert("Permission Denied");
					}
				} catch (err) {
					alert("err", err);
					console.warn(err)
				}
			}







			requestLocationPermission();

		}



		AsyncStorage.getItem('userid').then((data) => {

			this.props.friendsAction.getAllFriends(data)
		});

	}








	callLocation(that) {
		//alert("callLocation Called");
		Geolocation.getCurrentPosition(
			//Will give you the current location
			(position) => {
				const currentLongitude = JSON.stringify(position.coords.longitude);
				//getting the Longitude from the location json
				const currentLatitude = JSON.stringify(position.coords.latitude);
				//getting the Latitude from the location json
				that.setState({ currentLongitude: currentLongitude });
				//Setting state Longitude to re re-render the Longitude Text
				that.setState({ currentLatitude: currentLatitude });
				//Setting state Latitude to re re-render the Longitude Text
			},
			(error) => //console.log(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
		that.watchID = Geolocation.watchPosition((position) => {
			//Will give you the location on location change
			////console.log("RAaa",position);
			const currentLongitude = JSON.stringify(position.coords.longitude);
			//getting the Longitude from the location json
			const currentLatitude = JSON.stringify(position.coords.latitude);
			//console.log(position.coords.longitude);
			//console.log(position.coords.latitude);

			this.props.locationAction.allDistance(position.coords.latitude, position.coords.longitude)
			Geocoder.from(position.coords.latitude, position.coords.longitude)
				.then(json => {
					var addressComponent = json.results[0].address_components[0];
					//console.log(addressComponent);
				})
				.catch(error => console.warn(error));
			//getting the Latitude from the location json
			that.setState({ currentLongitude: currentLongitude });
			//Setting state Longitude to re re-render the Longitude Text
			that.setState({ currentLatitude: currentLatitude });
			//Setting state Latitude to re re-render the Longitude Text
		});
	}

	

	static getDerivedStateFromProps(nextProps, prevState) {

		
		
		let update = {}


		if (nextProps.location !== prevState.location) {
			//	//console.log("nextprops",nextProps.listFriends)
			nextProps.location.map(info => {
				info.check = false;
				
				return nextProps.location;
			})
			update.location = nextProps.location
		}

		if (nextProps.followers !== prevState.followers) {

			nextProps.followers.map(info => {
				info.check = false;
			
				return nextProps.followers;
			})
		
		
			update.followers = nextProps.followers
		
			
		}

		if (nextProps.following !== prevState.following) {

			
			nextProps.following.map(info => {
				info.check = false;
			
				return nextProps.following;
			})

		
			update.following = nextProps.following
			
		}

		return update;


	}






	

	shareStory = async () => {

		let locationid = ""
		let followersid = ""
		let followingid = ""
		this.state.SelectedLocationList.forEach(locationId => {
			locationid = locationid + locationId.id + ","
		})
		this.state.SelectedFollowingList.forEach(followingId => {
			followingid = followingid + followingId.following_id + ","
		})

		this.state.SelectedFollowersList.forEach(followersId => {
			followersid = followersid + followersId.follower_id + ","
		})
   		  let userId= this.state.userId
        let friendId =followersid+followingid
		let story = Object.assign({story_title:this.props.navigation.state.params.storyImage.story_title}, { venue_id: locationid.substring(0, locationid.length - 1),userid: userId.substring(0, userId.length - 1)})
		//console.log("storeis")
		//console.log(story)
		this.setState({loading:true})
	   let localdata=this.props.navigation.state.params.storyImage
					
			// setTimeout(() => {
			
				axios.post(`${API_URI}/Insert_Storyboard`, qs.stringify(story))

				.then(data => {
					//console.log("success",data.data)
				  
					const fd = new FormData();  
					fd.append('image', {uri:localdata.image, name:'test.jpg', type:'image/jpg',types:this.props.navigation.state.params.fileType});
					fd.append('id',data.data.data)
					fd.append('types',this.props.navigation.state.params.fileType)
				   //  //console.log(venue.image)
					axios.post(`${API_URI}/storyimageupload` , fd
					)         
						.then(data =async()=> {
							this.setState({loading:true})
							const response = await insertStory(localdata.uripath, localdata.caption,this.state.userId);
						   Toast.show("Story added Succesfully", Toast.LONG)
						   this.props.navigation.navigate('HomeForm')
						}).catch(err => { 
						 //console.log("KKKKKKKKKKKKK")
							//console.log(err)
						 
						})
			   
				}).catch(err => {
				
					//console.log(err)
				 
				})
			//	this.props.storyAction.addStory(story)
			
			//}, 100)
			
	}

	selectLocation = (hey) => {
		//	//console.log(hey) 	
		this.props.location.map((item) => {
			if (item.id === hey.id) {
				item.check = !item.check
				if (item.check === true) {
					this.state.SelectedLocationList.push(item);
					//console.log('selected:' + this.state.SelectedLocationList);
				} else if (item.check === false) {
					const i = this.state.SelectedLocationList.indexOf(item)
					if (1 != -1) {
						this.state.SelectedLocationList.splice(i, 1)
						//console.log('unselect:' + item.check)
						return this.state.SelectedLocationList
					}
				}
			}
		})

		//this.props.onArrayChange(this.props.location)
		this.setState({ location: this.state.location })
	}


	pressFollowing = (hey) => {
		this.state.following.map((item) => {
			if (item.following_id === hey.following_id) {
				item.check = !item.check
				if (item.check === true) {
					this.state.SelectedFollowingList.push(item);
					//console.log('selected:' + item.username);
				} else if (item.check === false) {
					const i = this.state.SelectedFollowingList.indexOf(item)
					if (1 != -1) {
						this.state.SelectedFollowingList.splice(i, 1)
						//console.log('unselect:' + item.username)
						return this.state.SelectedFollowingList
					}
				}
			}
		})
		this.setState({ following: this.state.following })
	}


	pressFollowers = (hey) => {
	
		this.state.followers.map((item) => {
			if (item.follower_id === hey.follower_id) {
				item.check = !item.check
			
				if (item.check === true) {
					this.state.SelectedFollowersList.push(item);
					//console.log('selected:' + item.username);
				} else if (item.check === false) {
					const i = this.state.SelectedFollowersList.indexOf(item)
					if (1 != -1) {
						this.state.SelectedFollowersList.splice(i, 1)
						//console.log('unselect:' + item.username)
						return this.state.SelectedFollowersList
					}
				}
			}
		})
		this.setState({ followers: this.state.followers })
	}

	componentWillMount() {
		//	this.setState({location:this.props.location})
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

	componentWillUnmount() {
		//this.setState({location:this.props.location})
		Geolocation.clearWatch(this.watchID);
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}
	handleBackButtonClick() {
		this.props.navigation.navigate('HomeForm');
		return true;
	}
	handlechangeDate(value) {

		this.setState({ selected_date: value });

	}
	_goBack = () => this.props.navigation.navigate('HomeForm');





	onChangeName = (value) => {

		this.setState({ name: value })

	}
	onChangeDescription = (value) => {
		this.setState({ description: value })
	}


	handleIndexChange = index => {
		this.setState({ index: index });
	};

	componentWillUpdate() {
		//this.setState({location:this.props.location})
	}

	onSubmit = () => {
		const appointment = { name: this.state.name, description: this.state.description, date: this.state.selected_date, memberid: 6, kolid: 6, status: 1 }
		this.props.appoinmentActions.insertAppointment(appointment)
		Toast.show("Your Appoinment Added....", Toast.LONG)
	}


	render() {

		const { location } = this.props


		const renderTabBar = props => (
			<TabBar
				{...props}
				indicatorStyle={{ backgroundColor: '#FFFF' }}
				renderLabel={({ route, focused, color }) => (
					<Text style={{ color: focused ? "#FFF" : "#FFFF", margin: 8, fontWeight: "bold" }}>
						{route.title}
					</Text>
				)}
				style={{ backgroundColor: '#000', color: "#FFF", elevation: 1 }}
			/>
		);

		return (

			<LinearGradient style={{ flex: 1 }} colors={['#000', '#000']} locations={[0.5, 1]}>


				<Appbar.Header style={{ backgroundColor: '#000' }}>

					<Appbar.Action icon="close" onPress={this._goBack} style={MainHomeStyles.topIcon} color={"#FFF"} />

					<Appbar.Content
						title="Share The Vibes"
						subtitle=""
						titleStyle={{ alignSelf: 'center', marginBottom: 20, fontSize: 18 }}
					/>
					<View style={MainHomeStyles.headerRightIcon}>


						<TouchableOpacity onPress={this.shareStory}>
							<FontIcon style={MainHomeStyles.topIcon} color={"#FFF"} name={"send"} size={25} />
						</TouchableOpacity>





					</View>

				</Appbar.Header>

				<View style={{alignSelf:'center'}}>
  {/* <Bubbles size={10} color="#FFF" /> */}
 { this.state.loading?<Bars size={10} color="#FDAAFF" />:null}
  {/* <Pulse size={10} color="#52AB42" />
  <DoubleBounce size={10} color="#1CAFF6" /> */}
</View>
 
			
				<TabView
					navigationState={{ index: this.state.index, routes: this.state.routes }}
					indicatorStyle={{ color: "#FFF" }}
					//	style={{ backgroundColor: 'pink' }}

					renderTabBar={renderTabBar}
					renderScene={({ route }) => {


						switch (route.key) {

							case 'friends':

								return <KeyboardAwareScrollView style={{ flex: 1 }} enableOnAndroid>

                                            <Text style={{color:'#FFF',margin:20,marginBottom:0,fontWeight:'bold',fontSize:18}}>Followers</Text>
									{this.state.followers.map((item, intex) => (
										<TouchableOpacity style={[MemberStyles.tabWrapContain, { marginTop: 20 }]} onPress={() => {
											this.pressFollowers(item)
										}} >
											<View style={MemberStyles.listWrap}>
												<View style={MemberStyles.listLeftContent}>
													<View style={MemberStyles.postMenu}>
														<View>
															<Image style={MemberStyles.postImage} source={require("../../../assets/images/user.png")} />
														</View>

													</View>
												</View>
												<View style={{ width: '70%', justifyContent: 'center' }}>
													<Text style={MemberStyles.listRightTitleText}>{item.username}</Text>

												</View>
												<View style={{
													flex: 1,
													alignItems: 'flex-end',
													justifyContent: 'center'
												}}>
													{item.check
														? (
															<Icon name="ios-checkbox" size={25} color={"FFF"}></Icon>
														)
														: (
															<Icon name="ios-square-outline" size={25} color={"#FFF"}></Icon>
														)}
												</View>
											</View>

										</TouchableOpacity>

									))}


				
                               <Text style={{color:'#FFF',margin:20,marginBottom:0,fontWeight:'bold',fontSize:18}}>Following</Text>
									{this.state.following.map((item, intex) => (
										<TouchableOpacity style={[MemberStyles.tabWrapContain, { marginTop: 20 }]} onPress={() => {
											this.pressFollowing(item)
										}} >
											<View style={MemberStyles.listWrap}>
												<View style={MemberStyles.listLeftContent}>
													<View style={MemberStyles.postMenu}>
														<View>
															<Image style={MemberStyles.postImage} source={require("../../../assets/images/user.png")} />
														</View>

													</View>
												</View>
												<View style={{ width: '70%', justifyContent: 'center' }}>
													<Text style={MemberStyles.listRightTitleText}>{item.username}</Text>

												</View>
												<View style={{
													flex: 1,
													alignItems: 'flex-end',
													justifyContent: 'center'
												}}>
													{item.check
														? (
															<Icon name="ios-checkbox" size={25} color={"FFF"}></Icon>
														)
														: (
															<Icon name="ios-square-outline" size={25} color={"#FFF"}></Icon>
														)}
												</View>
											</View>

										</TouchableOpacity>

									))}


								</KeyboardAwareScrollView>;
							case 'location':
								return <KeyboardAwareScrollView style={{ flex: 1 }} enableOnAndroid>

									{this.state.location.map((item, intex) => (
										<TouchableOpacity style={[MemberStyles.tabWrapContain, { marginTop: 20 }]} onPress={() => {
											this.selectLocation(item)
										}} >
											<View style={[MemberStyles.tabWrapContain, { marginTop: 20 }]}>
												<View style={MemberStyles.listWrap}>
													<View style={MemberStyles.listLeftContent}>
														<MaterialIcon style={MemberStyles.icons} size={25} name={'map-marker'} color={'#FFF'} />
													</View>
													<View style={{ width: '70%', justifyContent: 'center' }}>
														<Text style={MemberStyles.listRightTitleText}>{item.title}</Text>

													</View>
													<View style={{
														flex: 1,
														alignItems: 'flex-end',
														justifyContent: 'center'
													}}>

														{


															item.check
																? (
																	<Icon name="ios-checkbox" size={25} color={"#FFF"}></Icon>
																)
																: (
																	<Icon name="ios-square-outline" size={25} color={"#FFF"}></Icon>
																)}
													</View>

												</View>

											</View>
										</TouchableOpacity>
									))}



								</KeyboardAwareScrollView>;
							default:
								return null;
						}
					}}
					onIndexChange={this.handleIndexChange}
				/>



			</LinearGradient>

		)
	}
}



export default ShareVibes;

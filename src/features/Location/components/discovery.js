import React, { useState, Component } from 'react';
import {
	View,
	Text,
	Dimensions,
	BackHandler,
	ScrollView,
	TouchableOpacity,
	Image,
	AsyncStorage,
	Keyboard,
	PermissionsAndroid,
	TouchableWithoutFeedback
} from 'react-native';
import { API_URI } from '../../../_helpers/constants';
var qs = require('qs');
import { groupStyles, KolStyles, MemberStyles } from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import LinearGradient from 'react-native-linear-gradient';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import I18n, { getLanguages } from 'react-native-i18n';
import { Appbar, Drawer, TextInput, } from "react-native-paper";
import { SearchBar, CheckBox, Button } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import Header from '../../../components/Header';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { IMAGE_URI } from '../../../_helpers/constants'
import VideoPlayer from 'react-native-video-player';
import Toast from 'react-native-simple-toast';
import axios from 'axios'
import Geolocation from '@react-native-community/geolocation';
import MaterialTabs from 'react-native-material-tabs';
class LocationComponent extends Component {

	constructor() {
		super();
		this.state = {
			languageCode: 'en', checked: false, video: { width: undefined, height: 200, duration: undefined },
			thumbnailUrl: undefined,
			videoUrl: undefined,
			index: 0,
			setIndex: 0,
			routes: [
				{ key: 'user', title: "User" },
				//	{ key: 'cities', title: "City"},
				{ key: 'signbord', title: "Signbords" },
			],
			search: false,
			userId: ''
		};
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
	}

	componentDidMount() {
		AsyncStorage.getItem('userid').then((data) => {

			this.setState({ userId: data })
		});

		this.props.friendsAction.getAllFollowerFollowing();
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
          console.log(granted)
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
	}

	componentWillMount() {

		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}
	handleBackButtonClick() {
		this.props.navigation.navigate('HomeForm');
		return true;
	}
	componentDidUpdate() {

	}
	handleIndexChange = index => {
		this.setState({ index: index });
	};
	_goBack = () => {
		Keyboard.dismiss()
		this.setState({
			search: false
		})

	};


	handleInputBlur = (inputName) => {
		if (inputName === 'uname') {
			// this.setState({
			// 	search: false
			// })

		}

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
		  (error) => console.log(error.message),
		  { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
		that.watchID = Geolocation.watchPosition((position) => {
		  //Will give you the location on location change
		  //console.log("RAaa",position);
		  const currentLongitude = JSON.stringify(position.coords.longitude);
		  //getting the Longitude from the location json
		  const currentLatitude = JSON.stringify(position.coords.latitude);
		  console.log(position.coords.longitude);
		  console.log(position.coords.latitude);
		  this.props.venueAction.allVenue({lattitude:position.coords.latitude,longitude:position.coords.longitude});
	   
		  //getting the Latitude from the location json
		  that.setState({ currentLongitude: currentLongitude });
		  //Setting state Longitude to re re-render the Longitude Text
		  that.setState({ currentLatitude: currentLatitude });
		  //Setting state Latitude to re re-render the Longitude Text
		});
	  }












	handleInputFocus = (inputName) => {
		if (inputName === 'uname') {
			this.setState({
				search: true
			})
		}

	}


	updateSearch = search => {



		if(search!=''){
			this.setState({ search:true });
		}else{

			this.setState({ search:false });
		}
		this.props.searchLocation(search)




	};
	setTab(tab) {

		this.setState({ selectedTab: tab });
		switch (tab) {
			case 0: this.setState({ process: true }); break;
			case 1: this.setState({ process: true }); break;
			case 2: this.setState({ process: false }); break;

		}
	}

	sendFollow(follow) {
		axios.post(`${API_URI}/sendNotification`, qs.stringify(follow))

			.then(data => {
				console.log("success", data.data)




			}).catch(err => {

				console.log(err)

			})
	}



	render() {
		//  console.log(this.props.followers)
		const { search } = this.state;
		const { venueArray } = this.props;
		const renderTabBar = props => (
			<TabBar
				{...props}
				indicatorStyle={{ backgroundColor: '#00beed' }}
				renderLabel={({ route, focused, color }) => (
					<Text style={{ color: focused ? "#00beed" : "#FFF", margin: 8, fontWeight: "bold" }}>
						{route.title}
					</Text>
				)}
				style={{ backgroundColor: '#000', color: "#FFF", elevation: 1, margin: 10 }}
			/>
		);


		return (
			// <TouchableWithoutFeedback onPress={Keyboard.dismiss} >

				<LinearGradient style={{ minHeight: Dimensions.get('window').height }} colors={['#000', '#000']} locations={[0.5, 1]}>

					<Appbar.Header style={{ backgroundColor: '#000' }}>
					{this.state.search?<TouchableOpacity 	onPress={() => this._goBack()}> 
				
					<AntDesignIcon style={{marginLeft: 10 }} color={"#FFF"} name={"arrowleft"} size={25} />
 </TouchableOpacity>:null
}
						{/* <Appbar.BackAction
						onPress={() => this._goBack()}
					/>
                       <View style={{alignSelf: 'center', marginLeft: 50,width:10}}></View> */}
						{/* <MaterialCommunityIcons style={{ alignSelf: 'center', marginLeft: 50 }} color={"#FFF"} name={"map-marker"} size={18} /> */}
						<Appbar.Content
							title="Reading"
							titleStyle={{ color: "#e1ad01", alignSelf: 'center' }}

						/>

					</Appbar.Header>

					<Text style={{ marginLeft: 10, fontSize: 22, color: '#FFF' }}>Discovery</Text>

					<View style={{ height: "9%" }}>
						<SearchBar
							placeholder="search"
							onChangeText={this.updateSearch}
							value={search}
							containerStyle={groupStyles.searchContainerStyle}
							inputContainerStyle={groupStyles.searchInputContainerStyle}
							inputStyle={groupStyles.searchInputStyle}
							searchIcon={{ color: '#FFF', size: 25 }}
							cancelIcon={{ color: '#FFF', size: 25 }}
							onBlur={() => this.handleInputBlur('uname')}
							onFocus={() => this.handleInputFocus('uname')}
							showCancel={true}
							leftIconContainerStyle={groupStyles.leftIconSeachContainerStyle}
							rightIconContainerStyle={[groupStyles.rightIconContainerStyle, { borderWidth: this.state.search != '' ? 1 : 0 }]}
						/>
					</View>




					{this.state.search ? <TabView
					style={{flex:1}}
						navigationState={{ index: this.state.index, routes: this.state.routes }}
						indicatorStyle={{ color: "#00beed" }}
						renderTabBar={renderTabBar}
						renderScene={({ route }) => {


							switch (route.key) {
								case 'user':
									return <KeyboardAwareScrollView style={{ flex: 1 }} enableOnAndroid>
										{this.props.followers.length != 0 ? <Text style={{ color: '#FFF', margin: 20, marginBottom: 0, fontWeight: 'bold', fontSize: 18 }}>Followers</Text> : null}
										{this.props.followers.map((item, intex) => (
											<TouchableOpacity style={[MemberStyles.tabWrapContain, { marginTop: 20 }]} onPress={() => {
												//	this.pressFollowers(item)
											}} >
												<View style={MemberStyles.listWrap}>
													<View style={MemberStyles.listLeftContent}>
														<View style={MemberStyles.postMenu}>
															<View>
																<Image style={MemberStyles.postImage} source={require("../../../assets/images/user.png")} />
															</View>

														</View>
													</View>
													<View style={{ width: '60%', justifyContent: 'center' }}>
														<Text style={MemberStyles.listRightTitleText}>{item.username}</Text>

													</View>
													{console.log(item)}
													<TouchableOpacity onPress={() => { this.sendFollow({ userid: this.state.userId, friend_id: item.follower_id }) }} style={{ width: '20%', justifyContent: 'center' }}>
														<Text style={{ color: '#FFF', alignSelf: 'center', backgroundColor: '#00beed', padding: 5 }}>Follow</Text>

													</TouchableOpacity>
												</View>

											</TouchableOpacity>

										))}


										{(this.props.followers.length != 0) ? null : <Text style={{ color: '#FFF', margin: 20, marginBottom: 0, fontWeight: 'bold', alignSelf: 'center', fontSize: 18 }}>No data found.</Text>}
{/* 										
										{this.props.following.length != 0 ? <Text style={{ color: '#FFF', margin: 20, marginBottom: 0, fontWeight: 'bold', fontSize: 18 }}>Following</Text> : null}
										{this.props.following.map((item, intex) => (
											<TouchableOpacity style={[MemberStyles.tabWrapContain, { marginTop: 20 }]} onPress={() => {
												//	this.pressFollowing(item)
											}} >
												<View style={MemberStyles.listWrap}>
													<View style={MemberStyles.listLeftContent}>
														<View style={MemberStyles.postMenu}>
															<View>
																<Image style={MemberStyles.postImage} source={require("../../../assets/images/user.png")} />
															</View>

														</View>
													</View>
													<View style={{ width: '60%', justifyContent: 'center' }}>
														<Text style={MemberStyles.listRightTitleText}>{item.username}</Text>

													</View>
													<TouchableOpacity onPress={() => {
														this.sendFollow({ userid: this.state.userId, friend_id: item.follower_id })
														this.setState({ changeColor: !this.state.changeColor })
													}} style={{ width: '20%', justifyContent: 'center' }}>
														<Text style={{ color: '#FFF', alignSelf: 'center', backgroundColor: '#00beed', padding: 5, borderRadius: 10 }}>Follow</Text>

													</TouchableOpacity>
												</View>

											</TouchableOpacity>

										))} */}


										<View style={{ height: 70 }}></View>


									</KeyboardAwareScrollView>;
								// case 'cities':
								// 	return <KeyboardAwareScrollView style={{ flex: 1 }} enableOnAndroid>
								// 		<View style={KolStyles.tabWrapContain}>
								// 			<View style={KolStyles.listWrap}>
								// 				<View style={KolStyles.listLeftContent}>
								// 					<Text style={KolStyles.listDayText}>03 </Text>
								// 					<Text style={KolStyles.listDateText}>Jan'20</Text>
								// 				</View>
								// 				<View style={{ width: '70%', justifyContent: "center" }}>
								// 					<Text style={KolStyles.listRightTitleText}>Walkin</Text>
								// 					<Text style={KolStyles.listRightContentText}>Gender Checkup</Text>
								// 					<Text style={KolStyles.listRightProcessText}>processing</Text>
								// 				</View>
								// 			</View>

								// 		</View>

								// 		<View style={KolStyles.tabWrapContain}>
								// 			<View style={KolStyles.listWrap}>
								// 				<View style={KolStyles.listLeftContent}>
								// 					<Text style={KolStyles.listDayText}>19 </Text>
								// 					<Text style={KolStyles.listDateText}>Nov'19</Text>
								// 				</View>
								// 				<View style={{ width: '70%' }}>
								// 					<Text style={KolStyles.listRightTitleText}>Walkin</Text>
								// 					<Text style={KolStyles.listRightContentText}>Lung Infection</Text>
								// 					<Text style={KolStyles.listRightProcessText}>processing</Text>
								// 				</View>
								// 			</View>

								// 		</View>



								// 	</KeyboardAwareScrollView>;
								case 'signbord':
									return <KeyboardAwareScrollView style={{ flex: 1 }} enableOnAndroid>

										{Object.keys(venueArray).map((keyName, i) => (
											<View style={groupStyles.topVideoContainer}>
												<Text style={{ color: "#FFF", margin: 5, fontSize: 18 }}>{keyName}</Text>
												<ScrollView contentContainerStyle={{ flexDirection: 'row' }}
													showsHorizontalScrollIndicator={false}
													horizontal={true} >
													{venueArray[keyName].map((item, intex) => (

														<TouchableOpacity onPress={() => { this.props.navigation.navigate('LocationForm', { LactionArray: venueArray[keyName], navigationPageType: 'fullview' }) }}>

															<View style={groupStyles.profileMenu}>

																<View style={{ alignItems: "center" }}>
																	{(item.image).substring((item.image).length - 3, (item.image).length) != "mp4" ? <Image style={groupStyles.viewContentImage} source={{ uri: IMAGE_URI + item.image }} /> : <VideoPlayer
																		endWithThumbnail
																		//autoplay
																		thumbnail={{ uri: this.state.thumbnailUrl }}
																		video={{ uri: IMAGE_URI + item.image }}
																		videoWidth={40}
																		videoHeight={20}
																		duration={this.state.video.duration}
																		ref={r => this.player = r}
																	/>}


																</View>
															</View>
															<View style={{ width: 150 }} >
																<Text style={groupStyles.imageText}>{item.description}</Text>
																<View style={groupStyles.dateContainer}>
																	<Text style={groupStyles.time}>{(item.opening_time).substring(0, 5)}-{(item.closing_time).substring(0, 5)}</Text>
																	<Text style={groupStyles.date}>{(item.date).substring(0, 10)}</Text>
																	<AntDesignIcon style={groupStyles.likeicon} color={"#FFFF"} name={"hearto"} size={10} />
																</View>
															</View>

														</TouchableOpacity>

													))}


												</ScrollView>

											</View>
										))}
										<View style={{ height: 50, marginTop: 10 }}>

										</View>




									</KeyboardAwareScrollView>;
								default:
									return null;
							}
						}}
						onIndexChange={this.handleIndexChange}
					/> : <KeyboardAwareScrollView style={{ flex: 1 }} enableOnAndroid>
                               
							{ Object.keys(venueArray).map((keyName, i) => (
								<View style={groupStyles.topVideoContainer}>
									<Text style={{ color: "#FFF", margin: 5, fontSize: 18 }}>{keyName}</Text>
									<ScrollView contentContainerStyle={{ flexDirection: 'row' }}
										showsHorizontalScrollIndicator={false}
										horizontal={true} >
										{venueArray[keyName].map((item, intex) => (

											<TouchableOpacity onPress={() => { this.props.navigation.navigate('LocationForm', { LactionArray: venueArray[keyName], navigationPageType: 'fullview' }) }}>

												<View style={groupStyles.profileMenu}>

													<View style={{ alignItems: "center" }}>
														{(item.image).substring((item.image).length - 3, (item.image).length) != "mp4" ? <Image style={groupStyles.viewContentImage} source={{ uri: IMAGE_URI + item.image }} /> : <VideoPlayer
															endWithThumbnail
															//autoplay
															thumbnail={{ uri: this.state.thumbnailUrl }}
															video={{ uri: IMAGE_URI + item.image }}
															videoWidth={40}
															videoHeight={20}
															duration={this.state.video.duration}
															ref={r => this.player = r}
														/>}


													</View>
												</View>
												<View style={{ width: 150 }} >
												<Text style={[groupStyles.imageText,{fontSize:14}]}>{(item.title)}</Text>
													<Text style={groupStyles.imageText}>{(item.description).substring(0, 50)}</Text>
													<View style={groupStyles.dateContainer}>
														<Text style={groupStyles.time}>{(item.opening_time).substring(0, 5)}-{(item.closing_time).substring(0, 5)}</Text>
														<Text style={groupStyles.date}>{(item.date).substring(0, 10)}</Text>
														<AntDesignIcon style={groupStyles.likeicon} color={"#FFFF"} name={"hearto"} size={10} />
													</View>
												</View>

											</TouchableOpacity>

										))}


									</ScrollView>

								</View>
							))}
							<View style={{ height: 50, marginTop: 10 }}>

							</View>




						</KeyboardAwareScrollView>}

				</LinearGradient>
			// </TouchableWithoutFeedback> 
		)
	}
}



export default LocationComponent;

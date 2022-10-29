import React, { useState, Component } from 'react';
import {
	View,
	Text,
	Image,
	Dimensions,
	AsyncStorage,
	BackHandler,
	TouchableOpacity
} from 'react-native';
import { listStyles } from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { Appbar, Drawer } from "react-native-paper";


class NotificationsList extends Component {

	constructor() {
		super();
		this.state = { languageCode: 'en', loginType: '', followers: [], userid: 0, myFollowingStory: [], };
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
	}

	componentDidMount() {
		AsyncStorage.getItem('userid').then((data) => {    
			//console.log("inside test",data)
			this.props.vibesAction.allVibes(data); 
		})
		////console.log("userid",this.state.userid)
		

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


	static getDerivedStateFromProps(nextProps, prevState) {
		let update = {}




		if (nextProps.myFollowingStory !== prevState.myFollowingStory) {
			let group = nextProps.myFollowingStory.reduce((r, a) => {
				r[a.following_id] = [...r[a.following_id] || [], a];
				return r;
			}, {});
			update.myFollowingStory = group;
		}




		return update;
	}



	navigationPage(value) {

		if (value.message_type == "venue") {

			this.props.navigation.navigate('Home', { navigationPageType: "home" });
		} else if (value.message_type == "share") {
			this.props.navigation.navigate('UploadForm', { navigationPageType: 'friendstories', story: this.state.myFollowingStory[value.friend_id] })
		} else {
			this.props.navigation.navigate('Vibes', { navigationPageType: 'followerChat' })
		}
	}


	_goBack = () => this.props.navigation.navigate('HomeForm');

	render() {
		const { followers } = this.props
	    //console.log(followers)

		return (
			<View style={{ flex:1,backgroundColor:'#000' }} >
				<Appbar.Header style={{ backgroundColor: "#000" }}>
					<Appbar.Content title={"Vibes"} titleStyle={{ fontSize: 22 }} />
					<Appbar.Action icon="note" color={"#FFF"} onPress={() => this.props.navigation.navigate('Vibes', { navigationPageType: 'followerChat' })} />
				</Appbar.Header>
				<KeyboardAwareScrollView enableOnAndroid > 
					<View style={listStyles.ListContent}>
						{followers.map((item, index) => (


							<TouchableOpacity onPress={() => { this.navigationPage(item) }} style={{ flexDirection: 'row', width: "85%" }}>
								<View style={listStyles.postMenu}>
									<View>
										<Image style={listStyles.postImage} source={require("../../../assets/images/user.png")} />
									</View>
								</View>
								<View style={[listStyles.titlePost]}>
									<View style={{ flexDirection: 'row' }}>
										<Text style={listStyles.kmText}>{item.title}</Text>
										{/* <Icon style={{ marginTop: 2 }} color={"#377bb7"} name={"camera"} size={15} /> */}
									</View>
						<Text style={listStyles.titleText}>{item.username}</Text>
									<Text style={listStyles.kmText}>View</Text>
								</View>
								<View style={[{ flexDirection: 'row-reverse', width: '40%' }]}>
									<View>
										<Text style={[listStyles.kmText, { color: "#FFFF" }]}>12:37pm</Text>
										<View style={listStyles.circle} >
											<Text style={{ color: "#FFFF", fontSize: 8, alignSelf: 'center' }}>1</Text>
										</View>
									</View>
								</View>
							</TouchableOpacity>
						))}
					</View>
				</KeyboardAwareScrollView>
			</View>
		)
	}
}

export default NotificationsList;

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
import { listStyles, MainHomeStyles, groupStyles, MemberStyles } from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { Appbar, Drawer, TextInput } from "react-native-paper";


class followingChat extends Component {

	constructor() {
		super();
		this.state = { loginType: '', followings: [], search: '' };
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
	}

	componentDidMount() {
		// this.props.vibesAction.allVibes();
		//   AsyncStorage.getItem('userid').then((data) => {

		// 	this.props.friendsAction.getAllFriends(data)
		// });

		AsyncStorage.getItem('userid').then((data) => {

			this.props.friendsAction.getAllFriends(data)
		});

	}

	componentWillMount() {


		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}


	static getDerivedStateFromProps(nextProps, prevState) {



		let update = {}




		if (nextProps.following !== prevState.following) {
			//console.log(nextProps.following)

			nextProps.following.map(info => {
				info.check = false;

				return nextProps.following;
			})

		
			update.following = nextProps.following
			update.followings = nextProps.following

		}

		return update;


	}


	pressFollowing = (hey) => {
		this.state.followings.map((item) => {
			if (item.following_id === hey.following_id) {
				item.check = !item.check

			}
		})
		this.setState({ followings: this.state.following })
	}

	shareStory() {
		this.props.navigation.navigate("Chat");
	}



	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}
	handleBackButtonClick() {
		this.props.navigation.navigate('VibesForm', { navigationPageType: 'list' });
		return true;
	}

	_goBack = () => this.props.navigation.navigate('Vibes', { navigationPageType: 'list' });


	onSearchFriend = (val) => {
		this.setState({ interest: val })
		let data1 = this.state.following
		if (val != '') {
			data1 = this.state.followings.filter(l => {
				//console.log("KKKK", l.username == null ? null : l.username.toLowerCase() == (val.toLowerCase()))
				return l.username.toLowerCase().match(val.toLowerCase());
			});

		}
		this.setState({ followings: data1 })
	}



	render() {
		const { followers } = this.props

		const { search } = this.state;

		return (

			<View style={{ flex: 1, backgroundColor: '#000' }} >




				<Appbar.Header style={{ backgroundColor: '#000' }}>


					{/* <Appbar.BackAction style={{ marginTop: 10 }}
						onPress={() => this._goBack()}
					/> */}
    <TouchableOpacity   onPress={() => this._goBack()}>
				{/* <Appbar.BackAction
						
					/> */}

<AntDesignIcon style={{marginLeft: 10 }} color={"#FFF"} name={"arrowleft"} size={25} />
			</TouchableOpacity>

					<TextInput
						style={{ height: 40, backgroundColor: '#000', borderWidth: 1, flex: 1 }}
						onChangeText={(text) => { this.onSearchFriend(text) }}
						underlineColor='#fff'
						placeholder="search"
						placeholderTextColor='#FFF'
						theme={{ colors: { text: '#FFF', primary: '#FFF', placeholder: 'white', } }}
						value={this.state.interest}
					/>
					<View style={MainHomeStyles.headerRightIcon}>


						<TouchableOpacity onPress={() => this.shareStory()}>
							<Text style={{ color: '#FFF', fontSize: 16, marginTop: 10 }}>chat</Text>
						</TouchableOpacity>





					</View>


				</Appbar.Header>
				{/* <View style={{ height: "9%" }}>
					<SearchBar
						placeholder="search"
						onChangeText={this.updateSearch}
						value={search}
						containerStyle={groupStyles.searchContainerStyle}
						inputContainerStyle={groupStyles.searchInputContainerStyle}
						inputStyle={groupStyles.searchInputStyle}
						searchIcon={{ color: '#C0C0C0', size: 25 }}
						cancelIcon={{ color: '#C0C0C0', size: 25 }}
						showCancel={true}
						leftIconContainerStyle={groupStyles.leftIconSeachContainerStyle}
						rightIconContainerStyle={[groupStyles.rightIconContainerStyle, { borderWidth: this.state.search != '' ? 1 : 0 }]}
					/>
				</View> */}
				<KeyboardAwareScrollView enableOnAndroid>

					{this.state.followings.map((item, index) => (
						<TouchableOpacity style={[MemberStyles.tabWrapContain, { marginTop: 10 }]} onPress={() => {
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
									<Text style={[MemberStyles.listRightTitleText, { color: 'gray', fontSize: 15 }]}>@{item.username}</Text>
								</View>
								<View style={{
									flex: 1,
									alignItems: 'flex-end',
									justifyContent: 'center'
								}}>
									{item.check
										? (
											<Ionicons name="ios-checkbox" size={25} color={"FFF"}></Ionicons>
										)
										: (
											<Ionicons name="ios-square-outline" size={25} color={"#FFF"}></Ionicons>
										)}
								</View>
							</View>

						</TouchableOpacity>
					))}













				</KeyboardAwareScrollView>

			</View>

		)
	}
}



export default followingChat;

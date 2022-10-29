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
import { listStyles,MainHomeStyles,groupStyles,followingStyles } from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SearchBar } from 'react-native-elements';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';

import axios from 'axios'

import  { API_URI } from '../../../_helpers/constants';
var qs = require('qs');
import { Appbar, Drawer } from "react-native-paper";

class FollowingShare extends Component {

	constructor() {
		super();
		this.state = {  loginType: '',following:[], search: '' ,SelectedFollowingList:[],userId:''};
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
	}

  componentDidMount(){
	 // this.props.vibesAction.allVibes();
	//   AsyncStorage.getItem('userid').then((data) => {

	// 	this.props.friendsAction.getAllFriends(data)
	// });

	AsyncStorage.getItem('userid').then((data) => {
	

		this.setState({userId:data})
		this.props.friendsAction.getAllFriends(data)
	});

  }










  shareVenue = async () => {



	let followingid = ""

	this.state.SelectedFollowingList.forEach(followingId => {
		followingid = followingid + followingId.following_id + ","
	})

   
	let friendId =followingid


	
	 let shareVenues = Object.assign({venue_id:this.props.navigation.state.params.venue_id}, { userid:this.state.userId,friend_id: friendId.substring(0, friendId.length - 1),message_type:'post'})
	 console.log(shareVenues)
	// this.setState({loading:true})
    // let localdata=this.props.navigation.state.params.storyImage
				
	
		
			axios.post(`${API_URI}/insertMsgVenue`, qs.stringify(shareVenues))
			.then(data => {
				console.log("success",data.data)
			  
			
				this.props.navigation.navigate('HomeForm');
		
				 
			 
		   
			}).catch(err => {
			
				console.log(err)
			 
			})

		
}



  updateSearch = (search) => {
	
			 
		
		// let data =this.state.following
	
		// if (this.state.search != '') {
			
			
		// 	 data = data.filter(l => {
		// 		//console.log("RRRRRRRRRRRRRR",l)
		// 		//return l.username==null?"a".match("b"):l.username.toLowerCase().match(prevState.search.toLowerCase());
		// 	});
		// 	//console.log("RRRRRRRRRRRRRR",data)
			
		// } 
		this.setState({search:search})
	this.props.searchLocation(search)




};


	componentWillMount() {
		

		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}


	static getDerivedStateFromProps(nextProps, prevState) {

		
		
		let update = {}


	//	//console.log("Jfkldsjfgl;kdf",nextProps.following)

		if (nextProps.following !== prevState.following) {
 // //console.log(nextProps.following)
			
			nextProps.following.map(info => {
				info.check = false;
			
				return nextProps.following;
			})

		
			update.following = nextProps.following
			
		}

		return update;


	}


	pressFollowing = (hey) => {
		this.state.following.map((item) => {
			if (item.following_id === hey.following_id) {
				item.check = !item.check
				if (item.check === true) {
					this.state.SelectedFollowingList.push(item);
					console.log('selected:' + item.username);
				} else if (item.check === false) {
					const i = this.state.SelectedFollowingList.indexOf(item)
					if (1 != -1) {
						this.state.SelectedFollowingList.splice(i, 1)
						console.log('unselect:' + item.username)
						return this.state.SelectedFollowingList
					}
				}
			}
		})
		this.setState({ following: this.state.following })
	}





	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}
	handleBackButtonClick() {
		this.props.navigation.navigate('HomeForm');
		return true;
	}

	_goBack = () => this.props.navigation.navigate('HomeForm');

	render() {
	const {followers} =this.props
//console.log(followers)
const { search } = this.state;

		return (

			<View style={{flex:1 ,backgroundColor:'#000'}} >


			
             
				<Appbar.Header style={{ backgroundColor: '#000' }}>

         <TouchableOpacity   onPress={() => this._goBack()}>
				{/* <Appbar.BackAction
						
					/> */}

<AntDesignIcon style={{marginLeft: 10 }} color={"#FFF"} name={"arrowleft"} size={25} />
			</TouchableOpacity>

<Appbar.Content
	title=""
	subtitle=""
	titleStyle={{ alignSelf: 'center', marginBottom: 20, fontSize: 18 }}
/>
<View style={MainHomeStyles.headerRightIcon}>

<TouchableOpacity onPress={this.shareVenue}>
							<FontIcon style={MainHomeStyles.topIcon} color={"#FFF"} name={"send"} size={25} />
						</TouchableOpacity>





</View>


</Appbar.Header>
<View style={{ height: "9%",marginBottom:10 }}>
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
				</View>
				<KeyboardAwareScrollView  enableOnAndroid>
				
					{this.state.following.map((item, index) => (
						<TouchableOpacity style={[followingStyles.tabWrapContain, { marginTop: 10 }]} onPress={() => {
							this.pressFollowing(item)
						}} >
							<View style={followingStyles.listWrap}>
								<View style={followingStyles.listLeftContent}>
									<View style={followingStyles.postMenu}>
										<View>
											<Image style={followingStyles.postImage} source={require("../../../assets/images/user.png")} />
										</View>

									</View>
								</View>
								<View style={{ width: '70%', justifyContent: 'center' }}>
									<Text style={followingStyles.listRightTitleText}>{item.username}</Text>

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



export default FollowingShare;

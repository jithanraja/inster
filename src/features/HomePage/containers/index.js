// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import Component from "../components";
// import { navigateToWelcome } from "navigation/actions";

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ navigateToWelcome }, dispatch);

// export default connect(null, mapDispatchToProps)(Component);
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import React, { useState, Component } from 'react';

import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';

import MainHomeComponent from "../components/MainHome";
import FollowingShareComponent from "../components/followingshare";
import * as venueAction from 'actions/venueAction';
import Toast from 'react-native-simple-toast';
import * as friendsAction from 'actions/friendsAction';
import { insertFollowerStory, insertVenue, deleteVenue, deleteFollowerStory } from "services";

class HomeContainer extends Component {

	constructor() {
		super();
		this.state = {
			navigationPageType: '',
			venues: [],
			friendsStory: [],
			venueArray: [],
			storycounts: '',
			venuecounts: '',
			following: [],
			filter: 0,
			types: '',
			searchval:''

		};

	}


	componentDidMount() {




		////console.log(this.state.friendsStory)

		// AsyncStorage.getItem('VenuesApprovedCount').then((data) => {
		// 	//console.log(data)
		// 	if (this.state.venuecounts != data) {

		// 		AsyncStorage.setItem("VenuesApprovedCount", this.state.venuecounts)


		// 		if (this.state.venues.length !== 0) {
		// 			this.deleteVenues()

		// 			this.state.venues.forEach(data => {

		// 				this.insertVenues(data.approved, data.closing_time, data.date, data.description, data.distance, data.duration, data.id, data.image, data.lattitude, data.likes_count, data.location, data.longitude, data.opening_time, data.title, data.type, data.userid)
		// 			})

		// 		}


		// 	}
		// });




		// AsyncStorage.getItem('StoryCount').then((data) => {

		// 	if (this.state.storycounts != data) {
		// 		AsyncStorage.setItem("StoryCount", this.state.storycounts)

		// 		if (this.state.friendsStory.length !== 0) {

		// 			AsyncStorage.getItem('userid').then((data) => {
		// 				let user = data

		// 				this.deleteFollowerStorys()
		// 				this.state.friendsStory.forEach(data => {
		// 					this.insertStorys(data.image, data.image_name, user, data.following_id)
		// 				})

		// 			});
		// 		}
		// 	}
		// });


	}


	componentDidUpdate(nextProps, prevState) {



	}
	// async insertStorys(image, name, userid, id) {


	// 	const response = await insertFollowerStory(image, name, userid, id);
	// 	///	this.setState({"firsttime":false})
	// 	//console.log(response)
	// }


	// async insertVenues(approved, closing_time, date, description, distance, duration, id, image, lattitude, likes_count, location, longitude, opening_time, title, type, userid) {


	// 	const response = await insertVenue(approved, closing_time, date, description, distance, duration, id, image, lattitude, likes_count, location, longitude, opening_time, title, type, userid);
	// 	//console.log(response)

	// }


	// async deleteVenues() {


	// 	const response = await deleteVenue();
	// 	//console.log("RRRRRR",response)

	// }

	// async deleteFollowerStorys() {
	// 	const response = await deleteFollowerStory();
	// 	//console.log("KKKKKKKK",response)
	// }


	searchLocation = (val) => {
		
		this.setState({ searchval: val })

	}





	

	static getDerivedStateFromProps(nextProps, prevState) {
		let update = {}
		if (nextProps.likeCount !== prevState.likeCount) {
			if ((nextProps.likeCount.status) + "" == "success") {
				nextProps.venueAction.allVenue();
				nextProps.venueAction.likeCount('');
				// Toast.show("Thanks", Toast.LONG)
			}
		}
		if (nextProps.listVenue !== prevState.listVenue) {

		//	//console.log("nextprops", (nextProps.listVenue))

			if ((nextProps.listVenue.status) + "" == "success") {
				let data = nextProps.listVenue.message.filter(function (item) {
					return item.approved=='1';
				})
			
			//	const sortedArray = data.sort((d1, d2) => new Date(d1.date) - new Date(d2.date));

				 ////console.log("Raajaaa",data)
				update.venues = data

			}

		}
		if (nextProps.listStory !== prevState.listStory) {
			if ((nextProps.listStory.status) + "" == "success") {

				update.friendsStory = nextProps.listStory.data

			}
		}
		if (nextProps.listFriends !== prevState.listFriends) {
			if ((nextProps.listFriends.status) + "" == "success") {

				


				
			if (prevState.searchval != '') {
			
			
				let searchFollowing =  nextProps.listFriends.data.following.filter(l => {
				
					return l.username==null?"a".match("b"):l.username.toLowerCase().match(prevState.searchval.toLowerCase());
				});
				
				update.following = searchFollowing
			} else {
			
			
				update.following = nextProps.listFriends.data.following
			}

			}
		}


		if (nextProps.venueCount !== prevState.venueCount) {

			////console.log("nextprops", nextProps.venueCount.status)
			if (nextProps.venueCount.status === "success") {



				update.storycounts = nextProps.venueCount.data1.Storyboard_Count[0].count
				update.venuecounts = nextProps.venueCount.data1.Venues_Approved_Count[0].count
			}

		}
		if (prevState.types != '') {
			let data = nextProps.listVenue.message.filter(function (item) {
				return item.type == prevState.types && item.approved=='1';
			})
			update.venues = data
		}

		return update


	}


	onChangeFilterVenue = (value) => {
		this.props.venueAction.allVenue();
		this.setState({ types: value })
	}



	displayPage = (type) => {

		if (type == "home") {
			return <MainHomeComponent onChangeFilterVenue={this.onChangeFilterVenue} myFollowingStory={this.state.friendsStory} venue={this.state.venues} {...this.props} />
		} else if (type == "friends") {
			return <FollowingShareComponent searchLocation={this.searchLocation} following={this.state.following} {...this.props} />
		}
	}







	render() {

		return (

			this.displayPage(this.props.navigation.state.params.navigationPageType)

		);
	}
}




function mapStateToProps(state) {
	//	//console.log("state...")
	//		//console.log(state)
	return {
		listVenue: state.venue.listVenue,
		venueCount: state.venue.venueCount,
		likeCount: state.venue.likeCount,
		listStory: state.Friends.listStory,
		listFriends: state.Friends.listFriends
	}
}

function mapDispatchToProps(dispatch) {
	return {
		venueAction: bindActionCreators(venueAction, dispatch),
		friendsAction: bindActionCreators(friendsAction, dispatch),
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

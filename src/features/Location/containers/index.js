
import React, { useState, Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import LocationComponent from "../components/discovery";
import FullLocationComponent from "../components/FullImageView";
import MapsComponent from '../components/maps'
import * as locationAction from 'actions/locationAction';
import Toast from 'react-native-simple-toast';
import * as venueAction from 'actions/venueAction';
import * as friendsAction from 'actions/friendsAction';

class LocationContainer extends Component {


	constructor() {
		super();
		this.state = { navigationPageType: '', notifications: [], venues: [], venueArray: [], followers: [], following: [], searchval: '' };

	}


	componentDidMount() {
		////console.log("inside navigationPageType=" + this.props.navigation.state.params.navigationPageType)
		//	this.setState({ navigationPageType: this.props.navigation.state.params.navigationPageType })

		if (this.state.venues.length !== 0) {

			let type = ""
			let subarray = []
			let i = 0
			let data = this.state.venues.filter(function (item) {
				return item.approved == 0;
			})

			let group = data.reduce((r, a) => {
				r[a.type] = [...r[a.type] || [], a];
				////console.log("group",r)
				return r;
			}, {});
			////console.log("group", group);
			this.setState({ venueArray: group })

		}

	}

	searchLocation = (val) => {
		let data1 = this.state.venues
		let search = val

		if (val != '') {
			//   data1 = this.state.venues.filter(function(item){
			// 	//console.log(data1)
			// 	return item.description.toLowerCase().match( val ); ;
			//  })

			data1 = this.state.venues.filter(l => {
				//	//console.log(l.description.toLowerCase().match(val))
				return l.description.toLowerCase().match(val.toLowerCase());
			});
			// follower = this.state.followers.filter(l => {
			// 	//	//console.log(l.description.toLowerCase().match(val))
			// 		return l.username.toLowerCase().match(val.toLowerCase());
			// 	});
			// followings = this.state.following.filter(l => {
			// 	//	//console.log(l.description.toLowerCase().match(val))
			// 		return l.username.toLowerCase().match(val.toLowerCase());
			// 	});
		}
		let data = data1.filter(function (item) {
			return item.approved == 0;
		})

		let group = data.reduce((r, a) => {
			r[a.type] = [...r[a.type] || [], a];
			////console.log("group",r)
			return r;
		}, {});

		this.setState({ venueArray: group, searchval: search })

	}



	displayPage = (type) => {

		if (type == "location") {
			return <LocationComponent searchLocation={this.searchLocation} venueArray={this.state.venueArray} followers={this.state.followers} following={this.state.following} {...this.props} />
		} else if (type == "map") {
			return <MapsComponent {...this.props} />
		} else if (type == "fullview") {
			return <FullLocationComponent {...this.props} />
		}
	}


	static getDerivedStateFromProps(nextProps, prevState) {
		let update = {}

		if (nextProps.listLocation !== prevState.listLocation) {
			//	//console.log("nextprops",nextProps.listLocation)
			if (nextProps.listLocation.status == "success") {

				update.notifications = nextProps.listLocation.data;
			} else {
				Toast.show(nextProps.listLocation.status, Toast.LONG)
			}

		}

		if (nextProps.listVenue !== prevState.listVenue) {

			//		//console.log("nextprops",nextProps.listVenue)
			if (nextProps.listVenue.status == "success") {

				update.venues = nextProps.listVenue.message
			} else {
				Toast.show(nextProps.listVenue.status, Toast.LONG)
			}
		}


		if (nextProps.listFriends !== prevState.listFriends) {



			if (nextProps.listFriends.status == "success") {
				if (prevState.searchval != '') {
					//console.log(nextProps.listFriends.data.followers)
					let searchFollower = nextProps.listFriends.data.followers.filter(l => {
						//	//console.log(l.description.toLowerCase().match(val))
						return  l.username==null?"a".match("b"):l.username.toLowerCase().match(prevState.searchval.toLowerCase());
					});
					let searchFollowing = nextProps.listFriends.data.following.filter(l => {
						//	//console.log(l.description.toLowerCase().match(val))
						return l.username==null?"a".match("b"):l.username.toLowerCase().match(prevState.searchval.toLowerCase());
					});
					update.followers = searchFollower
					update.following = searchFollowing
				} else {
					//	update.friends = nextProps.listFriends.data
					update.followers = nextProps.listFriends.data.followers
					update.following = nextProps.listFriends.data.following
				}
			} else {
				Toast.show(nextProps.listFriends.status, Toast.LONG)
			}

		}
		return update
	}

	render() {

		return (
			this.displayPage(this.props.navigation.state.params.navigationPageType)
		)
	}
}


function mapStateToProps(state) {
	//	//console.log("state...")
	//	//console.log(state.Friends.getAllFollowerFolloWing)
	return {
		listLocation: state.location.listLocation,
		listVenue: state.venue.listVenue,
		listFriends: state.Friends.getAllFollowerFolloWing,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		venueAction: bindActionCreators(venueAction, dispatch),
		friendsAction: bindActionCreators(friendsAction, dispatch),
		locationAction: bindActionCreators(locationAction, dispatch)
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer);
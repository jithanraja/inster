
import React, { useState, Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import CameraComponent from '../components/camera'
import ShareVibes from '../components/sharevibes'
import Filter from '../components/camerascreen'
import Storise from '../components/stories'
import FriendStorise from '../components/friendsStories'
import * as locationAction from 'actions/locationAction';
import * as storyAction from 'actions/storyAction';
import * as friendsAction from 'actions/friendsAction';
import Toast from 'react-native-simple-toast';

class UploadsContainer extends Component {


	constructor() {
		super();
		this.state = { navigationPageType: '', location: [], friends: [] ,following:[],followers:[]};

	}


	componentDidMount() {
		////console.log("inside navigationPageType=" + this.props.navigation.state.params.navigationPageType)
		//	this.setState({ navigationPageType: this.props.navigation.state.params.navigationPageType })
	}

	static getDerivedStateFromProps(nextProps, prevState) {

		let update = {};
		if (nextProps.storyRes !== prevState.storyRes) {

			//console.log("STORYyyyyyyyyyyyyyyyyyyyyyyyyy",nextProps.storyRes)
			if (nextProps.storyRes.status == "success") {
			}
		}

		if (nextProps.listFriends !== prevState.listFriends) {
			if (nextProps.listFriends.status == "success") {
			//	update.friends = nextProps.listFriends.data
				update.followers = nextProps.listFriends.data.followers
				update.following = nextProps.listFriends.data.following
			}
		}

		if (nextProps.listLocation !== prevState.listLocation) {

			if (nextProps.listLocation.status == "success") {
				update.location = nextProps.listLocation.data

			} else {
				Toast.show(nextProps.listLocation.status, Toast.LONG)
			}

		}

		return update;

	}




	displayPage = (type) => {

		if (type == "camera") {
			return <CameraComponent {...this.props} />
		} else if (type == "share") {
			return <ShareVibes location={this.state.location} followers={this.state.followers} following={this.state.following}  {...this.props} />
		}
		else if (type == "filter") {
			return <Filter {...this.props} />
		} else if (type == "stories") {
			return <Storise {...this.props} />
		} else if (type == "friendstories") {
			return <FriendStorise {...this.props} />
		}
	}

	render() {

		return (
			this.displayPage(this.props.navigation.state.params.navigationPageType)
		)
	}
}



function mapStateToProps(state) {
	//	//console.log("state...")
	//console.log("srr",state.Story.addStory)
	return {
		listLocation: state.location.listLocation,
		storyRes: state.Story.addStory,
		listFriends: state.Friends.listFriends
	}
}

function mapDispatchToProps(dispatch) {
	return {
		locationAction: bindActionCreators(locationAction, dispatch),
		storyAction: bindActionCreators(storyAction, dispatch),
		friendsAction: bindActionCreators(friendsAction, dispatch),
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(UploadsContainer);
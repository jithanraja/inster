import React, { useState, Component} from 'react';
import {
 
	AsyncStorage,
	 
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import ListComponent from "../components/lists";
import FollowerchatsComponent from "../components/followerchats";
import * as vibesAction from 'actions/vibesAction';
import * as friendsAction from 'actions/friendsAction';
import Toast from 'react-native-simple-toast';

class VibesContainer extends Component {
	
	constructor() {
		super();
		this.state = { navigationPageType: '',followers:[] ,following:[],userid:0,	friendsStory: [],};

	}


	componentDidMount() {
		////console.log("inside navigationPageType=" + this.props.navigation.state.params.navigationPageType)
		//	this.setState({ navigationPageType: this.props.navigation.state.params.navigationPageType })
	 
	}


	displayPage = (type) => {

	  if (type == "list") {
			return <ListComponent myFollowingStory={this.state.friendsStory}  followers={this.state.followers} {...this.props} />
		} else if (type == "followerChat") {
			return <FollowerchatsComponent following={this.state.following}   {...this.props} />
		}
	}
	
		
	static getDerivedStateFromProps(nextProps, prevState){
	  let update={}
		if(nextProps.listVibes!==prevState.listVibes){ 
			if(nextProps.listVibes.status == "success"){
			update.followers=nextProps.listVibes.data
		 }
		}
		if (nextProps.listStory !== prevState.listStory) {
			if ((nextProps.listStory.status) + "" == "success") {

				update.friendsStory = nextProps.listStory.data

			}
		}
		if (nextProps.listFriends !== prevState.listFriends) {
			if (nextProps.listFriends.status == "success") {
				update.following = nextProps.listFriends.data.following
			}
		}
        return update
	  }
	
	render() {
		
  	return (
		
		// <ListComponent followers={this.state.followers} {...this.props} />
		this.displayPage(this.props.navigation.state.params.navigationPageType)
		
		)
	}
}


function mapStateToProps(state) {
	//console.log(state)
		return {
				listVibes: state.Follower.listFollowers,
				listFriends: state.Friends.listFriends,
				listStory: state.Friends.listStory,
			}
		  }
		  
	  function mapDispatchToProps(dispatch) {
		return {
			vibesAction: bindActionCreators(vibesAction, dispatch),
			friendsAction: bindActionCreators(friendsAction, dispatch),
			}
		  }

export default connect(mapStateToProps, mapDispatchToProps) (VibesContainer);
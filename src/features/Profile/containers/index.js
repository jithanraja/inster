import React, { useState, Component } from 'react';


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ProfileComponent from "../components/profile";
import SettingComponent from "../components/setting"
import * as loginActions from 'actions/loginActions';

class ProfileContainer extends Component {


	constructor() {
		super();

	}

	

	displayPage = (type) => {
		if (type == "profile") {
			return <ProfileComponent {...this.props} />
		} else if (type == "settings") {
			return <SettingComponent {...this.props} />
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
//	//console.log(state)
	return {
		
		getProfileData: state.UserData.getProfile,
		editProfile: state.UserData.editUser
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loginActions: bindActionCreators(loginActions, dispatch)
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

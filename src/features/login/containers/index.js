// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import Component from "../components";
// import { navigateToWelcome } from "navigation/actions";


// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ navigateToWelcome }, dispatch);

// export default connect(null, mapDispatchToProps)(Component);
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
	Alert
} from 'react-native';


import LoginScreen from "../components";


class LoginContainer extends Component {



	render() {
	

		return (
			<LoginScreen
				
				{...this.props}
				{...this.state}
			/>
		)
	}


}




export default LoginContainer;

import React, { useState, Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {
	AsyncStorage,
} from 'react-native';
import IntroScreen from "../components/intro";
import LoginsScreen from "../components/login";
import VerifiCodeScreen from "../components/verificode";
import RegisterScreen from "../components/register";
import * as loginActions from 'actions/loginActions';
import Toast from 'react-native-simple-toast';
import { initialisedb } from '../../../config/db'
import axios from 'axios'
import  { API_URI } from '../../../_helpers/constants';
var qs = require('qs');
class UserContainer extends Component {
	constructor() {
		super();
		this.state = {
			PageType: '',
			registerstatus: '',
			registerData: {},
			that:this

		};
	}
	registerNavigat = () => {
		this.props.navigation.navigate('UserForm', { PageType: 'login' });
	}

	componentDidMount(){
	
	}



	componentDidUpdate(prevProps, prevState) {

		if (this.state.PageType == 'register') {
			if (prevState.registerData !== this.state.registerData) {
				if ((this.state.registerstatus).toString() == 'success') {

					this.props.navigation.navigate('HomeForm');

					//  this.registerNavigat()
				}
			}
		} else if (this.state.PageType == 'login') {

			//this.props.navigation.navigate('HomeForm');
		}
	}


          updateUser(userid){
			AsyncStorage.getItem('deviceid').then((data) => {
			
			axios.post(`${API_URI}/updateFirebase`, qs.stringify({userid:userid,firebas:data}))							
			.then(data => {
				//console.log("success",data.data)
			}).catch(err => {			
				//console.log(err)			 
			})
		});
		  }

	static getDerivedStateFromProps(nextProps, prevState) {


		if (nextProps.navigation.state.params.PageType == 'login') {

			if (nextProps.loginData !== prevState.loginData) {

				if ((nextProps.loginData.message).toString() == "") {
					AsyncStorage.setItem(
						"userid", nextProps.loginData.data.userid + '')
					AsyncStorage.setItem(
							"fullname", nextProps.loginData.data.userid + '')
							
							
							prevState.that.updateUser(nextProps.loginData.data.userid+'')
					nextProps.navigation.navigate('HomeForm');
					//return { loginsData: nextProps.loginData.message, loginstatus:nextProps.loginData.status};
				} else {
					Toast.show(nextProps.loginData.message, Toast.LONG)
				}
				//	return null;
			}
			//  else{
			// 	return null;
			// }
		} else if (nextProps.navigation.state.params.PageType == 'register' || nextProps.navigation.state.params.PageType == 'intro') {


			if (nextProps.listUser !== prevState.listUser) {

				//console.log( nextProps.listUser)
				if ((nextProps.listUser.status)+"" == 'success') {

					//console.log("nexttttt", nextProps.listUser)
					AsyncStorage.getItem('LoginType').then((data) => {

						if (data == 'fb') {

   

							AsyncStorage.setItem(
								"userid", nextProps.listUser.data[0].userid + '')
								//console.log("RRRRRRRRRRRRRRRRRRRRRRRR",nextProps.listUser.data[0].userid)
								prevState.that.updateUser(nextProps.listUser.data[0].userid)
							nextProps.navigation.navigate('HomeForm');
						} else {
							if ((nextProps.listUser.message)+"" == "") {
								nextProps.navigation.navigate('UserForm', { PageType: "login" });
							} else {
								Toast.show("Email alredy exist..", Toast.LONG)
							}
						}

					});


				}

			}

		}





	}


	componentDidMount() {
		/*AsyncStorage.getItem('userid').then((data) => {
			this.setState({ userId: data })
			this.props.navigation.navigate("HomeForm")
		})*/
		initialisedb();
		const ptype = this.props.navigation.state.params.PageType;

		//console.log(this.props.navigation.state.params.PageType)
		this.setState({ PageType: ptype })

	}


	displayPage = (type) => {

		if (type == "login") {
			return <LoginsScreen {...this.props} />
		} else if (type == "register") {
			return <RegisterScreen {...this.props} />
		} else if (type == "verificode") {
			return <VerifiCodeScreen {...this.props} />
		} else if (type == "intro") {
			return <IntroScreen {...this.props} />
		}

	}

	render() {
		//  //console.log(this.props.navigation.state.params.PageType)
		//  this.setState({navigationPageType:this.props.navigation.state.params.navigationPageType})

		return (
			this.displayPage(this.props.navigation.state.params.PageType)
		)
	}


}


function mapStateToProps(state) {
	//	//console.log("state...")
//	//console.log(state)
	return {
		listUser: state.UserData.listUser,
		loginData: state.UserData.login
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loginActions: bindActionCreators(loginActions, dispatch)
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
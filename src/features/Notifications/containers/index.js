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
import ListComponent from "../components/lists";
import DetailsComponent from "../components/details";
import * as notificationAction from 'actions/notificationAction';
import Toast from 'react-native-simple-toast';



class NotificationsContainer extends Component {
	
	constructor() {
		super();
		this.state = { navigationPageType: '',notifications:[] };

	}


	componentDidMount() {
	
		////console.log("inside navigationPageType=" + this.props.navigation.state.params.navigationPageType)
		//	this.setState({ navigationPageType: this.props.navigation.state.params.navigationPageType })
	}


	displayPage = (type) => {

	  if (type == "list") {
			return <ListComponent notification={this.state.notifications} {...this.props} />
		} else if (type == "details") {
			return <DetailsComponent {...this.props} />
		}
	}
	
	
	static getDerivedStateFromProps(nextProps, prevState){
	

		
		if(nextProps.listNotification!==prevState.listNotification){
			//console.log("nextprops",nextProps.listNotification)
			if(nextProps.listNotification.status == "success"){
				
			return { notifications: nextProps.listNotification.data};
			}else{
				Toast.show(nextProps.listNotification.status, Toast.LONG)
			}
			return null;
		 }
		 else{
			return null;
		}
	
		   
	  }

	
	render() {
		
  	return (
		
			 this.displayPage("list")
		
		)
	}
}




function mapStateToProps(state) {
	//	//console.log("state...")
		//console.log(state.notifications.listNotification)
		return {
				listNotification: state.notifications.listNotification,
			 //.listNotification
			}
		  }
		  
	  function mapDispatchToProps(dispatch) {
		return {
			notificationAction: bindActionCreators(notificationAction, dispatch)
			}
		  }
	
	
	
	export default connect(mapStateToProps, mapDispatchToProps) (NotificationsContainer);
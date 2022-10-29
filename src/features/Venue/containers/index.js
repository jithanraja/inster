
import React, { useState, Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as venueAction from 'actions/venueAction';
import OptionComponent from "../components/optionVenue";
import AddComponent from "../components/add";
import Toast from 'react-native-simple-toast';

class VenuContainer extends Component {
  constructor(props) {
		super();
		this.state = { navigationPageType: '',addVenue:props.addVenue};

	}


	displayPage = (type) => {

		if (type == "option") {
			return <OptionComponent {...this.props} />
		} else if (type == "add") {
			return <AddComponent {...this.props} />
		}
		
	}

	static getDerivedStateFromProps(nextProps, prevState){
		let update ={}

		//console.log(prevState.addVenue)
		if(nextProps.addVenue!==prevState.addVenue){
			//console.log("nextprops",nextProps.addVenue)
			if(nextProps.addVenue.status == "success"){
				if(nextProps.addVenue.message==""){
					update.addVenue=nextProps.addVenue;
					  
	  		 		Toast.show(nextProps.addVenue.status, Toast.LONG)
	   				nextProps.navigation.navigate('HomeForm')
				}else{
					Toast.show(nextProps.addVenue.message, Toast.LONG)
				}
			}else{
				Toast.show(nextProps.addVenue.status, Toast.LONG)
			}
		
		 

      return update
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
	////console.log(state)
	return {
		addVenue: state.venue.addVenue
	}
}

function mapDispatchToProps(dispatch) {
	return {
		venueAction: bindActionCreators(venueAction, dispatch)
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(VenuContainer);
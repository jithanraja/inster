import React, { useState, Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,

} from 'react-native';
import {KolStyles,MainHomeStyles} from "./styles";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { Appbar } from "react-native-paper";


class OptionComponent extends Component {	
	constructor() {
        super();
        this.state = { languageCode: 'en' };
	}
	
	componentWillMount() {
	
	  }
	  _goBack = () => this.props.navigation.navigate('HomeForm');
	render() {
		const {state}=this.props

		return (
	
			<View style={{ flex:1 ,backgroundColor:'#000' }} >
				
				<Appbar.Header style={{ backgroundColor: 'transparent' }}>

{/* <Appbar.BackAction onPress={this._goBack} style={MainHomeStyles.topIcon} color={"#FFF"} /> */}
<TouchableOpacity   onPress={() => this._goBack()}>
				{/* <Appbar.BackAction
						
					/> */}

<AntDesignIcon style={{marginLeft: 10 }} color={"#FFF"} name={"arrowleft"} size={25} />
			</TouchableOpacity>

<Appbar.Content
  title=""
  subtitle=""

/>
</Appbar.Header>

						<View style={KolStyles.homeMenuContent}>
						<TouchableOpacity  onPress={()=>this.props.navigation.navigate('VenueForm',{navigationPageType:'add',type:'Events'})}  style={[KolStyles.homeMenu,{ marginTop:"5%",backgroundColor:'#1a1a1a',justifyContent:'center'}]}>
						<View   style={[KolStyles.homeMenu,{ marginTop:"5%",backgroundColor:'#1a1a1a',justifyContent:'center'}]}>
					
						
						
						<Text style={{ color:'#FFF',textAlign:'center',fontSize:24}}>Create an event</Text>
						
						</View>
  						</TouchableOpacity>
						<TouchableOpacity  onPress={()=>this.props.navigation.navigate('VenueForm',{navigationPageType:'add',type:'Venues'})}  style={[KolStyles.homeMenu,{ marginTop:"5%",backgroundColor:'#1a1a1a',justifyContent:'center'}]}>
					
						
						
						<Text style={{ color:'#FFF',textAlign:'center',fontSize:24}}>Add a Venue</Text>
						
						</TouchableOpacity>
						<TouchableOpacity  onPress={()=>this.props.navigation.navigate('VenueForm',{navigationPageType:'add',type:'Activities'})}  style={[KolStyles.homeMenu,{ marginTop:"5%",backgroundColor:'#1a1a1a',justifyContent:'center'}]}>
						<View   style={[KolStyles.homeMenu,{ marginTop:"5%",backgroundColor:'#1a1a1a',justifyContent:'center'}]}>
					
						
						
						<Text style={{ color:'#FFF',textAlign:'center',fontSize:24}}>Add activity</Text>
						
						</View>
						</TouchableOpacity>
						</View>
						
			
			</View>
	
		)
	}
}



export default OptionComponent;

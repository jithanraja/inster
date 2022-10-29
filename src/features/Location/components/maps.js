import React, { useState, Component } from 'react';
import {
	View,
	Text,
	Dimensions,
	BackHandler,
	ScrollView,
	Image
} from 'react-native';

import { mapstyles } from "./styles";
import RetroMapStyles from './mapstyles.json';
import Geolocation from '@react-native-community/geolocation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
//import MapView from  'react-native-maps';
let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 11.002105;
const LONGITUDE = 76.956592;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421; //LATITUDE_DELTA * ASPECT_RATIO;
class MapsComponent extends Component {

	constructor() {
		super();
        this.state = {
            region: {
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            },
          
              loading: true,
            //   region: {
            //   latitude: 11.002105,
            //   longitude: 76.956592,
            //   latitudeDelta: 0.001,
            //   longitudeDelta: 0.001
            // }
          };
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    




    componentDidMount() {

      this.setState({
        region: {
          latitude: Number(this.props.navigation.state.params.lattitude),
          longitude: Number(this.props.navigation.state.params.longitude),
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }
      });



        // Geolocation.getCurrentPosition(
        //   position => {
        //     this.setState({
        //       region: {
        //         latitude: position.coords.latitude,
        //         longitude: position.coords.longitude,
        //         latitudeDelta: LATITUDE_DELTA,
        //         longitudeDelta: LONGITUDE_DELTA,
        //       }
        //     });
        //   },
        // (error) => console.log(error.message),
        // { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        // );
        // this.watchID =Geolocation.watchPosition(
        //   position => {
        //     this.setState({
        //       region: {
        //         latitude: position.coords.latitude,
        //         longitude: position.coords.longitude,
        //         latitudeDelta: LATITUDE_DELTA,
        //         longitudeDelta: LONGITUDE_DELTA,
        //       }
        //     });
        //   }
        // );
      }


	componentWillMount() {

		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

	componentWillUnmount() {
     Geolocation.clearWatch(this.watchID);
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}
	handleBackButtonClick() {
		this.props.navigation.navigate('HomeForm');
		return true;
	}

	_goBack = () => this.props.navigation.navigate('HomeForm');

	updateSearch = search => {
		this.setState({ search });
	};


	render() {

		const { search } = this.state;

		return (
      //   <MapView
      //   provider={ PROVIDER_GOOGLE }
      //   style={ mapstyles.container }
      //   //customMapStyle={ RetroMapStyles }
      //   customMapStyle={ RetroMapStyles }
      //   showsUserLocation={ true }
      //   region={ this.state.region }
      //   onRegionChange={ region => this.setState({region}) }
      //   onRegionChangeComplete={ region => this.setState({region}) }
      // >
      //   <MapView.Marker
      //     coordinate={ this.state.region }
      //   />
      // </MapView>
      <MapView
     // style={styles.map}
     style={ mapstyles.container }
      initialRegion={this.state.region}
      showsUserLocation={true}
      onMapReady={this.onMapReady}
      onRegionChangeComplete={this.onRegionChange}>
    <MapView.Marker
      coordinate={{ "latitude": this.state.region.latitude,   
      "longitude": this.state.region.longitude }}
      title={"Your Location"}
      draggable />
  </MapView>
      // <MapView style = {mapstyles.map}
      // initialRegion = {{
      //     latitude: 13.139238380834923,
      //     longitude: 80.25188422300266,
      //     latitudeDelta: 0.0922,
      //     longitudeDelta: 0.0421,
      //     }}/>
		)
	}
}



export default MapsComponent;

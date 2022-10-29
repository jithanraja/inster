import React, { useState, Component } from 'react';
import {
	View,
	Text,
	Dimensions,
	BackHandler,
	ScrollView,
	TouchableOpacity,
	Image
} from 'react-native';

import { groupStyles } from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import LinearGradient from 'react-native-linear-gradient';

import I18n, { getLanguages } from 'react-native-i18n';
import { Appbar, Drawer, TextInput, } from "react-native-paper";
import { SearchBar, CheckBox, Button, } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import Header from '../../../components/Header';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { IMAGE_URI } from '../../../_helpers/constants'
import VideoPlayer from 'react-native-video-player';
class FullLocationComponent extends Component {

	constructor() {
		super();
		this.state = {
			languageCode: 'en', search: '', checked: false, video: { width: undefined, height: 200, duration: undefined },
			thumbnailUrl: undefined,
			videoUrl: undefined,
		};
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
	}

	componentWillMount() {

		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}
	handleBackButtonClick() {
		this.props.navigation.navigate('locations', { navigationPageType: 'location' });
		return true;
	}

	_goBack = () => this.props.navigation.navigate('locations', { navigationPageType: 'location' });

	updateSearch = search => {
		this.setState({ search });
	};


	render() {

		const { search } = this.state;
		const { venueArray } = this.props;
		return (

			<View style={{ flex: 1, backgroundColor: "#000" }} >


				<Appbar.Header style={{ backgroundColor: '#000' }}>


					<Appbar.BackAction
						onPress={() => this._goBack()}
					/>

					{/* <MaterialCommunityIcons style={{ alignSelf: 'center', marginLeft: 50 }} color={"#FFF"} name={"map-marker"} size={18} />
					<Appbar.Content
						title="Reading"
						titleStyle={{ color: "#e1ad01" }}

					/> */}

				</Appbar.Header>


				<View style={{ flex: 1, justifyContent: 'center' }} >



					<View style={{ height: '60%' }}>
						<ScrollView contentContainerStyle={{ flexDirection: 'row', }}
							showsHorizontalScrollIndicator={false}
							horizontal={true} >
							{this.props.navigation.state.params.LactionArray.map((item, intex) => (

								<TouchableOpacity style={{ justifyContent: 'center' }}>

									<View style={[groupStyles.profileMenu, { height: '80%', width: 350 }]}>

										<View style={{ alignItems: "center" }}>

										{(item.image).substring((item.image).length - 3, (item.image).length) != "mp4" ? <Image style={groupStyles.viewContentImage} source={{ uri: IMAGE_URI + item.image }} /> : <VideoPlayer
												endWithThumbnail
												//autoplay
												thumbnail={{ uri: this.state.thumbnailUrl }}
												video={{ uri: IMAGE_URI + item.image }}
												videoWidth={100}
												videoHeight={150}
												duration={this.state.video.duration}
												ref={r => this.player = r}
											/>}
										</View>
									</View>
									<View style={{ width: 350 }} >
										<Text style={[groupStyles.imageText, { fontSize: 20 }]}>{item.description}</Text>
										<View style={groupStyles.dateContainer}>
											<Text style={[groupStyles.time, { fontSize: 12 }]}>{(item.opening_time).substring(0, 5)}am-{(item.closing_time).substring(0, 5)}pm</Text>
											<Text style={[groupStyles.date, { fontSize: 12 }]}>{(item.date).substring(0, 10)}</Text>
											<AntDesignIcon style={groupStyles.likeicon} color={"#FFFF"} name={"hearto"} size={10} />
										</View>
									</View>

								</TouchableOpacity>

							))}


						</ScrollView>
					</View>
					{/* <Text style={{color:"#FFFF",marginLeft:10}}>Venues</Text>       */}


					<View style={{ height: 50, marginTop: 10 }}>

					</View>




				</View>

			</View>

		)
	}
}



export default FullLocationComponent;

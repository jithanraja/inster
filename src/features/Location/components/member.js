import React, { useState, Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	BackHandler
} from 'react-native';

import {MemberStyles} from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icons from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import I18n, { getLanguages } from 'react-native-i18n';
import { Appbar, Drawer, TextInput } from "react-native-paper";
import { SearchBar, CheckBox, Button, } from 'react-native-elements';
import Header from '../../../components/Header';

class GroupMemberComponent extends Component {

	constructor() {
		super();
		this.state = { languageCode: 'en', search: '', checked:false};
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
	}

	componentWillMount() {
		//I18n.locale = 'en';
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}
	handleBackButtonClick() {
		this.props.navigation.navigate('GroupForm',{navigationPageType:'group'});
		return true;
	}

	_goBack = () => this.props.navigation.navigate('GroupForm',{navigationPageType:'group'});

	updateSearch = search => {
		this.setState({ search });
	};

 onChangeCheckBox=()=>{
  this.setState({checked: !this.state.checked})
 }

	render() {

		

		return (

			<LinearGradient style={{ minHeight: Dimensions.get('window').height }} colors={['#FFF', '#FFF']} locations={[0.5, 1]}>

				<Header  title={I18n.t('Group Members')}  goBack={this._goBack} />

			


				<View style={{ height: "15%", justifyContent: 'center', }}>
					<View style={MemberStyles.titleContainer}>
						<Text style={MemberStyles.title}>Group Name</Text>
					</View>
				</View>


				<KeyboardAwareScrollView style={{ flex: 1 }} enableOnAndroid>

					<View style={MemberStyles.contain}>
						<View style={MemberStyles.listContainer}>
							<View style={MemberStyles.rowContain}>
								<View style={MemberStyles.CheckBoxContain}>
									<CheckBox
										checked={this.state.checked}
										onPress={() => this.onChangeCheckBox()}
										size={30}
										center={true}
										checkedColor={'#000'}
										uncheckedColor={'#000'}
									/>
								</View>
								<View style={MemberStyles.groupNameContain}>
									<Text style={MemberStyles.groupNameText}>Member 1</Text>
								</View>

							</View>
						</View>

						<View style={MemberStyles.listContainer}>
							<View style={MemberStyles.rowContain}>
								<View style={MemberStyles.CheckBoxContain}>
									<CheckBox
										checked={this.state.checked}
										onPress={() => this.onChangeCheckBox()}
										size={30}
										center={true}
										checkedColor={'#000'}
										uncheckedColor={'#000'}
									/>
								</View>
								<View style={MemberStyles.groupNameContain}>
									<Text style={MemberStyles.groupNameText}>Member 2</Text>
								</View>

							</View>
						</View>


						<View style={MemberStyles.listContainer}>
							<View style={MemberStyles.rowContain}>
								<View style={MemberStyles.CheckBoxContain}>
									<CheckBox
										checked={this.state.checked}
										onPress={() => this.onChangeCheckBox()}
										size={30}
										center={true}
										checkedColor={'#000'}
										uncheckedColor={'#000'}
									/>
								</View>
								<View style={MemberStyles.groupNameContain}>
									<Text style={MemberStyles.groupNameText}>Member 3</Text>
								</View>

							</View>
						</View>



						<View style={MemberStyles.listContainer}>
							<View style={MemberStyles.rowContain}>
								<View style={MemberStyles.CheckBoxContain}>
									<CheckBox
										checked={this.state.checked}
										onPress={() => this.onChangeCheckBox()}
										size={30}
										center={true}
										checkedColor={'#000'}
										uncheckedColor={'#000'}
									/>
								</View>
								<View style={MemberStyles.groupNameContain}>
									<Text style={MemberStyles.groupNameText}>Member 4</Text>
								</View>

							</View>
						</View>

					</View>

				</KeyboardAwareScrollView>

			</LinearGradient>

		)
	}
}



export default GroupMemberComponent;

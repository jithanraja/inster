import React, { useState, Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,

	Image,
	PermissionsAndroid,
	Dimensions,
	AsyncStorage,
	Keyboard,
	Button,
	ScrollView,
	BackHandler,
	FlatList,

} from 'react-native';
import DatePicker from 'react-native-datepicker'
import styles from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icons from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import I18n, { getLanguages } from 'react-native-i18n';
import { Appbar, Drawer, TextInput, } from "react-native-paper";

import Textarea from 'react-native-textarea';
import { GiftedChat } from 'react-native-gifted-chat'

import Header from '../../../components/Header'

class ContentDetailsPage extends Component {

	constructor() {
		super();
		this.state = { languageCode: 'en', selected_date: "", descrption: "", messages: [], data: [
			{id:1, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet"},
			{id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"} ,
			{id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
			{id:4, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
			{id:5, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
			{id:6, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
			{id:7, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
			{id:8, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
			{id:9, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
		  ] };
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
	}


	renderDate = (date) => {
		return(
		  <Text style={styles.time}>
			{date}
		  </Text>
		);
	  }


	componentWillMount() {
		I18n.locale = 'en';
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

	componentDidMount() {
		this.setState({
			messages: [
				{
					_id: 1,
					text: 'Hello developer',
					createdAt: new Date(),
					user: {
						_id: 2,
						name: 'React Native',
						avatar: 'https://placeimg.com/140/140/any',
					},
				},
			],
		})
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}
	handleBackButtonClick() {
		this.props.navigation.navigate('HomeForm');
		return true;
	}
	handlechangeDate(value) {

		this.setState({ selected_date: value });

	}
	_goBack = () => this.props.navigation.navigate('HomeForm');

	onSend(messages = []) {
		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, messages),
		}))
	}

	render() {



		return (

			<LinearGradient style={{ minHeight: Dimensions.get('window').height }} colors={['#FFF', '#FFF']} locations={[0.5, 1]}>


					<Header  title={'Chat Page'}  goBack={this._goBack} />
				
			

					{/* <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={(message) => {
            console.log(item);
            const item = message.item;
            let inMessage = item.type === 'in';
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                {!inMessage && this.renderDate(item.date)}
                <View style={[styles.balloon]}>
                  <Text>{item.message}</Text>
                </View>
                {inMessage && this.renderDate(item.date)}
              </View>
            )
          }}/>
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Write a message..."
                underlineColorAndroid='transparent'
                onChangeText={(name_address) => this.setState({name_address})}/>
          </View>

            <TouchableOpacity style={styles.btnSend}>
              <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
            </TouchableOpacity>
        </View>
      </View> */}
					
					<GiftedChat
							messages={this.state.messages}
							onSend={messages => this.onSend(messages)}
							user={{
								_id: 1,
							}}
							alwaysShowSend
						/>
					
				

			

			</LinearGradient>

		)
	}
}



export default ContentDetailsPage;

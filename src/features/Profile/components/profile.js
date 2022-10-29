import React, { useState, Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	AsyncStorage,
	ScrollView,
	BackHandler,
	ImageBackground,
	

} from 'react-native';

import axios from 'axios'

import { API_URI } from '../../../_helpers/constants';
var qs = require('qs');
import DatePicker from 'react-native-datepicker'
import ImagePicker from 'react-native-image-picker';
import styles from "./styles";
import Icons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TextInput } from 'react-native-paper';
import { IMAGE_URI } from '../../../_helpers/constants'
import Toast from 'react-native-simple-toast';
import {getFollowerStory,getStory} from 'services'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog'
class Profile extends Component {

	constructor(props) {
		super();
		this.state = {
			languageCode: 'en', selected_date: "", descrption: "", messages: [],
			//profile:props.getProfileData,
			following_count:'',
			followers_count:'',
			username:'',
			fullname:'',
			biodata:'',
			interest:'',
			myFollowingStory:[],
			filepath: {
				data: '',
				uri: ''
			},
			myStory:[],
			fileData: '',
			fileUri: '',
			edit: false,
			userId: '',
			visible: false,
			likeArray: []
		};
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
	}

	componentDidMount() {
		////console.log()
		AsyncStorage.getItem('userid').then((data) => {
			this.setState({userId:data})
			this.props.loginActions.getUser(data)
			this.getFollowerStoryImage(data)
		});	
        
		//console.log("nextpropsaaaaa")
	}

	async getStoryImage(value) {
		//console.log("RajaRaja")
		let response = ""
		if (value != '' && value != null) {
		  response = await getStory(value)
		  //console.log(response.rows)
		  setTimeout(() => {
			let temp = [];
			for (let i = 0; i < response.rows.length; ++i) {
			  temp.push(response.rows.item(i));
	  // console.log(response.rows.item(i))
			}
			if (response.rows.item(response.rows.length - 1) !== undefined) {
			  this.setState({ myStory: response.rows.item(response.rows.length - 1) })
			}
		  }, 100);
	
		}
	  }



	componentWillMount() {
	
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}


	chooseImage = () => {
		let options = {
		  title: 'Select Image',
		
		  storageOptions: {
			skipBackup: true,
			path: 'images',
		  },
		};
		ImagePicker.showImagePicker(options, (response) => {
		//  //console.log('Response = ', response);
	
		  if (response.didCancel) {
			//console.log('User cancelled image picker');
		  } else if (response.error) {
			//console.log('ImagePicker Error: ', response.error);
		  } else if (response.customButton) {
			//console.log('User tapped custom button: ', response.customButton);
			alert(response.customButton);
		  } else {
			const source = { uri: response.uri };
	
			// You can also display the image using data:
			// const source = { uri: 'data:image/jpeg;base64,' + response.data };
			// alert(JSON.stringify(response));s
		//	//console.log('response', JSON.stringify(response));
	const fd = new FormData();
				fd.append('image', { uri: response.uri, name: 'test.jpg', type: 'image/jpg', types: 'image' });
				fd.append('id', Number(this.state.userId))
				fd.append('types', 'image')
				//console.log("KKKKKKKKKKKKKKKKKKK", fd)
				//console.log("Pathhh", response.uri)
				axios.post(`${API_URI}/profileimage`, fd)
						.then(data => {
					//	console.log("KKKKKKKKKKKKKKKKKKK", data.data)
					AsyncStorage.setItem("profileimage",this.state.fileUri);		
						this.props.loginActions.getUser(this.state.userId)
						Toast.show("Profile Image Upadated Success", Toast.LONG)
		
					}).catch(err => {
						Toast.show(err, Toast.LONG)
						//console.log(err)
		
					})
			
				this.setState({
					filePath: response,
					fileData: response.data,
					fileUri: response.uri
				});
			}
		});





		
		
	}


	static getDerivedStateFromProps(nextProps, prevState) {	
		let update = {}

	
		
		if (nextProps.getProfileData !== prevState.profile) {
			
			if(nextProps.getProfileData.status=="success"){
			
			update.profile = nextProps.getProfileData
			update.fileUri=(nextProps.getProfileData.data1.userdetails.image === null) ? '':IMAGE_URI+ nextProps.getProfileData.data1.userdetails.image
			AsyncStorage.setItem("profileimage",update.fileUri)
			update.fullname=(nextProps.getProfileData.data1.userdetails.fullname === null) ? '': nextProps.getProfileData.data1.userdetails.fullname
			update.username=nextProps.getProfileData.data1.userdetails.username === null ? '':nextProps.getProfileData.data1.userdetails.username
			update.biodata=nextProps.getProfileData.data1.userdetails.biodata === null ? '' :nextProps.getProfileData.data1.userdetails.biodata 
			update.interest=nextProps.getProfileData.data1.userdetails.interest === null ? '':nextProps.getProfileData.data1.userdetails.interest
			update.followers_count=nextProps.getProfileData.data1.followers_count[0]['count']
			update.following_count=nextProps.getProfileData.data1.following_count[0]['count']
update.likeArray = nextProps.getProfileData.data1.venue_name === null ? '' : nextProps.getProfileData.data1.venue_name
			}
		}
		if (nextProps.editProfile !== prevState.editProfile) {

			//console.log("RRRRR",nextProps.editProfile)
			if(nextProps.editProfile.status=="success"){
			
				  update.editProfile=nextProps.editProfile
				  update.edit=false
				  nextProps.loginActions.getUser(prevState.userId)
				  Toast.show("Upadated Success", Toast.LONG)
			}
		}

	
		return update;


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



	ratingCompleted(rating) {
		//console.log("Rating is: " + rating)
	}


	editProfile(){
		this.setState({edit:true})
	}

	editSave(){
		//console.log(this.state.fileData,"RRRRRRRRRRRRRRRR")
		let data={userid:this.state.userId,username:this.state.username,fullname:this.state.fullname,biodata:this.state.biodata,interest:this.state.interest,image:this.state.fileData}
//console.log("success", data)

		axios.post(`${API_URI}/editmanageuser`, qs.stringify(data))

			.then(data => {
				//console.log("success", data.data)

				this.setState({ edit: false })
				this.props.loginActions.getUser(this.state.userId)
				Toast.show("Upadated Success", Toast.LONG)

				// const fd = new FormData();
				// fd.append('image', { uri:this.state.fileData, name: 'test.jpg', type: 'image/jpg', types: 'image' });
				// fd.append('id',333)
				// fd.append('types', 'image')
				// console.log("RRRRRRRRRRRRRRRRRRR", fd)
				
			

			}).catch(err => {
				console.log("kyhkhkhkj", err)
				console.log(err)

			})
		
	}

	render() {

		return (

			<ScrollView style={styles.scroll}>

				
			<View style={[styles.container, this.props.containerStyle]}>
			  <View style={styles.cardContainer}>
               
			  <View style={styles.headerContainer}>
			  
        <View style={styles.coverContainer}>
		
          <ImageBackground
           source={require("../../../assets/images/kashmir.jpg")}
            style={styles.coverImage}
          >
			  {this.state.edit? <View  style={{flexDirection:'row-reverse'}}>
			   <TouchableOpacity onPress={()=>this.editSave()}>
		   <Icons style={{margin:5,marginTop:8}} color={"#FFF"} name={"check"} size={30} />
		   </TouchableOpacity>
		 
		   </View>:<View  style={{flexDirection:'row-reverse'}}>
			   <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProfileForm',{navigationPageType:'settings'})}>
		   <Icons style={{margin:5,marginTop:8}} color={"#FFF"} name={"settings"} size={25} />
		   </TouchableOpacity>
		   <TouchableOpacity onPress={()=>this.editProfile()}>
		   <FontAwesome style={{margin:5,marginTop:8}} color={"#FFF"} name={"edit"} size={25} />
		   </TouchableOpacity>
		   </View>
	}

									<View style={styles.coverTitleContainer}>
										<Text style={styles.coverTitle} />
									</View>
									<TouchableOpacity onPress={() => this.props.navigation.navigate('UploadForm', { navigationPageType: 'stories' })} style={styles.coverMetaContainer}>
										<Text style={styles.coverName}>Tap to View</Text>
										<Text style={styles.coverBio}>Godson Umeh's vibes</Text>
										</TouchableOpacity>
								</ImageBackground>
							</View>
							{console.log("consolle", this.state.fileUri)}
							<TouchableOpacity style={styles.profileImageContainer} onPress={this.chooseImage} >

								<Image
									source={this.state.fileUri == '' | 'http://vibes.smiksystems.com/' ? require("../../../assets/images/user.png") : { uri: this.state.fileUri }}

									style={styles.profileImage}
								/>
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: 'row', marginTop: -45, marginLeft: 120, alignSelf: 'center' }}>
							<View style={{ marginRight: 30 }}>
								<Text style={{ color: '#FFF', fontSize: 18 }}>Follwing</Text>
								<Text style={{ color: '#FFF', textAlign: 'center' }}>{this.state.following_count}</Text>
							</View>
							<View tyle={{ marginRight: 30 }}>
								<Text style={{ color: '#FFF', fontSize: 18 }}>Followers</Text>
								<Text style={{ color: '#FFF', textAlign: 'center' }}>{this.state.followers_count}</Text>
							</View>
						</View>
						<View style={{ flexDirection: 'row', margin: 5, marginLeft: 10, marginTop: 20 }}>

							<Text style={{ color: '#FFF', fontSize: 18 }}>User Name:</Text>
							{!this.state.edit ? <Text style={{ color: '#FFF', margin: 5 }}>{this.state.username}</Text> : <View style={{ flexDirection: 'row' }} >
								<TextInput
									style={{ height: 30, backgroundColor: '#000', borderWidth: 1 }}
									onChangeText={(text) => this.setState({ username: text })}
									underlineColor='#fff'
									theme={{ colors: { text: '#FFF', primary: '#FFF' } }}
									value={this.state.username}
								/>
								<Icons style={{ margin: 5, marginTop: 8 }} color={"#FFF"} name={"edit"} size={15} />
							</View>
							}
						</View>

		  <View style={{flexDirection:'row',margin:5,marginLeft:10}}>
	
	<Text style={{color:'#FFF',fontSize:18}}>Full Name:</Text>
	{!this.state.edit ?	<Text style={{color:'#FFF',margin:5}}>{this.state.fullname}</Text> :<View  style={{flexDirection:'row'}} >
	<TextInput
        style={{height: 30, backgroundColor: '#000', borderWidth: 1}}
		onChangeText={(text) => this.setState({fullname:text})}
		underlineColor='#fff'
		theme={{colors: {text: '#FFF', primary: '#FFF'}}}
        value={this.state.fullname}
      />
	 <Icons style={{margin:5,marginTop:8}} color={"#FFF"} name={"edit"} size={15} />
	 </View>
	}
	  </View>


	  <View style={{flexDirection:'row',margin:5,marginLeft:10}}>
	
	<Text style={{color:'#FFF',fontSize:18}}>Bio:</Text>
	{!this.state.edit ?	<Text style={{color:'#FFF',margin:5}}>{this.state.biodata}</Text>:<View  style={{flexDirection:'row'}} >
	{/* <TextInput
        style={{height: 30, backgroundColor: '#000', borderWidth: 1}}
		onChangeText={(text) => this.setState({biodata:text})}
		underlineColor='#fff'
		theme={{colors: {text: '#FFF', primary: '#FFF'}}}
        value={this.state.biodata}
      /> */}
	  <DatePicker
                  style={{ width: 130,alignItems:'center' }}
                  date={this.state.selected_date}
                  mode="date"
                  showIcon="false"
                  placeholder="Date"
                  format="YYYY-MM-DD"
                  minDate="2019-12-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    
                    dateInput: {
                      marginLeft: 0,
                      left: 0,
                      borderWidth: 0,
                    }
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => this.setState({biodata:date})}
                />
	 <Icons style={{margin:5,marginTop:8}} color={"#FFF"} name={"edit"} size={15} />
	 </View>
	}
	  </View>


	  <View style={{flexDirection:'row',margin:5,marginLeft:10}}>
	
	<Text style={{color:'#FFF',fontSize:18}}>Interests:</Text>
	{!this.state.edit ? <Text style={{color:'#FFF',margin:5}}>{this.state.interest}</Text>:<View  style={{flexDirection:'row'}} >
	<TextInput
        style={{height: 30, backgroundColor: '#000', borderWidth: 1}}
		onChangeText={(text) => this.setState({interest:text})}
		underlineColor='#fff'
		theme={{colors: {text: '#FFF', primary: '#FFF'}}}
        value={this.state.interest}
      />
	 <Icons style={{margin:5,marginTop:8}} color={"#FFF"} name={"edit"} size={15} />
	 </View>
	} 

	  </View>

	  <View style={{flexDirection:'row',margin:5,marginLeft:10}}>
	
	<Text style={{color:'#FFF',fontSize:18}}>Liked Venues:</Text>
	  <TouchableOpacity onPress={() => { this.setState({ visible: true }) }} >
								<Text style={{ color: '#FFF', margin: 5, borderWidth: 1, borderColor: "#FFF", paddingRight: 4, paddingLeft: 4, borderRadius: 5 }}>View</Text>
							</TouchableOpacity>

	 <Icons style={{margin:5,marginTop:8}} color={"#FFF"} name={"edit"} size={15} />
	  </View>


	  
	  <View style={{flexDirection:'row',margin:5,marginLeft:10}}>
	
	<Text style={{color:'#FFF',fontSize:18}}>Likes :</Text>
	  <Text style={{color:'#FFF',margin:5}}>www.fb.com</Text>

	 <Icons style={{margin:5,marginTop:8}} color={"#FFF"} name={"edit"} size={15} />
	  </View>
	  {/* <View style={{flexDirection:'row',margin:5,marginLeft:10}}>
	<View style={{width:'40%',borderColor:'#FFF',borderWidth:1,marginRight:'5%',marginLeft:'5%'}}>
	<Text style={{color:'#FFF',fontSize:18,textAlign:'center'}}>Cancel</Text>

	</View>
	<View style={{width:'40%',alignSelf:'center',borderColor:'#FFF',borderWidth:1,marginLeft:'5%',marginRight:'5%'}}>
	<Text style={{color:'#FFF',fontSize:18,textAlign:'center'}}>Update</Text>

	</View>

	
	  </View>	 */}
	<View >
							<Dialog
								visible={this.state.visible}
								dialogStyle={{ height: '60%', width: "80%", backgroundColor: '#000', borderColor: "#FFF", borderWidth: 1 }}
								footer={
									<DialogFooter style={{ height: '20%' }}>

										<DialogButton
											text="Close"
											textStyle={{ color: '#FFF' }}
											onPress={() => { this.setState({ visible: false }) }}
										/>
									</DialogFooter>
								}
							>
								<DialogContent style={{ height: '80%', width: "80%", backgroundColor: '#000', alignSelf: 'center' }}>
									<View style={{ width: '100%', alignSelf: 'center' }}>
										<Text style={{ padding: 20, textAlign: 'center', fontSize: 20, color: '#FFF', fontWeight: 'bold' }} >Venues</Text>

									</View>
									<KeyboardAwareScrollView enableOnAndroid>

										{this.state.likeArray.map((item, index) => (
											// <TouchableOpacity style={[followingStyles.tabWrapContain, { marginTop: 10 }]} onPress={() => {
											// 	this.pressFollowing(item)
											// }} >
											<View >

												<View style={{ width: '100%', alignSelf: 'center' }}>
													<Text style={{ padding: 20, textAlign: 'center', fontSize: 20, color: '#FFF' }} >{item.venue_name}</Text>

												</View>

											</View>


										))}


									</KeyboardAwareScrollView>
								</DialogContent>
							</Dialog>
						</View>
			  </View>
			</View>
		  </ScrollView>

			

		)
	}
}



export default Profile;

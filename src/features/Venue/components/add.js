import React, { useState, Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Dimensions,
  AsyncStorage,
  ImageBackground
} from 'react-native';
var qs = require('qs');
import Toast from 'react-native-simple-toast';
import ImagePicker from 'react-native-image-picker';
import { registerStyle } from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Geolocation from '@react-native-community/geolocation';
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';
import { Appbar } from "react-native-paper";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import ImgToBase64 from 'react-native-image-base64';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios'
var qs = require('qs');
import  { API_URI } from '../../../_helpers/constants';
import Video from "react-native-video";
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
class AddVenue extends Component {


  inputFocusColor = '#EF757B'
  inputBlurColor = '#EF757B'


  //Initial state false for the switch. You can change it to true just to see.
  state = {
    email: '',

    title: '',
    address: '',
    openhour: '',
    description: '',
    selectedRadio: 0,
    checkFriends: false,
    checkVenue: false,
    filepath: {
      data: '',
      uri: ''
    },
    fileData: '',
    fileUri: '',
    currentLongitude:'',
    currentLatitude:'',
    userId:'',
    imageType:'camera',
    loading:false
  };


  componentDidMount=()=> {
    
		AsyncStorage.getItem('userid').then((data) => {
			// userid = data;
			 this.setState({ userId: data })
			});


		var that = this;
		//Checking for the permission just after component loaded
		if (Platform.OS === 'ios') {
			this.callLocation(that);
		} else {
			async function requestLocationPermission() {
				try {
					const granted = await PermissionsAndroid.request(
						PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
						'title': 'Location Access Required',
						'message': 'This App needs to Access your location'
					}
          )
          //console.log(granted)
					if (granted === PermissionsAndroid.RESULTS.GRANTED) {
						//To Check, If Permission is granted
						that.callLocation(that);
					} else {
						alert("Permission Denied");
					}
				} catch (err) {
					alert("err", err);
					console.warn(err)
        }
        
     
			}







			requestLocationPermission();

    }
    const uripath =this.props.navigation.state.params.uripath;
    //console.log("RRAJAAAA",uripath)
  }


  callLocation(that) {
    //alert("callLocation Called");
   Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        that.setState({ currentLongitude: currentLongitude });
        //Setting state Longitude to re re-render the Longitude Text
        that.setState({ currentLatitude: currentLatitude });
        //Setting state Latitude to re re-render the Longitude Text
      },
      (error) => //console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    that.watchID = Geolocation.watchPosition((position) => {
      //Will give you the location on location change
      ////console.log("RAaa",position);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      //getting the Longitude from the location json
      const currentLatitude = JSON.stringify(position.coords.latitude);
      ////console.log(position.coords.longitude);
      ////console.log(position.coords.latitude);

   
      //getting the Latitude from the location json
      that.setState({ currentLongitude: currentLongitude });
      //Setting state Longitude to re re-render the Longitude Text
      that.setState({ currentLatitude: currentLatitude });
      //Setting state Latitude to re re-render the Longitude Text
    });
  }



  


  onChangeDescription = (value) => {

    this.setState({ description: value })
    if (value == "") {
      this.setState({ errdescription: "description required" })
    } else {
      this.setState({ errdescription: '' })
    }


  }

  onChangehour = (value) => {
    let  re = /^\d{1,2}:\d{2}([ap]m)?$/;
    this.setState({ openhour: value })
    if (value == "") {
      this.setState({ errhour: "Open time required" })
    } else if(value != '' && !value.match(re)) {
   

      this.setState({ errhour: "Invalid time format time \n00:41 this format only accept" })
     
    } else {
      this.setState({ errhour: '' })
    }


  }

  onChangeAddress = (value) => {
    this.setState({ address: value })
    if (value == "") {
      this.setState({ erraddress: "address required" })
    } else {
      this.setState({ erraddress: '' })
    }

  }
  onChangeTitle = (value) => {
    this.setState({ title: value })
    if (value == "") {
      this.setState({ errtitle: "title required" })
    } else {
      this.setState({ errtitle: '' })
    }

  }

  update = () => {
  
    this.validate()
    if (this.state.errtitle == '' && this.state.erraddress == '' && this.state.errdescription == '' && this.state.errhour == '' ) {
       ////console.log("iam here")
       const uripath =this.props.navigation.state.params.uripath;
      //ImgToBase64.getBase64String('file://'+this.props.navigation.state.params.uripath)
     // .then(base64String => {
        
        //var encodedString = Base64.encode(base64String);

      const venue = { title: this.state.title, description: this.state.description,  opening_time: this.state.openhour,  image:uripath,address:this.state.address , share: this.state.checkFriends,public:this.state.checkVenue,type:this.props.navigation.state.params.type==''?'Venues':"Events",userid:this.state.userId,lattitude:this.state.currentLatitude,longitude:this.state.currentLongitude}
    	this.setState({loading:true})
     axios.post(`${API_URI}/addVenue`, qs.stringify(venue))

     .then(data => {
         //console.log("success",data.data)
       
         const fd = new FormData();  
         fd.append('image', {uri:venue.image, name:'test.jpg', type:'image/jpg'});
         fd.append('id',data.data.data)
         fd.append('types',this.props.navigation.state.params.fileType)
        //  //console.log(venue.image)
         axios.post(`${API_URI}/imageupload` , fd
         )         
             .then(data => {
                //console.log("RRRRRRRRRRRRRRRRRRRRR", data)
                this.setState({loading:false})
                Toast.show("Venue added Succesfully", Toast.LONG)
                this.props.navigation.navigate('HomeForm')
             }).catch(err => { 
              //console.log("KKKKKKKKKKKKK")
                 //console.log(err)
              
             })
    
     }).catch(err => {
     
         //console.log(err)
      
     })
   //  this.props.venueAction.AddVenue(venue)
   // })
    }
  }


  validate() {
    ////console.log("userrrr", this.state.email)
  let  re = /^\d{1,2}:\d{2}([ap]m)?$/;
    if (this.state.title == "") {
      this.setState({ errtitle: "Title required" })
    } else {
      this.setState({ errtitle: '' })
    }


    if (this.state.address == "") {
      this.setState({ erraddress: "Address required" })
    } else {
      this.setState({ erraddress: '' })
    }

    if (this.state.openhour == "") {
      this.setState({ errhour: "Opening hour required" })
    } else if(this.state.openhour != '' && !this.state.openhour.match(re)) {
   

      this.setState({ errhour: "Invalid time format time \n00:41 this format only accept" })
     
    } else {
      this.setState({ errhour: '' })
    }

    if (this.state.description == "") {
      this.setState({ errdescription: "Description required" })
    } else {
      this.setState({ errdescription: '' })
    }

    if (this.props.navigation.state.params.uripath == undefined) {
      this.setState({ errimage: "Image or video required" })
    } else {
      this.setState({ errimage: '' })
    }



  }
  _goBack = () => this.props.navigation.navigate('VenueForm', { navigationPageType: 'option' })

  render() {

 

    return (
      <LinearGradient style={{ minHeight: Dimensions.get('window').height }} colors={['#000', '#000']} locations={[0.5, 1]}>
        <Appbar.Header style={{ backgroundColor: 'transparent' }}>

          {/* <Appbar.BackAction onPress={this._goBack} color={"#FFF"} /> */}
          <TouchableOpacity   onPress={() => this._goBack()}>
				{/* <Appbar.BackAction
						
					/> */}

<AntDesignIcon style={{marginLeft: 10 }} color={"#FFF"} name={"arrowleft"} size={25} />
			</TouchableOpacity>

          <Appbar.Content
            title=""
            subtitle=""

          />
            <TouchableOpacity onPress={this.update}>
          <Text  style={{ color: '#fe6e00', marginRight: 10 }} >update</Text>
          </TouchableOpacity>  
        </Appbar.Header>

        <View style={{alignSelf:'center'}}>
  {/* <Bubbles size={10} color="#FFF" /> */}
 { this.state.loading?<Bars size={10} color="#FDAAFF" />:null}
  {/* <Pulse size={10} color="#52AB42" />
  <DoubleBounce size={10} color="#1CAFF6" /> */}
</View>
 
        <KeyboardAwareScrollView enableOnAndroid>
          <View style={registerStyle.container}>
          {this.props.navigation.state.params.fileType=='video'?
          <View style={{ padding: 50, alignSelf: "center" ,width:'100%',}}>
             <TouchableOpacity style={{marginTop:100}} onPress={()=>this.props.navigation.navigate('UploadForm',{navigationPageType:'camera',venueUploads:'1'})}  >
                {/* <Entypo style={{ alignSelf: 'center' }} color={"#FFFF"} name={"image"} size={50} /> */}
                <Text style={{ color: '#FFF', textAlign: 'center' }}>Add Poster/Video</Text>
                <Text style={{ color: '#FFF', textAlign: 'center' }}>Use Exit venue/Video</Text>
              </TouchableOpacity>
          
        <Video source={{uri:this.props.navigation.state.params.uripath}}   // Can be a URL or a local file.
        ref={(ref) => {
          this.player = ref
        }}                                      // Store reference
    
        style={registerStyle.backgroundVideo} >
          
        
          </Video>
          </View>:<ImageBackground source={{ uri: 'file://'+this.props.navigation.state.params.uripath }} style={{ padding: 50, alignSelf: "center" }}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('UploadForm',{navigationPageType:'camera',venueUploads:'1'})}  >
                <Entypo style={{ alignSelf: 'center' }} color={"#FFFF"} name={"image"} size={50} />
                <Text style={{ color: '#FFF', textAlign: 'center' }}>Add Poster/Video</Text>
                <Text style={{ color: '#FFF', textAlign: 'center' }}>Use Exit venue/Video</Text>
              </TouchableOpacity>
            </ImageBackground>}

            <Text style={[registerStyle.errors,{textAlign:'center'}]}>{this.state.errimage}</Text>
            <View style={registerStyle.formWrap}>

              <View style={registerStyle.contain}>



                <TextInput style={[registerStyle.input]}
                  underlineColorAndroid="transparent"
                  underlineColor='#25383C'
                  label="Event title"
                  selectionColor="#00beed"
                  placeholderTextColor="#8fa1b3"
                  autoCapitalize="none"
                  theme={{
                    //roundness: 50,
                    placeholderTextColor: '#FFF',

                    colors: {
                      primary: 'white',
                      underlineColor: '#FFF',
                      text: "white",
                      placeholder: "#777",
                    },
                    color: '#FFF'
                  }}
                  onChangeText={
                    // Set this.state.email to the value in this Input box
                    (value) => this.onChangeTitle(value)
                  }
                />
                <Text style={registerStyle.errors}>{this.state.errtitle}</Text>






                <TextInput style={[registerStyle.input]}
                  underlineColorAndroid="transparent"
                  //placeholder="Phone"
                  underlineColor='#25383C'
                  label="Enter Valid Address"
                  theme={{
                    //roundness: 50,
                    placeholderTextColor: '#FFF',

                    colors: {
                      primary: 'white',
                      underlineColor: '#FFF',
                      text: "white",
                      placeholder: "#777",
                    },
                    color: '#FFF'
                  }}
                  selectionColor="#00beed"
                  placeholderTextColor="#8fa1b3"
                  autoCapitalize="none"

                  onChangeText={
                    // Set this.state.email to the value in this Input box
                    (value) => this.onChangeAddress(value)
                  }
                />

                <Text style={registerStyle.errors}>{this.state.erraddress}</Text>


                <TextInput style={[registerStyle.input]}
                  underlineColorAndroid="transparent"
                  //placeholder="Phone"
                  underlineColor='#25383C'
                  label="Open hours"
                  theme={{
                    //roundness: 50,
                    placeholderTextColor: '#FFF',

                    colors: {
                      primary: 'white',
                      underlineColor: '#FFF',
                      text: "white",
                      placeholder: "#777",
                    },
                    color: '#FFF'
                  }}
                  selectionColor="#00beed"
                  placeholderTextColor="#8fa1b3"
                  autoCapitalize="none"

                  onChangeText={

                    (value) => this.onChangehour(value)
                  }
                />

                <Text style={registerStyle.errors}>{this.state.errhour}</Text>

                <TextInput style={[registerStyle.input]}
                  underlineColorAndroid="transparent"

                  underlineColor='#25383C'
                  label="Brief Description"
                  theme={{

                    placeholderTextColor: '#FFF',

                    colors: {
                      primary: 'white',
                      underlineColor: '#FFF',
                      text: "white",
                      placeholder: "#777",

                    },
                    color: '#FFF'
                  }}
                  selectionColor="#00beed"
                  placeholderTextColor="#8fa1b3"
                  autoCapitalize="none"

                  onChangeText={

                    (value) => this.onChangeDescription(value)
                  }
                />

                <Text style={registerStyle.errors}>{this.state.errdescription}</Text>

              </View>
              <View style={{ padding: 20, paddingBottom: 0, alignSelf: "center", flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                <View style={{ marginRight: 15 }}>
                  <Text style={registerStyle.BottomText}>Share with friends</Text>
                  <Text style={registerStyle.BottomText}>only</Text>
                </View>
                {

                  <TouchableOpacity style={{ marginRight: 25, marginTop: 10 }} onPress={() => this.setState({ checkFriends: !this.state.checkFriends })}>
                    <Ionicons name={this.state.checkFriends ? "ios-checkbox" : "ios-square-outline"} size={25} color={"#FFF"}></Ionicons>
                  </TouchableOpacity>
                }
                <View style={{ marginRight: 15 }}>
                  <Text style={registerStyle.BottomText}>Share as public</Text>
                  <Text style={registerStyle.BottomText}>venue</Text>
                </View>
                {

                  <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.setState({ checkVenue: !this.state.checkVenue })}>
                    <Ionicons name={this.state.checkVenue ? "ios-checkbox" : "ios-square-outline"} size={25} color={"#FFF"}></Ionicons>
                  </TouchableOpacity>
                }
              </View>



            </View>
            <View style={{ padding: 20, alignSelf: "center", flexDirection: 'row', width: '100%' }}>
              <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16 }}>Add admin +</Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    )
  }
}




export default AddVenue;

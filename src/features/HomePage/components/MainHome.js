import React, { Component } from 'react';
import { MainHomeStyles, MemberStyles } from "./styles";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  AsyncStorage,
  ScrollView,
  RefreshControl,
  ImageBackground,
  ActivityIndicator,
  PermissionsAndroid,
  Button
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Drawer } from 'react-native-material-drawer';
import SideMenu from '../../../components/SideMenu';
import LinearGradient from 'react-native-linear-gradient';
import { Appbar } from "react-native-paper";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FonIcon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getStory, getFollowerStory, getVenue } from "services";
import { IMAGE_URI } from '../../../_helpers/constants'
import PTRView from 'react-native-pull-to-refresh';
import Toast from 'react-native-simple-toast';
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import VideoPlayer from 'react-native-video-player';
import axios from 'axios';
var qs = require('qs');
import { API_URI } from '../../../_helpers/constants';
import { deleteVenue, insertVenue, venuescounts } from 'services/'



class MainHomeComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      loginType: '',
      myStory: [],
      userId: '',
      friendsStory: [],
      myFollowingStory: [],
      isLikeShare: false,
      venue: [],
      totvencount: 0,
      refreshing: false,
      setRefreshing: '',
      that: this,
      checkVenue: false,
      checkStory: false,
      dbvencount: 0,
      dbvenue: [],
      types: '',
      changetype:'',
      viewLikes:false,
      visible: false,
      venues: this.props.venue,
      video: { width: undefined, height: 200, duration: 10 },
      thumbnailUrl: undefined,
      videoUrl: undefined,
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('LoginType').then((data) => {

      this.setState({ loginType: data })
    });
  }

  async insertvenueintodb(data) {
    const insertvenue = await insertVenue(data);

  }

  callfinish() {

    this.setState({ userId: data })
    //this.props.friendsAction.getfollowingStory(data)
    //this.props.venueAction.allVenue();
    this.getStoryImage(data)
    this.getFollowerStoryImage(data)
    //this.getVenues()


  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let update = {}


    if (nextProps.venue !== prevState.venue) {
      update.venues = nextProps.venue
      nextProps.venue.map(info => {
        info.check = false;
        info.likeloader = false;
        return nextProps.venue;
      })
      let temp = []
      if (nextProps.venue.length !== 0) {

        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds


        var currentime = hours + ":" + min;

        nextProps.venue.forEach(data => {
          // //console.log(data.approved == "1", (currentime >= data.opening_time && currentime <= data.closing_time))
          let isfound = false;
          ////console.log("dbvenue",prevState.that.state.dbvenue.length)
          prevState.dbvenue.forEach(key => {
               ////console.log("key",key.status)
              if(key.id == data.id && key.status == 0 )
              {
                 isfound = true; 
                 //break;
              }
          })
          ////console.log("found",isfound) 
          prevState.that.insertvenueintodb(data);
          if (!isfound && data.approved == "1" && (currentime >= data.opening_time && currentime <= data.closing_time)) {
           
            temp.push(data)
          }
        })
        //prevState.that.getVenues();
      }


      if(prevState.viewLikes){
 
        temp.map((item) => {
          if (item.id === prevState.changetype) {
            item.check = !item.check
            //console.log(hey)
          }
        })

      }

      update.venue = temp 
    
    }

    if (nextProps.myFollowingStory !== prevState.myFollowingStory) {
      let group = nextProps.myFollowingStory.reduce((r, a) => {
        r[a.following_id] = [...r[a.following_id] || [], a];
        return r;
      }, {});
      update.myFollowingStory = group;
    }




    //  //console.log(update)
    return update;
  }

  onRefresh() {
    ////console.log("testing")
    /* this.setState({venue:[]});
      this.getVenues();
     this.setState({refreshing:true}) */
    // var array = [...this.state.venue]; // make a separate copy of the array
    // var index = 0 //array.indexOf(id)
    // if (index !== -1) {
    // array.splice(index, 1);
    AsyncStorage.getItem('userid').then((data) => {
     
      this.setState({ userId: data })

     
      this.props.friendsAction.getfollowingStory(data)
  
      this.getStoryImage(data)
      this.getFollowerStoryImage(data)
      this.getVenues()
    });

    this.setState({ refreshing: false })
   // this.setState({ venue: [] });

  }
  noRecords(value) {
    // 
    if (value == 0) {

      //   return <View >
      //   <Dialog
      //     visible={this.state.visible}
      //     footer={
      //       <DialogFooter>

      //         <DialogButton
      //           text="OK"
      //           onPress={() => { this.setState({visible:false})}}
      //         />
      //       </DialogFooter>
      //     }
      //   >
      //     <DialogContent>
      //     <Text style={{alignSelf:'center',fontSize:18}}>No Records Found.</Text>
      //     </DialogContent>
      //   </Dialog>
      // </View>
      return <View style={{ justifyContent: 'center', height: 200 }}>
        <Text style={{ color: '#FFF', alignSelf: 'center', fontSize: 18 }}>No Records Found.</Text>
      </View>;
    } else {
      return null;
    }

  }

  pressImageShare = (hey) => {
   
    // this.state.venue.map((item) => {
    //   if (item.id === hey.id) {
    //     item.check = !item.check
    //     //console.log(hey)
    //   }
    // })
    // console.log("VALLLLL",this.state.venue)
    this.setState({ venue: this.state.venue,changetype:hey.id ,viewLikes:!this.state.viewLikes})
  }


  //   setTimeout(()=>{
  //     this.props.venueAction.likeCount(like);
  //   },200)
  // //  this.props.venueAction.likeCount(like);
  // }

  onChangeLike = (like) => {
    console.log(  like.likeloader)
    this.state.venue.map((item) => {
      if (item.id === like.id) {
        item.likeloader = !item.likeloader
      
      }
    })
    this.setState({ venue: this.state.venue },function(){
   //   this.props.venueAction.likeCount(like);
    })


    setTimeout(()=>{
      this.props.venueAction.likeCount(like);
    },200)
  //  this.props.venueAction.likeCount(like);
  }

  componentDidMount() {
    //this.props.venueAction.venueStoryCount();
    AsyncStorage.getItem('userid').then((data) => {
      //console.log("userid",data)
      this.setState({ userId: data })
      this.props.friendsAction.getfollowingStory(data)
  
      this.getStoryImage(data)
      this.getFollowerStoryImage(data)
      this.getVenues()
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
          console.log(granted)
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
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    that.watchID = Geolocation.watchPosition((position) => {
      //Will give you the location on location change
      //console.log("RAaa",position);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      //getting the Longitude from the location json
      const currentLatitude = JSON.stringify(position.coords.latitude);
      console.log(position.coords.longitude);
      console.log(position.coords.latitude);
      this.props.venueAction.allVenue({lattitude:position.coords.latitude,longitude:position.coords.longitude});
   
      //getting the Latitude from the location json
      that.setState({ currentLongitude: currentLongitude });
      //Setting state Longitude to re re-render the Longitude Text
      that.setState({ currentLatitude: currentLatitude });
      //Setting state Latitude to re re-render the Longitude Text
    });
  }



  onCloseDrawer = () => {
    this.setState({ isOpen: false });
  }
  onChangDrawerMenu = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

 

  async getFollowerStoryImage(userId) {
    let response = ""
    response = await getFollowerStory(userId)

    setTimeout(() => {
      let temp = [];
      for (let i = 0; i < response.rows.length; ++i) {
        temp.push(response.rows.item(i));

      }
      if (response.rows.item(response.rows.length - 1) !== undefined) {
        let group = temp.reduce((r, a) => {
          r[a.FollowerKey] = [...r[a.FollowerKey] || [], a];
          return r;
        }, {});

        this.setState({ myFollowingStory: group, checkStory: true })
      }
    }, 100);
  }

  async getStoryImage(value) {
    ////console.log("RajaRaja")
    let response = ""
    if (value != '' && value != null) {
      response = await getStory(value)
      ////console.log(response.rows)
      setTimeout(() => {
        let temp = [];
        for (let i = 0; i < response.rows.length; ++i) {
          temp.push(response.rows.item(i));
          // //console.log(response.rows.item(i))
        }
        if (response.rows.item(response.rows.length - 1) !== undefined) {
          this.setState({ myStory: response.rows.item(response.rows.length - 1) })
        }
      }, 100);

    }
  }


  async getVenues() {
    let response = ""
    response = await getVenue()
    ///console.log("RRRRRRRRRRRRRRRRRRR","JJJJJJJJJJJJJJJJJ")
  //  setTimeout(() => {
      let temp = [];
      for (let i = 0; i < response.rows.length; ++i) {

        temp.push(response.rows.item(i));
        //  //console.log(response.rows.item(i))
      }
      if (response.rows.item(response.rows.length - 1) !== undefined) {


        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        ////console.log(this.state.venue)

        var currentime = hours + ":" + min;
        if (temp.length !== 0) {
          temp.forEach(data => {
            //  //console.log(data.approved == "1", (currentime >= data.opening_time && currentime <= data.closing_time))
            if (data.approved == "1") {
              data.check = false;

              this.state.dbvenue.push(data)
            }
          })

        }

        /* if (temp.length != 0) {
 
           this.setState({ venue: temp, checkVenue: true })
         }*/
      }

    // console.log("RRRRRRRRRRRRRRRRRRR",this.state.dbvenue)
   // }, 100);
  }


  async hidevenue(id) {
    //console.log("delete - id" + id);
    const hidevenue = await deleteVenue(id);
    //console.log(hidevenue)
    // setTimeout(() => {
    //   var array = [...this.state.venue]; // make a separate copy of the array
    //   var index = 0 //array.indexOf(id)
    //   if (index !== -1) {
    //     array.splice(index, 1);
    //     this.setState({ venue: array });
    //   }
    // }, 100);
  }


  likeShare(value) {
    if (value.check) {
      //console.log("values .....", value);
      return <View >
        <TouchableOpacity onPress={() => this.onChangeLike(value)}>
          <Text style={MemberStyles.share}>{value.status == "0" ? "Like this venue" : "Unlike this venue"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MainForm', { navigationPageType: 'friends',venue_id:value.id })}>
          <Text style={MemberStyles.share}>Share venue</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('LocationForm', { navigationPageType: 'map',lattitude:value.lattitude,longitude:value.longitude })}>
          <Text style={MemberStyles.share}>Go to this venue</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.hidevenue(value.id)}>
          <Text style={MemberStyles.share}>Hide venue</Text>
        </TouchableOpacity>


      </View>
    } else return null
  }

  onChangeFilter = (value) => {



    this.props.onChangeFilterVenue(value)

    this.setState({ types: value, isOpen: !this.state.isOpen })

  }

  myStories() {

    if (this.state.myStory.length != 0) {
      return <View >
        <Text style={{ marginLeft: 10, color: '#FFFF' }}>Local story</Text>

        <TouchableOpacity style={[MemberStyles.profileMenu]} onPress={() => this.props.navigation.navigate('UploadForm', { navigationPageType: 'stories' })}>
          {/* <View style={[MemberStyles.profileMenu]}> */}

          <View style={{ alignItems: "center" }}>

            <Image style={MemberStyles.viewContentImage} source={{ uri: this.state.myStory.Media_File }} />
          </View>
          {/* </View> */}

        </TouchableOpacity>

      </View>
    } else {
      return <View>
        <Text style={{ marginLeft: 10, color: '#000' }}>Local story</Text>
        <TouchableOpacity style={[MemberStyles.profileMenu, { alignItems: "center", justifyContent: 'center' }]} onPress={() => this.props.navigation.navigate('uploads', { navigationPageType: 'camera' })}>
          {/* <View style={[MemberStyles.profileMenu]}> */}

          <View style={{ alignItems: "center", justifyContent: 'center' }}>

            <AntDesignIcon style={{ alignItems: "center", justifyContent: 'center' }} color={"#FFFF"} name={"pluscircleo"} size={30} />
            <Text style={{ alignItems: "center", justifyContent: 'center', color: '#FFF', fontSize: 11 }}>Create a vibe</Text>
          </View>
          {/* </View> */}

        </TouchableOpacity>
      </View>
    }
  }

  wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  render() {

    const { venue } = this.props

    return (

      <Drawer
        open={this.state.isOpen}
        drawerContent={<View><SideMenu onChangeFilter={this.onChangeFilter} {...this.props} /></View>}
        onClose={() => this.onCloseDrawer()}
        //animationTime={250}
        pageHeight={"100%"}
        type="static"
        //anchor={"right"}
        tapToClose={true}
        //position={'right'}
        openDrawerOffset={"20%"} // 20% gap on the right side of drawer
        panCloseMask={0}
        closedDrawerOffset={"10%"}
        widthPercentage="80%"
        drawerStyle={{ width: this.state.isOpen ? '80%' : '55%' }}
      >

        <View style={MainHomeStyles.body}>
          <Appbar.Header style={{ backgroundColor: '#000' }}>

            <Appbar.Action onPress={() => { this.props.navigation.navigate('VenueForm', { navigationPageType: 'option', fileType: 'camera' }) }} icon="plus" color={"#FFF"} />

            <Appbar.Content
              title=""
              subtitle=""
            />

            <View style={MainHomeStyles.headerRightIcon}>


              <TouchableOpacity onPress={() => this.onChangDrawerMenu()}>
                <AntDesignIcon style={MainHomeStyles.topIcon} color={"#FFF"} name={"filter"} size={25} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { this.props.navigation.navigate('NotificationForm', { navigationPageType: 'list' }) }}>
                <Icons style={MainHomeStyles.topIcon} color={"#FFF"} name={"ios-notifications-outline"} size={25} />
              </TouchableOpacity>




            </View>
          </Appbar.Header>
          <LinearGradient colors={['#000', '#000']} locations={[0.5, 1]}>
            <ScrollView
            
            refreshControl={
              <RefreshControl
                 // tintColor={$.config.colors.style}
                  onRefresh={() => this.onRefresh()}
                  refreshing={this.state.refreshing}
              />
          }
            
            style={{ flex: 1 }} style={{ minHeight: Dimensions.get('window').height }} enableOnAndroid>




                <ScrollView style={MemberStyles.topVideoContainer} contentContainerStyle={{ flexDirection: 'row', height: 120,marginTop:10 }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true} >

                  {this.myStories()}

                  {Object.keys(this.state.myFollowingStory).map((keyName, i) => (

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('UploadForm', { navigationPageType: 'friendstories', story: this.state.myFollowingStory[keyName] })}>

                      <Text style={{ marginLeft: 10, color: '#FFFF', fontSize: 14 }}>{(this.state.myFollowingStory[keyName][this.state.myFollowingStory[keyName].length - 1].username).substring(0, 5)}</Text>
                      <View style={MemberStyles.profileMenu}>
                        <View style={{ alignItems: "center" }}>

                          <Image style={MemberStyles.viewContentImage} source={{ uri: IMAGE_URI + this.state.myFollowingStory[keyName][this.state.myFollowingStory[keyName].length - 1].image }} />
                          {/* <Image style={MemberStyles.viewContentImage} source={{ uri: "file:///" + this.state.myFollowingStory[keyName][this.state.myFollowingStory[keyName].length - 1].Media_File }} /> */}
                        </View>
                      </View>
                      {/* <View style={{ flexDirection: 'row-reverse' }}>
                        <Text style={{ marginRight: 15, color: '#FFFF' }}>10k</Text>
                      </View> */}
                    </TouchableOpacity>
                  ))}


                </ScrollView>
              
   

              <View >
                <View style={{ flex: 1 }}>

                  {this.noRecords(this.state.venue.length)}
                  {this.state.venue.map((item, intex) => (
      
                    <View style={{ width: "100%",marginBottom:10 }}>
                      <View style={MemberStyles.homeContainer}>
                      <Text style={{ color: "#FFFF", marginLeft: 10 ,fontSize:20}}>{item.type}</Text>

                        <View style={{ flexDirection: 'row' }}>

                          <View style={{ flexDirection: 'row', width: "50%" }}>
                            <View style={MemberStyles.postMenu}>
                              <View>
                                <Image style={MemberStyles.postImage} source={require("../../../assets/images/photoimag.jpg")} />
                              </View>

                            </View>
                            <View style={MemberStyles.titlePost}>
                              <Text style={MemberStyles.titleText}>{item.title}</Text>

                             
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('LocationForm', { navigationPageType: 'map',lattitude:item.lattitude,longitude:item.longitude })}>
                                <View style={{ flexDirection: 'row' }}>
                                  <MaterialCommunityIcons color={"#e1ad01"} name={"map-marker"} size={15} />
                                  <Text style={MemberStyles.kmText}>{Math.trunc(Number(item.distance))} km</Text>
                                </View>
                              </TouchableOpacity>
                            </View>
                          </View>

                          <View style={MemberStyles.likeContainer}>

                            <View style={{ margin: 5 }}>
                              <TouchableOpacity onPress={() => this.onChangeLike(item)}>
                                <View style={{ flexDirection: 'row-reverse' }}>
                               {  item.likeloader && <ActivityIndicator color={"#fff"} />}
                                  <AntDesignIcon color={item.status=="1"? "#FF198C" : "#FFFF"} name={"hearto"} size={15} />
                                  <Text style={MemberStyles.likeText}>{item.status=="1"?"Unlike":"Like"}</Text>


                                </View>
                              </TouchableOpacity>
                              <View style={{ flexDirection: 'row' }}>

                                <Text style={MemberStyles.likeVenue}>{item.likes_count} users like this venue </Text>
                              </View>
                            </View>
                          </View>

                        </View>
                      </View>




                      {(item.image).substring((item.image).length - 3, (item.image).length) != "mp4" ? <View style={MemberStyles.imageContainer} >

                        <TouchableOpacity onPress={() => this.pressImageShare(item)}>
                          <ImageBackground style={MemberStyles.postImages} source={{ uri: IMAGE_URI + item.image }} >
                            {this.likeShare(item)}

                          </ImageBackground>
                        </TouchableOpacity>
                      </View> : <TouchableOpacity onPress={() => this.pressImageShare(item)}>
                          <VideoPlayer
                            endWithThumbnail
                            autoplay
                            repeat={true}
                            thumbnail={{ uri: this.state.thumbnailUrl }}
                            video={{ uri: IMAGE_URI + item.image }}
                            videoWidth={250}
                            videoHeight={150}
                             
                            ref={r => this.player = r}
                          />

                        </TouchableOpacity>}

                      <View style={MemberStyles.homeContainer}>


                        <View style={{ flexDirection: 'row' }}>

                          <View style={{ flexDirection: 'row', flex: 1 }}>

                            <View style={MemberStyles.titlePost}>

                              <Text style={[MemberStyles.kmText, { fontSize: 13 }]}>{item.opening_time} - {item.closing_time}</Text>
                     
                                <View style={{ flexDirection: 'row' }}>

                                  <Text style={[MemberStyles.kmText, { fontSize: 16 }]}>{item.description}</Text>
                                </View>
                            
                            </View>
                          </View>

                          <View style={[MemberStyles.likeContainer, { width: "10%" }]}>

                            <View style={{ margin: 5 }}>
                              <TouchableOpacity onPress={() => this.onChangeLike(item)}>
                                <View style={{ flexDirection: 'row-reverse', marginBottom: 5 }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('MainForm', { navigationPageType: 'friends',venue_id:item.id })}>
                                  <FonIcon color={"#FFFF"} name={"send"} size={20} />
                                </TouchableOpacity>

                                </View>
                              </TouchableOpacity>
                              <View style={{ flexDirection: 'row', marginTop: 5 }}>

                                <EntypoIcon color={"#FFFF"} name={"dots-three-vertical"} size={15} />
                              </View>
                            </View>
                          </View>

                        </View>
                      </View>
                    </View>


                  ))}
                </View>

                <View style={{ height: 150, marginTop: 10 }}>


                </View>





              </View>



            </ScrollView>
          </LinearGradient>
        </View>
      </Drawer>

    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 },
}

export default MainHomeComponent;

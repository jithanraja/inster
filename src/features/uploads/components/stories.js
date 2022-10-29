import React, { Fragment, Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  AsyncStorage ,
   Animated
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { Appbar } from "react-native-paper";
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import VideoPlayer from 'react-native-video-player';
import { styles, MainHomeStyles,groupStyles } from "./styles";
import { getStory, insertStory } from "services";

import StoryImages from "react-native-stories";
import Toast from 'react-native-simple-toast';
import Carousel, { Pagination } from 'react-native-snap-carousel';
let d = 0;

const { width } = Dimensions.get('window');
export default class StoriesScreen extends Component {

  scrollX = new Animated.Value(0)

  constructor(props) {
    super(props)
    this.state = {
      filepath: {
        data: '',
        uri: ''
      },
      fileData: '',
      fileUri: '',
      uripath: '',
      visible: false,
      caption: '',
      images: [],
      video: { width: undefined, height: 200, duration: undefined },
			thumbnailUrl: undefined,
			videoUrl: undefined,
    }

  }


  renderFileData() {
    if (this.state.fileData) {
      return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
        style={styles.images}
      />
    } else {
      return <Image source={require('../../../assets/images/user.png')}
        style={styles.images}
      />
    }
  }
  componentDidMount() {

    AsyncStorage.getItem('userid').then((data) => {


      this.getStoryImage(data)
    });
    //  //console.log(this.props.navigation.state.params.uripath)
    //  this.setState({ uripath: this.props.navigation.state.params.uripath })
  }

  getSwipeValue(index) {
    //console.log(index)

    //    if(this.state.images.length==index+1){
    // 	   this.props.navigation.navigate('HomeForm')
    //    }
    this.setState({ activeSlide: index })
    //	this.setState({ media: this.state.slierassets[index].Media_File })
    //	this.setState({ caption: this.state.slierassets[index].Copation })

  }


  async getStoryImage(userid) {
    let response = ""


    response = await getStory(userid)
    setTimeout(() => {
      let imagetemp = []
      for (let i = 0; i < response.rows.length; ++i) {

        if (response.rows.item(i).Media_File !== "")
          imagetemp.push(response.rows.item(i));
        ////console.log(imagetemp)

        // //console.log(response.rows.item(i).Media_File)
      }
      this.setState({ images: imagetemp })
      //   let temp = [];
      //   for (let i = 0; i < response.rows.length; ++i) {
      //   // //console.log(response.rows.item(i))
      //     temp.push(response.rows.item(i));

      //   }
      //   //console.log(response.rows.item(response.rows.length-1))

      // this.setState({ myStory: response.rows.item(response.rows.length-1) })

    }, 100);
  }




  _goBack = () => this.props.navigation.navigate('HomeForm');

  renderCaption() {
    if (this.state.visible) {
      return <TextInput
        autoFocus={true}
        style={{ backgroundColor: 'transparent', height: 50, margin: 20, color: '#FFF', fontSize: 20, marginTop: 10 }}
        onChangeText={text => this.onChangeText(text)}
        value={this.state.caption}
      />



    } else {
      return <View></View>
    }
  }

  onChangeText(text) {

    this.setState({ caption: text })

  }


  goToNextSlide = (val) => {
    //console.log(val);
    setTimeout(() => this._slider1Ref.snapToNext(), 250)
  }
  goToPrevSlide = (val) => {
    //console.log(val);
    setTimeout(() => this._slider1Ref.snapToPrev(), 250)
  }
  closeModal = () => {
    this.setState({ modalVisible: false });
  }

  onScroll = () => {

  }
  shareStory = async () => {

    const { uripath, caption } = this.state

    const response = await insertStory(uripath, caption, 1);
    setTimeout(() => {
      //console.log(response)
      Toast.show("Data saved successfully", Toast.LONG);

    }, 100)
    this.props.navigation.navigate('HomeForm')



  }


  _renderItem = ({ item, index }) => {

    return (
      <View style={styles.slide}>
        <ImageBackground style={styles.sliderimage} source={{ uri: (item === null) ? " " : 'file://' + item.Media_File }} >
          <Appbar.Header style={{ backgroundColor: 'transparent' }}>

            {/* <Appbar.Action icon="close" onPress={this._goBack} style={MainHomeStyles.topIcon} color={"#FFF"} /> */}
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
        </ImageBackground>
        <Button onPress={this.goToNextSlide}
          transparent
          style={{ width: 120, height: '100%', position: 'absolute', right: 0 }}
          title="Press Me"
        >

        </Button>
        <Button
          onPress={this.goToPrevSlide}
          transparent
          style={{ width: 120, height: '100%', position: 'absolute', left: 0 }}
          title="bress Me"
        >

        </Button>
      </View>
    );
  }

  render() {

    //this.setState({uripath:this.props.navigation.state.params.uripath})
  let position = Animated.divide(this.scrollX, width);

    //console.log(this.state.images)
    return (

      //   <ImageBackground source={{ uri: "file:///" + this.state.uripath }} style={styles.body}>
      //     <Appbar.Header style={{ backgroundColor: 'transparent' }}>

      //       <Appbar.Action icon="close" onPress={this._goBack} style={MainHomeStyles.topIcon} color={"#FFF"} />

      //       <Appbar.Content
      //         title=""
      //         subtitle=""

      //       />
      //       <View style={MainHomeStyles.headerRightIcon}>


      //         <TouchableOpacity onPress={this.shareStory}>
      //           <FontIcon style={MainHomeStyles.topIcon} color={"#FFF"} name={"send"} size={25} />
      //         </TouchableOpacity>





      //       </View>

      //     </Appbar.Header>

      //     <View style={{ justifyContent: 'center' }}>
      //       <TouchableOpacity onPress={() => this.setState({ visible: true })} style={styles.btnSection}  >
      //         <Text style={{ textAlign: 'center', fontSize: 20, paddingBottom: 10,color:"#FFF" }} >Tap to title caption</Text>
      //       </TouchableOpacity>

      //        {this.renderCaption()}

      //     </View>
      //   </ImageBackground>
      // <View style={{flex:1,backgroundColor:"#000"}}>
      //   {/* <Button onPress={this.props.closeModal} style={{ width: 50, zIndex: 999, height: 50, borderRadius: 25, justifyContent: 'center', position: 'absolute', top: 0, right: 0, backgroundColor: 'white' }} title=' '>
      //               <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 26 }}>X</Text>
      //           </Button> */}
      //   <Carousel
      //     ref={c => this._slider1Ref = c}
      //     data={(this.state.images === null) ? " " : this.state.images}
      //     renderItem={this._renderItem}
      //     sliderWidth={400}
      //     sliderHeight={100}
      //     itemWidth={400}

      //     hasParallaxImages={true}
      //     loop={true}
      //     loopClonesPerSide={2}
      //     autoplay={true}
      //     autoplayDelay={500}
      //     autoplayInterval={3000}
      //     containerCustomStyle={styles.slider}
      //     contentContainerCustomStyle={styles.sliderContentContainer}
      //     onSnapToItem={(index) => this.getSwipeValue(index)}

      //     onLayout={() => this.onScroll()}
      //   />
      //   <Pagination
      //     dotsLength={this.state.images.length}
      //     activeDotIndex={0}
      //     containerStyle={styles.paginationContainer}
      //     dotColor={"#fff"}
      //     dotStyle={styles.paginationDot}
      //     inactiveDotColor={"#000"}
      //     inactiveDotOpacity={0.7}
      //     inactiveDotScale={0.9}
      //     carouselRef={this._slider1Ref}
      //     tappableDots={!!this._slider1Ref}
      //   />
      // </View>




      
// 			<View style={{ flex: 1, backgroundColor: "#000" }} >


//       <Appbar.Header style={{ backgroundColor: '#000' }}>


//         {/* <Appbar.BackAction
//           onPress={() => this._goBack()}
//         /> */}
//    <TouchableOpacity  style={{width:45,height:40}}  onPress={() => this._goBack()}>
			
// <AntDesignIcon style={{marginLeft: 10 }} color={"#FFF"} name={"arrowleft"} size={25} />
// 			</TouchableOpacity>
//         {/* <MaterialCommunityIcons style={{ alignSelf: 'center', marginLeft: 50 }} color={"#FFF"} name={"map-marker"} size={18} />
//         <Appbar.Content
//           title="Reading"
//           titleStyle={{ color: "#e1ad01" }}

//         /> */}

//       </Appbar.Header>


//       <View style={{ flex: 1, justifyContent: 'center' }} >



//         <View style={{ height: '100%' }}>
//           <ScrollView contentContainerStyle={{ flexDirection: 'row', }}
//             showsHorizontalScrollIndicator={false}
//             horizontal={true} >
//             {this.state.images.map((item, intex) => (

//               <View style={{ justifyContent: 'center' }}>

//                 <View style={[groupStyles.profileMenu, { height: '100%', width: 350 }]}>

//                   <View style={{ alignItems: "center" }}>

//                   {(item.Media_File).substring((item.Media_File).length - 3, (item.Media_File).length) != "mp4" ? <Image style={groupStyles.viewContentImage} source={{ uri:item.Media_File }} /> : <VideoPlayer
//                       endWithThumbnail
//                       autoplay
//                       thumbnail={{ uri: this.state.thumbnailUrl }}
//                       video={{ uri: item.Media_File }}
//                       videoWidth={150}
//                       videoHeight={400}
//                       duration={this.state.video.duration}
//                       ref={r => this.player = r}
//                     />}
//                   </View>
//                 </View>
               

//               </View>

//             ))}


//           </ScrollView>
//         </View>
//         {/* <Text style={{color:"#FFFF",marginLeft:10}}>Venues</Text>       */}


//         <View style={{ height: 50, marginTop: 10 }}>

//         </View>




//       </View>

//     </View>

<View style={{flex:1,backgroundColor: '#000' }}>
<Appbar.Header style={{ backgroundColor: '#000' }}>



<TouchableOpacity  style={{width:45,height:40}}  onPress={() => this._goBack()}>
  
<AntDesignIcon style={{marginLeft: 10 ,marginTop:10}} color={"#FFF"} name={"arrowleft"} size={25} />
   </TouchableOpacity>


 </Appbar.Header>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  
       
<View
  // this will bound the size of the ScrollView to be a square because
  // by default, it will expand regardless if it has a flex value or not
  style={{ width, height: "90%" }}
  >
  <ScrollView
    horizontal={true}
    pagingEnabled={true} // animates ScrollView to nearest multiple of it's own width
    showsHorizontalScrollIndicator={false}
    // the onScroll prop will pass a nativeEvent object to a function
    onScroll={Animated.event( // Animated.event returns a function that takes an array where the first element...
      [{ nativeEvent: { contentOffset: { x: this.scrollX } } }] // ... is an object that maps any nativeEvent prop to a variable
    )} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
    scrollEventThrottle={16} // this will ensure that this ScrollView's onScroll prop is called no faster than 16ms between each function call
    >
    {this.state.images.map((item, i) => { // for every object in the photos array...
     {console.log((item.Media_File).substring((item.Media_File).length - 3, (item.Media_File).length) != "mp4")}
     
      return ( 
                          (item.Media_File).substring((item.Media_File).length - 3, (item.Media_File).length) != "mp4" ? <Image key={i} style={{ width, height:  "90%" }} source={{ uri:item.Media_File }} /> :<ImageBackground key={i} style={{ width, height: width }} source={{ uri:"" }} > 
                          <VideoPlayer
                          key={i}
                      endWithThumbnail
                      autoplay
                      thumbnail={{ uri: this.state.thumbnailUrl }}
                      video={{ uri: item.Media_File }}
                      videoWidth={width}
                      videoHeight={500}
                      duration={this.state.video.duration}
                      ref={r => this.player = r}
                    />
                </ImageBackground>
                    
        //// <Image
        //   key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
        //   style={{ width, height: width }}
        //   source={source.Media_File}
        // />
      );
    })}
  </ScrollView>
</View>
<View
  style={{ flexDirection: 'row' }} // this will layout our dots horizontally (row) instead of vertically (column)
  >
  {this.state.images.map((_, i) => { // the _ just means we won't use that parameter
    let opacity = position.interpolate({
      inputRange: [i - 1, i, i + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
      outputRange: [0.3, 1, 0.3], // when position is not i, the opacity of the dot will animate to 0.3
      // inputRange: [i - 0.50000000001, i - 0.5, i, i + 0.5, i + 0.50000000001], // only when position is ever so slightly more than +/- 0.5 of a dot's index
      // outputRange: [0.3, 1, 1, 1, 0.3], // is when the opacity changes from 1 to 0.3
      extrapolate: 'clamp' // this will prevent the opacity of the dots from going outside of the outputRange (i.e. opacity will not be less than 0.3)
    });
    return (
      <Animated.View // we will animate the opacity of the dots so use Animated.View instead of View here
        key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
        style={{ opacity, height: 10, width: 10, backgroundColor: '#FFF', margin: 8, borderRadius: 5 }}
      />
    );
  })}
</View>
</View>
</View>
    );
  }
}
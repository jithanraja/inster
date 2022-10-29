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
  AsyncStorage,
  PanResponder,
  Animated,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { Appbar } from "react-native-paper";
import FontIcon from 'react-native-vector-icons/FontAwesome';
import ImgToBase64 from 'react-native-image-base64';
import { styles, MainHomeStyles } from "./styles";

import Video from "react-native-video";

let FORWARD_DURATION = 7;

import Toast from 'react-native-simple-toast';

class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filepath: {
        data: '',
        uri: ''
      },
      fileData: '',
      fileUri: '',
      uripath: '',
      captioname: "0",
      visible: false,
      visiblity: false,
      caption: '',
      userId: '',
      path: '',
      data64: '',
      paused: false,

      //  fileType:'camera'
      pan: new Animated.ValueXY()   //Step 1
    }
    this._panResponders1 = PanResponder.create({
      onPanResponderMove: (e, { dy }) => {
        const { height: windowHeight } = Dimensions.get(`window`)
        return this.props.onZoomProgress(
          Math.min(Math.max(dy * -1 / windowHeight, 0), 0.5),
        )
      },
      onMoveShouldSetPanResponder: (ev, { dx }) => {
        return dx !== 0
      },
      onPanResponderGrant: () => {
        return this.props.onZoomStart()
      },
      onPanResponderRelease: () => {
        return this.props.onZoomEnd()
      },
    })

    this.panResponder = PanResponder.create({    //Step 2
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { //Step 3
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) => { } //Step 4
    });

  }



  chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      //console.log('Response = ', response);

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
        //console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });
  }

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      //console.log('Response = ', response);

      if (response.didCancel) {
        //console.log('User cancelled image picker');
      } else if (response.error) {
        //console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        //console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        //console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });

  }

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      //console.log('Response = ', response);

      if (response.didCancel) {
        //console.log('User cancelled image picker');
      } else if (response.error) {
        //console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        //console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        //console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });

  }

  renderFileData() {
    if (this.state.fileData) {
      //console.log("filedata", this.state.fileData)
      return <Image source={{ uri: this.state.fileData }}
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
      // userid = data;
      this.setState({ userId: data })
    });
    //console.log("RRRRRR", this.props.navigation.state.params.uripath)
    this.setState({ uripath: this.props.navigation.state.params.uripath, fileType: this.props.navigation.state.params.fileType })
  }
  handleInputBlur = (inputName) => {
    if (inputName === 'uname') {
      this.setState({
        captioname: "0"
      })

    }

  }

  handleInputFocus = (inputName) => {
    if (inputName === 'uname') {
      this.setState({
        captioname: "1"
      })
    }

  }

  _goBack = () => this.props.navigation.navigate('uploads', { navigationPageType: "camera" });

  renderCaption() {
    ////console.log(this.state.visible,this.state.captioname,this.state.visiblity)

    if (this.state.visible && this.state.captioname == "1") {
      return <View>
        <TextInput
          // autoFocus={true}
          placeholder="Type here...."
          placeholderTextColor="#FFF"
          onBlur={() => this.handleInputBlur('uname')}
          onFocus={() => this.handleInputFocus('uname')}
          style={{ backgroundColor: 'transparent', height: 50, margin: 20, color: '#FFF', fontSize: 20, marginTop: 10 }}
          onChangeText={text => this.onChangeText(text)}
          value={this.state.caption}
        />
      </View>


    } else {
      return <View></View>
    }
  }

  onChangeText(text) {

    this.setState({ caption: text })

  }




  displayimage() {



    if (this.state.fileType == 'image') {
      return <ImageBackground source={{ uri: this.state.uripath }}
        {...this._panResponders1.panHandlers} style={[styles.body]}>
        <Appbar.Header style={{ backgroundColor: 'transparent' }}>

          <Appbar.Action icon="close" onPress={this._goBack} style={MainHomeStyles.topIcon} color={"#FFF"} />

          <Appbar.Content
            title=""
            subtitle=""

          />
          <View style={MainHomeStyles.headerRightIcon}>


            <TouchableOpacity onPress={this.shareStory}>
              <FontIcon style={MainHomeStyles.topIcon} color={"#FFF"} name={"send"} size={25} />
            </TouchableOpacity>





          </View>

        </Appbar.Header>

        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => this.setState({ visible: true, captioname: "1" })} style={styles.btnSection}  >
            <Text style={{ textAlign: 'center', fontSize: 20, paddingBottom: 10, color: "#FFF" }} >Tap to title caption</Text>
          </TouchableOpacity>

          {this.renderCaption()}

          {this.state.captioname == "0" ? <Animated.View
            {...this.panResponder.panHandlers}                       //Step 1
            style={[this.state.pan.getLayout(), MainHomeStyles.circle]}>
            <Text style={MainHomeStyles.text}>{this.state.caption}</Text>
          </Animated.View> : null}

        </View>
      </ImageBackground>;
    }

    else {
      return <View style={{ flex: 1, backgroundColor: "#000" }}>
        <Appbar.Header style={{ backgroundColor: 'transparent' }}>

          <Appbar.Action icon="close" onPress={this._goBack} style={MainHomeStyles.topIcon} color={"#FFF"} />

          <Appbar.Content
            title=""
            subtitle=""

          />
          <View style={MainHomeStyles.headerRightIcon}>


            <TouchableOpacity onPress={this.shareStory}>
              <FontIcon style={MainHomeStyles.topIcon} color={"#FFF"} name={"send"} size={25} />
            </TouchableOpacity>





          </View>

        </Appbar.Header>
        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => { this.setState({ visible: true, captioname: "1" }) }} style={[styles.btnSection, { height: 30 }]}  >
            <Text style={{ textAlign: 'center', fontSize: 20, paddingBottom: 10, color: "#FFF" }} >Tap to title caption</Text>
          </TouchableOpacity>

          {this.renderCaption()}

        </View>
        <View style={{ height: '85%', width: '100%' }}>
          <Video source={{ uri: this.state.uripath }}   // Can be a URL or a local file.
            ref={(ref) => {
              this.player = ref
            }}                                      // Store reference
            //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
            //   onError={this.videoError}               // Callback when video cannot be loaded
            style={MainHomeStyles.backgroundVideo} >


          </Video>
        </View>
      </View>;

    }
  }


  shareStory = async () => {

    const { uripath, caption, userId } = this.state
    /*data.append("image",{
      file: this.state.images[0],
      uri: this.state.images[0].path,
      type: this.state.images[0].mime,
      size: this.state.images[0].size,
      name: filename
    })*/
    //ImgToBase64.getBase64String('file://'+uripath)
    //.then(base64String => {
    let story = { story_title: caption, image: uripath, uripath: uripath }
    this.props.navigation.navigate('UploadForm', { navigationPageType: 'share', storyImage: story })
    // this.props.storyAction.addStory(story)
    // this.setState({path:base64String})
    //}

    //)
    //.catch(err => //console.log(err));

    // const { uripath,caption ,userId} = this.state

    // 	const response = await insertStory(uripath, caption,userId);
    // 	setTimeout(() => {
    //  //console.log(response)
    // 		Toast.show("Data saved successfully", Toast.LONG);

    // 	}, 100)
    // 	this.props.navigation.navigate('HomeForm')



  }

  render() {

    //this.setState({uripath:this.props.navigation.state.params.uripath})

    return (
      <View style={{backgroundColor: '#000' ,flex:1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        {this.displayimage()}
      </TouchableWithoutFeedback>
      </View>
    )


  }
}

export default CameraScreen




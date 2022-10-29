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
  TouchableOpacity,
  PermissionsAndroid
} from 'react-native';
import {styles} from "./styles";
import { RNCamera } from 'react-native-camera';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

//import { CameraKitCameraScreen } from 'react-native-camera';
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};


class CameraComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filepath: {
        data: '',
        uri: ''
      },
      fileData: '',
      fileUri: '',
      frontcam:false,
      frontRear:RNCamera.Constants.Type.back
    }

  }

  

  componentDidMount(){
   // this.setState({isPermitted:true})

   
  }

  renderFileData() {
    if (this.state.fileData) {
      return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
        style={styles.images}
      />
    } else {
      return <Image  source={require('../../../assets/images/user.png')}
        style={styles.images}
      />
    }
  }

  renderFileUri() {
    if (this.state.fileUri) {
      return <Image
        source={{ uri: this.state.fileUri }}
        style={styles.images}
      />
    } else {
      return <Image
        source={require('../../../assets/images/user.png')}
        style={styles.images}
      />
    }
  }


b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;
  
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
  
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
  
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      var byteArray = new Uint8Array(byteNumbers);
  
      byteArrays.push(byteArray);
    }
  
    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }



  
takePicture = async () => {
  if (this.camera) {

   let options = { quality: 0, base64: true };
   if(this.state.frontRear==RNCamera.Constants.Type.front)
   {

 options =Object.assign( options,{position:'absolute', quality: 0, exif: true, writeExif: true, mirrorImage: true,base64: true ,top:0,left:0,fixOrientation:true})
   }else{
    options =Object.assign(options,{
      quality: 0,
      orientation: "portrait",
      pauseAfterCapture: true,
      fixOrientation: true,
       base64: true 
    })
  }
    const data = await this.camera.takePictureAsync(options);

    //console.log("RRR" ,data.uri, data.width, data.height)
    ////console.log("data from camera",data)
      if(this.props.navigation.state.params.venueUploads=='1'){
        this.props.navigation.navigate('VenueForm',{navigationPageType:'add',uripath:data.uri,fileType:'image',data:data})
       

      }else{
    this.props.navigation.navigate('UploadForm',{navigationPageType:'filter',uripath:data.uri,fileType:'image',data:data})
    this.setState({fileUri:data.uri,isPermitted: false,imgwidth:"100%",imghight:100,imgborder:0})
      }
  }
};

async startRecording() {
//  let options ={
//   position:'absolute',
//    quality: 0,
//     exif: true,
//      writeExif: true,
//       mirrorImage: true,
//       base64: true ,
//       top:0,
//       left:0,
//       fixOrientation:true,
//       base64:true
//   }

const options = {
  // quality: 0.5,
  // fixOrientation: true,
  // forceUpOrientation: true,
  // videoOrientation: 1,
  // deviceOrientation: 1,
  // mute: true,
  orientation:'portrait', 
  quality: RNCamera.Constants.VideoQuality["480p"], 
  maxDuration: 10,
  mirrorVideo:false
 // mirrorVideo:false,
 //position:'absolute', quality: 0, exif: true, writeExif: true,base64: true ,top:0,left:0,fixOrientation:true

};
  this.setState({ recording: true });
  // default to mp4 for android as codec is not set
  const { uri, codec = "mp4" } = await this.camera.recordAsync(options);
  this.setState({ recording: false, processing: true });
  const type = `video/${codec}`;

  const data = new FormData();
  data.append("video", {
    name: "mobile-video-upload",
    type,
    uri
  });

  //const user = fileToBase64(uri)
 // const bimage = b64
  //console.log("Video",uri)
 /// this.props.navigation.navigate('UploadForm',{navigationPageType:'filter',uripath:uri,fileType:'video'})

  if(this.props.navigation.state.params.venueUploads=='1'){
    this.props.navigation.navigate('VenueForm',{navigationPageType:'add',uripath:uri,fileType:'video'})
   

  }else{
this.props.navigation.navigate('UploadForm',{navigationPageType:'filter',uripath:uri,fileType:'video'})
this.setState({fileUri:data.uri,isPermitted: false,imgwidth:"100%",imghight:100,imgborder:0})
  }
  this.setState({ processing: false });
}

frontRearCamera(){
 
 let value =!this.state.frontcam

  if(value){
    this.setState({frontRear: RNCamera.Constants.Type.front,frontcam:value})
  }else{
    this.setState({frontRear: RNCamera.Constants.Type.back,frontcam:value})
  }

}

stopRecording() {
  this.camera.stopRecording();
}
  render() {
   
    const { recording, processing } = this.state;

    let button = (
      <TouchableOpacity
        onPress={this.startRecording.bind(this)}
        style={styles.capture}
      >
        <Text style={{ fontSize: 14 }}> Video </Text>
      </TouchableOpacity>
    );

    if (recording) {
      button = (
        <TouchableOpacity
          onPress={this.stopRecording.bind(this)}
          style={styles.capture}
        >
          <Text style={{ fontSize: 14 }}> STOP </Text>
        </TouchableOpacity>
      );
    }

    if (processing) {
      button = (
        <View style={styles.capture}>
          {/* <ActivityIndicator animating size={18} /> */}
        </View>
      );
    }
      //  if (this.state.isPermitted) {
      return (
        <View style={styles.photoview}>
        <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={this.state.frontRear}
        flashMode={RNCamera.Constants.FlashMode.off}
     // aspect={RNCamera.constants.Aspect.fill}
        autoFocus={"off"}
         skipProcessing={true}
        mirrorImage={false}
        //mirrorVideo= {true}
        ratio={"16:9"}
        zoom={0.005}
            //   captureTarget={RNCamera.constants.CaptureTarget.disk}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        >
        <View style={{ flex: 0, justifyContent: "center" ,backgroundColor:null,width:'100%'}}>
        <Text style={{color:'#FFF',width:'100%',textAlign:'center'}}>click to capture image,</Text>
        <Text style={{color:'#FFF',width:'100%',textAlign:'center'}}>press and hold to record a video</Text>
        <Text style={{color:'#FFF',width:'100%',textAlign:'center'}}> video up to 60 sec</Text>
        </View>
         <View style={{ flex: 0, flexDirection: "row", justifyContent: "center" ,backgroundColor:null,width:'100%'}}>
         <TouchableOpacity  style={{backgroundColor:null,alignSelf:'center',marginRight:50}}>
          <Entypo  color={"#FFFF"} name={"image"} size={25} />
        </TouchableOpacity>

          <TouchableOpacity onPress={recording? this.stopRecording.bind(this):this.takePicture.bind(this)} onLongPress={this.startRecording.bind(this)}     activeOpacity={0.6} style={[styles.capture,{backgroundColor:null}]}>
          <MaterialCommunityIcons  color={recording? '#FF0000':"#FFFF"} name={recording? "stop-circle":"circle-slice-8"} size={90} />
        </TouchableOpacity>
         
        <TouchableOpacity onPress={()=>this.frontRearCamera() }  style={{backgroundColor:null,alignSelf:'center',marginLeft:50}}>
          <Ionicons  color={"#FFFF"} name={"ios-reverse-camera"} size={30} />
        </TouchableOpacity>
        </View>
        </RNCamera>
      </View>
      );
     
    
  }
}



export default CameraComponent;

// export async function fileToBase64(uri) {
//   try {
//       const content = await FileSystem.readAsStringAsync(uri)
//       return base64.fromByteArray(stringToUint8Array(content))
//   } catch(e) {
//       console.warn('fileToBase64()', e.message)
//       return ''
//   }
// }
import React, { Component, useEffect, useState, useRef } from 'react';
import { ActivityIndicator,Platform, StyleSheet, View,  Image,Dimensions, TouchableOpacity, Alert, Animated,AsyncStorage,PushNotificationIOS  } from 'react-native';

import { createRootNavigator } from "./RouteNavigator";
import LinearGradient from 'react-native-linear-gradient';
import { Provider } from 'react-redux'
import { DefaultTheme,DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import  store from './stores';

import firebase from 'react-native-firebase';
import I18n, { getLanguages } from 'react-native-i18n';
import PushNotification from "react-native-push-notification";
const firebaseConfig = {
	appId: '1:790023307485:android:8f43ce064a9696fc349b34',
	messagingSenderId: '790023307485',
	projectId: 'socialwal-1580994701445',
	storageBucket: 'socialwal-1580994701445.appspot.com',
	apiKey: "AIzaSyDdp023PrOGGC-e7BnxjRNeA82uMMHLXLo",
	databaseURL: "https://socialwal-1580994701445.firebaseio.com",

}
firebase.initializeApp(firebaseConfig)

export default class Myapp extends Component {

  constructor() {

    super();

    this.state = {

      isVisible: true,
      progress: 0,
      indeterminate: true,

    }
    //this.onPressNotificacion = this.onPressNotificacion.bind(this); 
    //firebase.notifications().onNotificationOpened(this.onPressNotificacion);

  }

  Hide_Splash_Screen = () => {

    this.setState({
      isVisible: false

    });

  }


  onPressNotificacion() {
    this.props.navigation.navigate('NotificationForm');
  }
  
  componentDidMount() {
    
    AsyncStorage.getItem('language').then((data) => {
    
     let type = data;
      if(type !=null){
        //console.log('Raja Aysyn')
        I18n.locale = type;
      }else if(type==null){
        //console.log('Raja noo')
        I18n.locale = 'en';
      }
      
      });
    //  this.checkFirebase();
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        //console.log("TOKEN:", token);
      },
    
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        //console.log("NOTIFICATION:", notification);
        if(notification.userInteraction === true) {
        /// this.onPressNotificacion()
      }
       
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      // Android only
      senderID: "790023307485",
      // iOS only
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },
      popInitialNotification: true,
      requestPermissions: true
    });
    
  };

  _getPermission = () => {
    firebase.messaging()
      .requestPermission()
      .catch(error => {
        // User has rejected permissions
        this._getPermission();
      });
  };

  // componentWillUnmount() {
  //   this.onTokenRefreshListener();
  //   this.messageListener();
  //   firebase.messaging().unsubscribeFromTopic('topics');
  // }

  async checkFirebase(){
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        // user has permissions
        this.registerFbCloudMessagingListener()
    } else {
        // user doesn't have permission
        this.requestFbPermission()
    }
}

async requestFbPermission(){
  try {
      let permission = await firebase.messaging().requestPermission();
      if (permission) {
          this.checkFirebase();
      }
      // User has authorised
  } catch (error) {
      // User has rejected permissions
  }
}

registerFbCloudMessagingListener(){
  this.getToken();
  firebase.messaging().subscribeToTopic('global')
  
  this.messageListener = firebase.messaging().onMessage((message: RemoteMessage) => {
      // Process your message as required
      //console.log("FIREBASE_MESSAGE", message)
  });

  this.notificationListener = firebase.notifications().onNotification((notification) => {
    //console.log("FIREBASE_nofi", notification)
    this.props.navigation.navigate('NotificationForm');
      // const localNotification = new firebase.notifications.Notification({
      //     sound: 'default',
      //     show_in_foreground: true,
      // })
      //     .setNotificationId(notification.notificationId)
      //     .setTitle(notification.title)
      //     .setSubtitle(notification.subtitle)
      //     .setBody(notification.body);

      // if (Platform.OS === 'android') {
      //     localNotification
      //         .android.setChannelId(CHANNEL_ID)
      //         .android.setSmallIcon('notification_logo')
      //         .android.setColor('#FFFFFF')
      //         .android.setPriority(firebase.notifications.Android.Priority.High);
      //         //console.log("FIREBASE_nofi", notification)
      // }

      // if (Platform.OS === 'ios') {
      //     localNotification
      //         .ios.setBadge(notification.ios.badge);
      // }

      // firebase.notifications().displayNotification(localNotification);
  });
}

async getToken(){
  let token = await firebase.messaging().getToken();

  AsyncStorage.setItem(
    "deviceid", token + '')
  console.warn("FIREBASE asd TOKEN", token)
  
  }







  animate() {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({ progress });
      }, 1000);
    }, 500);
  }

  render() {
    const viewStyles = [
      styles.container,
      { backgroundColor: '#FFF',justifyContent:"center" }
    ];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
      alignSelf:"center"
    };
    const theme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        accent: 'yellow',
      },
    };
    let Splash_Screen = (

      <View style={styles.SplashScreen_RootView}>

        <View style={styles.SplashScreen_ChildView}>

          {/* Put all your components Image and Text here inside Child view which you want to show in Splash Screen. */}

          <LinearGradient
            colors={['#d9e2eb', 'white']}
            locations={[0, 0.49]}
            style={styles.linearGradient}>
             <View style={viewStyles}>
             <Image style={{ width: "100%", height: "50%", borderRadius: 100, marginTop: 0, marginBottom: 0 }} source={require("./assets/images/HUG_Final.png")} />
      </View>
          </LinearGradient>

        </View>
      </View>)

const fontFaces = [
  {
    fontFamily: 'Ubuntu',
    fontWeight: 'Normal',
    // Define the location of the font file. (In prod, this should be your cdn!)
    uri: 'https://raw.githubusercontent.com/opensourcedesign/fonts/master/ubuntu-font-family-0.80/Ubuntu-R.ttf',
  },
];
    return (
      <Provider store={store}>
      {/* <PersistGate
        loading={
          <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        }
        persistor={persistor}
      > */}
      <PaperProvider theme={theme}>
      <View style={styles.MainContainer}>

        {
         <Layout />
        }

      </View>
      </PaperProvider>
      {/* </PersistGate> */}
      </Provider>
     
    );
  }
}


const Layout = createRootNavigator();

const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
    },

    SplashScreen_RootView:
    {
      //justifyContent: 'center',
      flex: 1,
      //margin: 10,
      position: 'absolute',
      width: '100%',
      height: '100%',

    },

    SplashScreen_ChildView:
    {
      //justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00BCD4',
      flex: 1,
      // margin: 20,
    },

    TouchableOpacity_Style: {

      width: 25,
      height: 25,
      top: 9,
      right: 9,
      position: 'absolute'

    },
    progress: {
      bottom: 0,
      marginLeft: 40,
      marginTop: 0
      //top:270, 
      //left:2,
    },
    container: {
      flex: 1,
      ...Platform.select({
        ios: {paddingHorizontal: 20,
          paddingVertical: 60,},
        android: {paddingHorizontal: 0,
          paddingVertical: 0,},
         }),
      top: 0,
    },

    title: {
      color: '#2d3947',
      fontSize: 26,
      fontWeight: 'bold',

      marginLeft: 20,
      paddingHorizontal: 10,
      letterSpacing: 0.4,
    },
    selectWrap: {
      paddingHorizontal: 10,
    }
    ,
    formLabel: {
      fontSize: 14,
      color: '#000000',
      paddingBottom: 20,
      letterSpacing: 0.4,
    },

    formLabelhead: {
      fontSize: 12,
      color: '#000000',
      paddingBottom: 30,
      letterSpacing: 0.4,
      marginTop: 0,
      marginLeft: 20,

    },
    linearGradient:
    {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      flex: 1
    }
  });

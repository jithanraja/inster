import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from "./styles";
import { NavigationActions } from 'react-navigation';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, StyleSheet, ImageBackground, Picker, AsyncStorage } from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
import I18n, { getLanguages } from 'react-native-i18n';

class SideMenu extends Component {

  navigateToScreen = (route) => () => {
    
    this.props.navigation.navigate('HomeForm')
    // const navigateAction = NavigationActions.navigate({
    //   routeName: route
    // });
    //   this.props.navigation.dispatch(navigateAction);
  }
  
  state = {
    // setSelectedValue:'java',

    loginType: '',
    logoutType: ''
  }

  
  componentWillMount() {
  

  
    AsyncStorage.getItem('LoginType').then((data) => {
      let type = data;
      this.setState({ loginType: type })
      //console.log(type)
    });


    AsyncStorage.getItem('Login').then((data) => {
     let type = data;
      this.setState({ logoutType: type })
      //console.log(type)
    });

  }




  // logoutFuntion() {

  //   setTimeout(() => {
  //     AsyncStorage.removeItem('LoginType');
  //     this.props.navigation.navigate('LoginForm')
  //   }, 100)
  // }


  // logOut() {
  //   LoginManager.logOut();
  // }

  signOut = async () => {
    if (this.state.logoutType == 'facebook') {
      LoginManager.logOut();
    } else if (this.state.logoutType == 'google') {
      try {
        //await GoogleSignin.revokeAccess();
       // await GoogleSignin.signOut();
        this.setState({ user: null, loggedIn: false }); // Remember to remove the user from your app's state as well
      } catch (error) {
        console.error(error);
      }

    }
    setTimeout(() => {
      AsyncStorage.removeItem('LoginType');
      this.props.navigation.navigate('LoginForm')
    }, 100)
  };
  
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };

  render() {
     const {onChangeFilter} =this.props;
    return (

      <View style={styles.container}>
        <SafeAreaView style={styles.container}>

          <View style={{ height: 50, width: "100%", backgroundColor: "#0a2f4e" }}>
            <View>
              <View style={{justifyContent:'center' }}>
               
                <Text style={{ color: "#FFF",fontSize:20,alignSelf:'center' }}>Filter</Text>
               <View style={{flexDirection:'row'}}>
               <Text style={{ color: "#FFF",fontSize:14,alignSelf:'center',flex:1 ,marginLeft:5}}>Reading</Text>
               <Text style={{ color: "#FFF",fontSize:14,alignSelf:'center',marginRight:20 }}>clear</Text>
               <Text style={{ color: "#FFF",fontSize:14,alignSelf:'center',marginRight:20 }}>Done</Text>
               </View>
              </View>
            </View>
          </View>

          <View style={{ height: 650, width: "100%",backgroundColor:"#0a2f4e" }}>

          <Text style={{color:'#FFF',marginLeft:20,marginTop:10}}>Show only</Text>
            <ScrollView>
              <TouchableOpacity  onPress={()=> onChangeFilter('Nightclub')}>
          <View style={{backgroundColor:"#FFF",margin:20,marginBottom:2,marginTop:2,borderRadius:10}}>
            <Text style={{padding:20,alignSelf:'center',fontWeight:'bold'}}>Nightclub</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=> onChangeFilter('Bars')}>
          <View style={{backgroundColor:"#FFF",margin:20,marginBottom:2,marginTop:2,borderRadius:10}}>
            <Text style={{padding:20,alignSelf:'center',fontWeight:'bold'}}>Bars</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=> onChangeFilter('Events')}>
          <View style={{backgroundColor:"#FFF",margin:20,marginBottom:2,marginTop:2,borderRadius:10}}>
            <Text style={{padding:20,alignSelf:'center',fontWeight:'bold'}}>Events</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity   onPress={()=> onChangeFilter('Activities')}>
          <View style={{backgroundColor:"#FFF",margin:20,marginBottom:2,marginTop:2,borderRadius:10}}>
            <Text style={{padding:20,alignSelf:'center',fontWeight:'bold'}}>Activities</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity   onPress={()=> onChangeFilter('')}>
          <View style={{backgroundColor:"#FFF",margin:20,marginBottom:2,marginTop:2,borderRadius:10}}>
            <Text style={{padding:20,alignSelf:'center',fontWeight:'bold'}}>others</Text>
          </View>
          </TouchableOpacity>
          
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
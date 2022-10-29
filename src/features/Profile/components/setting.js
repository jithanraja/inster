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
    KeyboardAvoidingView,
    ImageBackground,
    ListView,
} from 'react-native';

import styles from "./styles";
import Header from '../../../components/Header';
import ToggleSwitch from 'toggle-switch-react-native';
import Mailer from 'react-native-mail';

class Settings extends Component {

    constructor() {
        super();
        this.state = {
            languageCode: 'en',
            selected_date: "", 
            descrption: "", 
            emailid:"",
            messages: [],
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentWillMount() {

        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    handleBackButtonClick() {
        this.props.navigation.navigate('ProfileForm', { navigationPageType: 'profile' });
        return true;
    }
    handlechangeDate(value) {

        this.setState({ selected_date: value });

    }
    _goBack = () => this.props.navigation.navigate('HomeForm', { navigationPageType: 'profile' });


    handleResolved(isOn) {
        this.setState(state => ({ ...state, rememeberMe: !state.rememeberMe }))

    }


    logOut(){
        try {
            AsyncStorage.removeItem('userid');
            this.props.navigation.navigate('UserForm'); 
            
          }
          catch(exception) {
            return false;
          }
        
    }

    handleEmail = async () => {

        let url = `mailto:` + this.state.emailid;
        const query = qs.stringify({
          subject: "Status email",
          body: "just checking",
    
        });
    
        if (query.length) {
          url += `?${query}`;
        }
    
        // check if we can use this link
        const canOpen = await Linking.canOpenURL(url);
        if (!canOpen) {
          throw new Error('Provided URL can not be handled');
        }
        return Linking.openURL(url);
      }
    render() {



        return (

            <View style={{ flex: 1, backgroundColor: 'black' }}  >


                <Header title={"Accounts & settings"} goBack={this._goBack} />

                <View style={styles.ListContent}>
                    <View style={styles.listItem}>
                        <Text style={styles.listText}>Private account</Text>
                        <ToggleSwitch
                            isOn={this.state.rememeberMe}
                            onColor="green"
                            offColor="#d8dcdd"
                            label="Resolve"
                            labelStyle={{ fontSize: 15 }}
                            size="small"
                            onToggle={isOn => this.handleResolved(isOn)}
                        />
                    </View>
                  {/* 
                    <TouchableOpacity  style={styles.listItem} onPress={this.handleEmail} >
                        <Text style={styles.listText}>Story Setting</Text>
                        </TouchableOpacity>
                 
                    <View style={styles.listItem}>
                        <Text style={styles.listText}>My posts</Text>
                    </View>  */}
                    <View style={styles.listItem}>
                        <Text style={styles.listText}>Report a problem</Text>
                    </View>
                    <View style={styles.listItem}>
                        <Text style={styles.listText}>Terms & conditions</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{this.logOut()}} style={styles.listItem}>
                        <Text style={styles.listText}>Logout</Text>
                    </TouchableOpacity>
                </View>

            </View>



        )
    }
}



export default Settings;

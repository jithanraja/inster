import React, { Component } from 'react';
import { MainHomeStyles, MemberStyles, KolDetailSyles } from "./styles";
import { AppRegistry, Platform, Image } from "react-native";
//import Login from "./helpers/components/Login";
//import EventsLog from "./js/components/EventsLog";


import KeyboardSpacer from 'react-native-keyboard-spacer';
import AutogrowInput from 'react-native-autogrow-input';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import ChatClientHelper from "../../helpers/chat-client-helper";
import Log from "../../helpers/logging"
import FirebaseSupport from "../../helpers/FirebaseSupportModule";
import ApnSupport from "../../helpers/ApnsSupportModule";
import { Appbar } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Channel as TwilioChannel } from "twilio-chat/lib/channel";
const ngrokConfiguration = require('../../../configuration.json').ngrok;
const tokenHost = 'https://' + ngrokConfiguration.subdomain + '.ngrok.io';
const tokenBasicAuth = ngrokConfiguration.basicAuth;
import Svg, {
  Path,
} from 'react-native-svg';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  BackHandler,
  TouchableHighlight
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
class ChatComponent extends Component {
  mychannel;
  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    var loremIpsum = '';

    //create a set number of texts with random lengths. Also randomly put them on the right (user) or left (other person).
    var numberOfMessages = 0;

    var messages = [];

    for (var i = 0; i < numberOfMessages; i++) {
      var messageLength = getRandomInt(10, 120);

      var direction = getRandomInt(1, 2) === 1 ? 'right' : 'left';

      message = loremIpsum.substring(0, messageLength);

      messages.push({
        direction: direction,
        text: message
      })
    }

    this.state = {
      isOpen: false,
      loginType: '',
      textbody: '',
      chatClientHelper: null,
      tchannel: null,
      identity: '',
      error: false,
      firsttime: true,
      log: [],
      data: [],
      isLoading: true,
      messages: messages,
      inputBarText: ''
    }
    this.mychannel = null;
  }

  login(username, host) {
    let log = new Log(this.addNewLog.bind(this));
    ////console.log("here i am");
    let chatClientHelper = new ChatClientHelper(host, tokenBasicAuth, log);

    if (Platform.OS === 'ios') {
      chatClientHelper.login(
        username, 'apns', ApnSupport.registerForPushCallback, ApnSupport.showPushCallback);
    } else if (Platform.OS === 'android') {
      ////console.log("inside")
      chatClientHelper.login(
        username, 'fcm', FirebaseSupport.registerForPushCallback, FirebaseSupport.showPushCallback);
    }
    ////console.log("first")
    this.setState({ chatClientHelper });
  }

  addNewLog(string) {
    let log = this.state.log;
    log.push(string + "\n");
    // //console.log("second")
    this.setState({ log });
  }

  handleBackButtonClick() {
    this.props.navigation.navigate('HomeForm');
    return true;
  }
  componentWillMount() {
    AsyncStorage.getItem('LoginType').then((data) => {
      type = data;
      // //console.log("third")
      this.setState({ loginType: type, fullname: '' })
    });
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow(e) {
    this.scrollView.scrollToEnd();
  }

  keyboardDidHide(e) {
    this.scrollView.scrollToEnd();
  }
  handleError(error) {
    console.error(error);
    this.setState({
      error: 'Could not load chat.'
    });
  }

  componentDidMount() {
    AsyncStorage.getItem('fullname').then((data) => {
      type = data;
      this.setState({ 'identity': data }, function () {
        this.login(data, tokenHost)
      })
      //this.setState({ fullname: data })

      ////console.log(type)
    });



    setTimeout(function () {
      this.scrollView.scrollToEnd();
    }.bind(this))
  }
  componentDidUpdate() {
    setTimeout(function () {
      this.scrollView.scrollToEnd();
    }.bind(this))
  }

  _sendMessage() {
    this.state.messages.push({ direction: "right", text: this.state.inputBarText });
    ////console.log("fourth")
    this.setState({
      messages: this.state.messages,
      inputBarText: ''
    });
  }

  _onChangeInputBarText(text) {
    ////console.log("fifith")
    this.setState({
      inputBarText: text
    });
  }


  _onInputSizeChange() {
    setTimeout(function () {
      this.scrollView.scrollToEnd({ animated: false });
    }.bind(this))
  }

  initialchat() {
    if (this.state.chatClientHelper != null && this.state.chatClientHelper.client !== null) {
      ////console.log("sixth")
      this.setState({ "firsttime": false });
      let client = this.state.chatClientHelper.client;
      let mychannel;
      let that = this;
      ////console.log("inside initial chat")
      client.getChannelByUniqueName('general').then(function (channel) {
        that.mychannel = channel
        //console.log("messages dwonload")
        that.mychannel.getMessages().then(function (messages) {
          const totalMessages = messages.items.length;
          let arrary = []

          for (let i = 0; i < totalMessages; i++) {

            const message = messages.items[i];
            if (message.author === that.state.identity)
              arrary.push({ direction: "right", text: message.body })
            else
              arrary.push({ direction: "left", text: message.body })
          }
          // //console.log('Total Messages:', arrary);

          that.setState({ "messages": arrary })
          that.setState({ "isLoading": false });
        })

          ////console.log("im atrust",channel);
          .catch(function (error) {
            //console.log(error)
            if (error.code === 54007) {
              that.setState({ "isLoading": false })
              return channel.join().catch(function (err) {
                //console.log(err);
              })
            }
          })
        channel.on('messageAdded', message => that.messageAdded(message))
      })
        .catch(function (err) {
          //console.log(err)
          if (error.body.code === 50300)
            return client.createChannel({ uniqueName: 'general2' })
              .then(function (channel) {
                that.mychannel = channel;
                return channel.join().catch(function (err) {
                  //console.log(err);
                })
              })
          else {
            this.handleError(error);
          }
        })



    }
  }

  messageAdded(message) {
    ////console.log(message.author, message.body);
    if (message.author !== this.state.identity)
      this.state.messages.push({ direction: "left", text: message.body });
  }

  sendmessage() {

    if (this.mychannel !== null) {
      ////console.log("insdie");
      this.mychannel.sendMessage(this.state.inputBarText);
      this._sendMessage()

    }
  }


  renderDate = (date) => {
    return (
      <Text style={KolDetailSyles.time}>
        {date}
      </Text>
    );
  }

  loadChat() {
    if (this.state.error) {
      return <Text>{this.state.error}</Text>;
    } else if (this.state.isLoading) {
      return <View style={{ marginTop: 300 }}>
        <Text style={{ textAlign: 'center',color:'#FFF' }}>Loading chat...</Text>
      </View>
    } else {
      return null
    }
  }

  _goBack = () => this.props.navigation.navigate('Vibes',{navigationPageType:'followerChat'});
  render() {
    //
    ////console.log(this.state.chatClientHelper);
    if (this.state.firsttime && this.state.chatClientHelper !== null) {
      ////console.log("test")
      // //console.log("testing")
      this.initialchat();

    }

    var messages = [];

    this.state.messages.forEach(function (message, index) {
      messages.push(
        <MessageBubble key={index} direction={message.direction} text={message.text} />
      );
    });

    return (

      <View style={styles.outer}>
        <Appbar.Header style={{ backgroundColor: '#000' }}>
        <TouchableOpacity   onPress={() => this._goBack()}>
				{/* <Appbar.BackAction
						
					/> */}

<AntDesignIcon style={{marginLeft: 10 }} color={"#FFF"} name={"arrowleft"} size={25} />
			</TouchableOpacity>
{/* 
          <Appbar.BackAction
            onPress={() => this._goBack()}
          /> */}
          <Image style={{ height: 90, width: 90 }}
            source={require("../../../assets/images/user.png")}

            style={styles.profileImage}
          />

          <Appbar.Content
            title="Samanth John"
            titleStyle={{ color: "#FFF" }}

          />
          <TouchableOpacity onPress={() => this.shareStory()}>
            <Appbar.Action icon="plus" color="#FFF" onPress={this._handleSearch} />
          </TouchableOpacity>
        </Appbar.Header>
        {/* <KeyboardSpacer/>       */}
        <ScrollView ref={(ref) => { this.scrollView = ref }} style={styles.messages}>

          {messages}
          {this.loadChat()}
        </ScrollView>
        <InputBar onSendPressed={() => this.sendmessage()}
          onSizeChange={() => this._onInputSizeChange()}
          onChangeText={(text) => this._onChangeInputBarText(text)}
          text={this.state.inputBarText} />
        {/* <KeyboardSpacer/>              */}
      </View>
    )
  }

}


const styles = StyleSheet.create({

  //ChatView
  profileImage: {
    borderColor: '#FFF',
    borderRadius: 55,
    borderWidth: 1,
    height: 45,
    width: 45,
    marginLeft:10
  },
  outer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'black'
  },

  messages: {
    flex: 1,
    // flexDirection: 'column-reverse'
  },

  //InputBar

  inputBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  //  paddingHorizontal: 10,
    //paddingVertical: 3,
    margin:20,
    marginBottom:5
  },

  textBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    flex: 1,
    fontSize: 16,
    color:'#FFF',
    paddingHorizontal: 10
  },

  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    marginLeft: 5,

    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: '#66db30'
  },

  //MessageBubble

  messageBubble: {
    borderRadius: 5,
    marginTop: 8,
    marginRight: 10,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    flex: 1
  },

  messageBubbleLeft: {
    justifyContent: 'flex-start',
    backgroundColor: '#000',
  },

  messageBubbleTextLeft: {
    backgroundColor: '#2C2D2F',
    color: '#FFF',
    borderRadius: 30,
    padding: 10
  },

  messageBubbleRight: {
    backgroundColor: '#000',
    justifyContent: 'flex-end'
  },

  arrowContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 3,
    bottom: 1,
    zIndex: -1,
    flex: 1
  },
  arrowLeftContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },

  arrowRightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  messageBubbleTextRight: {
    color: '#FFF',
    borderRadius: 30,
    backgroundColor: '#4251ae',
    textAlign: 'right',
    padding: 10,
    //  right:moderateScale(-6, 0.5),
  },
})

export default ChatComponent;



//The bubbles that appear on the left or the right for the messages.
class MessageBubble extends Component {
  render() {

    //These spacers make the message bubble stay to the left or the right, depending on who is speaking, even if the message is multiple lines.
    var leftSpacer = this.props.direction === 'left' ? null : <View style={{ width: 70 }} />;
    var rightSpacer = this.props.direction === 'left' ? <View style={{ width: 70 }} /> : null;
    var rightTextbubble = this.props.direction === 'left' ? null : <View
      style={[
        styles.arrowContainer,
        styles.arrowRightContainer,
      ]}
    >
      <Svg style={styles.arrowRight} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32.485 17.5 15.515 17.5" enable-background="new 32.485 17.5 15.515 17.5">
        <Path
          d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
          fill="#90EE90"
          x="0"
          y="0"
        />
      </Svg>
    </View>;
    var leftImage = this.props.direction === 'left' ? <Image  source={require("../../../assets/images/user.png")}  style={[styles.profileImage,{height:45,width:45,marginRight:10}]}
       />: null;
       var rightImage = this.props.direction === 'left' ?null: <Image  source={require("../../../assets/images/user.png")}  style={[styles.profileImage,{height:45,width:45,marginLeft:10}]}
       />;

    var bubbleStyles = this.props.direction === 'left' ? [styles.messageBubble, styles.messageBubbleLeft] : [styles.messageBubble, styles.messageBubbleRight];

    var bubbleTextStyle = this.props.direction === 'left' ? styles.messageBubbleTextLeft : [styles.messageBubbleTextRight];

    return (
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        {leftSpacer}


        <View style={bubbleStyles}>
        {leftImage}
          <Text style={bubbleTextStyle}>
            {this.props.text}
          </Text>
        {rightImage}
        </View>
        {rightSpacer}
      </View>
    );
  }
}

//The bar at the bottom with a textbox and a send button.
class InputBar extends Component {
   state={
     sendButton:false
   }
  //AutogrowInput doesn't change its size when the text is changed from the outside.
  //Thus, when text is reset to zero, we'll call it's reset function which will take it back to the original size.
  //Another possible solution here would be if InputBar kept the text as state and only reported it when the Send button
  //was pressed. Then, resetInputText() could be called when the Send button is pressed. However, this limits the ability
  //of the InputBar's text to be set from the outside.
  componentWillReceiveProps(nextProps) {
    if (nextProps.text === '') {
      this.autogrowInput.resetInputText();
       this.setState({sendButton:false})
    }


  }

changeText=(value)=>{

  if(value!=''){
  this.setState({sendButton:true})
     }else{
      this.setState({sendButton:false})
     }
  this.props.onChangeText(value)
}
displaybuttons(){
  if(this.state.sendButton){
    return   <TouchableHighlight style={{justifyContent:'center',borderWidth:1,borderColor:'#FFF',borderRadius:30,height:40,width:45,marginLeft:18}}  onPress={() => this.props.onSendPressed()}>
          <MaterialCommunityIcons color='#FFF' style={{margin:10}} name={'send'}  size={25} />
    </TouchableHighlight>;
  }else{
        return <View style={{flexDirection:'row'}}>
           <TouchableHighlight style={{justifyContent:'center',borderRadius:30,height:40,width:45, marginLeft:18}} onPress={() => this.props.onSendPressed()}>
          <Image style={{ width: 35, height: 35, alignSelf: "center" }} source={require("../../../assets/images/camera.png")} />
         </TouchableHighlight>
         <TouchableHighlight style={{justifyContent:'center',borderRadius:30,height:40,width:45}}  onPress={() => this.props.onSendPressed()}>
         <MaterialCommunityIcons color='#FFF' style={{margin:10,marginLeft:5}} name={'microphone'}  size={25} />
          </TouchableHighlight>
         </View>;
        ;
  }
}

  render() {
    return (
      <View style={styles.inputBar}>
        <AutogrowInput style={styles.textBox}
          ref={(ref) => { this.autogrowInput = ref }}
          multiline={true}
          defaultHeight={40}
          onChangeText={(text) => this.changeText(text)}
          onContentSizeChange={this.props.onSizeChange}
          value={this.props.text} />

          {this.displaybuttons()}
        
       
      </View>
    );
  }
}

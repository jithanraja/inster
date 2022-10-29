// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import Component from "../components";
// import { navigateToWelcome } from "navigation/actions";

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ navigateToWelcome }, dispatch);

// export default connect(null, mapDispatchToProps)(Component);

import React, { Component } from 'react';

import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';

import ChatComponent from "../components/chat";

class TwilioChatContainer extends Component {
 
  render() {

    return (
      <ChatComponent state={this.state}  {...this.props} />
    );
  }
}

export default TwilioChatContainer;
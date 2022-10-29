import React, { useState, Component } from 'react';
import ChatComponent from "../components/chat";


class ChatContainer extends Component {


	constructor() {
		super();

	}


	render() {

		return (
      <ChatComponent {...this.props} />
         
		)
	}
}



export default ChatContainer;
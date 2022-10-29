import React, { Component } from 'react';
import { Appbar } from "react-native-paper";

export default class Header extends Component {
 
  render() {
     const {title ,goBack} = this.props
    return (
      <Appbar.Header style={{ backgroundColor: "#000" }}>
        <Appbar.BackAction
          onPress={goBack}
        />
        <Appbar.Content title={title} titleStyle={{ fontSize: 19 }} />
      </Appbar.Header>
    );

  }
}

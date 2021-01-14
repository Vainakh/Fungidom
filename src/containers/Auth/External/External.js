// import axios from 'axios';
import React, { Component } from 'react';
import LoggedOutView from '../Views/LoggedOutView/LoggedOutView.js';

class External extends Component {
  constructor(props) {
    super(props);

    // this.onHandleClick = this.onClickHandler.bind(this);
    // this.onHandleChange = this.onChangeHandler(this);
    this.onChangeView = this.onChangeView.bind(this);
  }

  // onChangeHandler() {
  //   console.log("onHandleChange");
  // }

  // onClickHandler() {
  //   console.log("onHandleClick");
  // }
  onChangeView() {
    let view;

    view = (this.state.currentView === "Internal") ? "External" : "Internal";
    this.setState({currentView: view})
  }

  render() {
    return (
      <LoggedOutView changeView={this.onChangeView}></LoggedOutView>
    );
  };
};

export default External;
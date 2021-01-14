import React, { Component } from 'react';
import External from "../Auth/External/External";
import Internal from "../Auth/Internal/Internal";
import './Auth.css';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: "External"
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    let view;

    view = (this.state.currentView === "External") ? "Internal" : "External";
    this.setState({currentView: view});
  }

  render() {
    let view;

    if (this.state.currentView === "External") {
      view = <External></External>
    } else {
      view = <Internal></Internal>
    }

    return (
      <div>
        <button onClick={() => this.onClickHandler()}>{this.state.currentView === "Internal" ? "Log Out" : "Log In"}</button>
        {view}
      </div>
    )
  }

}

export default Auth;
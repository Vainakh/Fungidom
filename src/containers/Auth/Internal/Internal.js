import React, { Component } from 'react';
import LoggedInView from '../Views/LoggedInView/LoggedInView';
import LoggedOutView from '../Views/LoggedOutView/LoggedOutView';

class Internal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: "Internal",
    };
    this.onChangeView = this.onChangeView.bind(this);
  }

    onChangeView() {
      let view;

      view = (this.state.currentView === "Internal") ? "External" : "Internal";
      this.setState({currentView: view})
    }

  render() {
    let view;

    if (this.state.currentView === "Internal") {
      view = <LoggedInView
      changeView={this.onChangeView}/>;
    } else {
      view = <LoggedOutView
      changeView={this.onChangeView}/>;
    }

    return (
      <div>
        {view}
      </div> 
    );
  }
}

export default Internal;
import axios from 'axios';
import React, { Component } from 'react';

class LoggedOutView extends Component {
  constructor(props) {
    super();
      this.state = {
        username: "",
        password: "",
        invalidLogin: false
      }
      this.onChangeHandler = this.onChangeHandler.bind(this);
      this.onClickHandler = this.onClickHandler.bind(this);
  }


  onChangeHandler(event) {
    const stateName = event.target.name;
    this.setState({[stateName]: event.target.value})
    console.log("onChangeHandler")
  }

  onClickHandler() {
    axios.post("http://localhost:5000/auth", {
      username: this.state.username,
      password: this.state.password
    })
    .then((response) => {
      if (response.status === 200) {
        this.props.changeView();
        this.setState({invalidLogin: false})
      } else {
        this.setState({invalidLogin: true})
      }
    })
  }


  render() {
    return (
        <form>
          <div>
            <label htmlFor="username">
              Username:
            </label>
          </div>
          <div>
            <input
              placeholder="username" 
              name="username" 
              type="text" 
              id="username"
              value={this.state.username}
              onChange={this.onChangeHandler}
              required
              />
          </div>
          <div>
            <input
              placeholder="Password"
              name="password" 
              id="password" 
              type="password" //hiding password characters in the input
              value={this.state.password}
              onChange={this.onChangeHandler} 
              required
            >

            </input>
          </div>
          <div>
            <button
            type="button"
            onClick={this.onClickHandler} 
            >Submit</button>
          </div>
        </form>
    )
  }
};

export default LoggedOutView;
import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Main from './components/Main/Main';
import Items from './components/Items/Items';
import Footer from './components/Footer/Footer';
import Test from './components/test';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        input: ""
      }
      this.onSubmitHandler = this.onSubmitHandler.bind(this);
      this.onChangeHandler = this.onChangeHandler.bind(this); 
  }

  onSubmitHandler() {
    axios.post('http://localhost:5000/data', {
      input: this.state.input
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
     console.log("Step1 in, to the end point, front end request")
  };

  onChangeHandler(event) {
    let value = event.target.value;
    this.setState({ input: value});
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Test
          onclick={() => this.onSubmitHandler()}
          onchange={(event) => this.onChangeHandler(event)}
          ></Test>
        <Main></Main>
        <About></About>
        <Items></Items>
        <Footer></Footer>
      </div>
    );
  }  
}

export default App;

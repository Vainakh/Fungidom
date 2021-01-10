import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Main from './components/Main/Main';
import Items from './components/Items/Items';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <About></About>
      <Items></Items>
      <Footer></Footer>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Main from './components/Main/Main';
import Items from './components/Items/Items';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <SideDrawer></SideDrawer>
      <Items></Items>
      <Footer></Footer>
    </div>
  );
}

export default App;

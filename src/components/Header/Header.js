import React, {Component} from 'react';
import './Header.css';
import Logo from './Logo/Logo';
import NavigationItems from './Navigation/NavigationItems/NavigationItems';
import Authentication from './Authentication/Authentication';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <Logo></Logo>
          <NavigationItems></NavigationItems>
          <Authentication></Authentication>
        </div>
      </div>
      )
    };
  }
  

export default Header;
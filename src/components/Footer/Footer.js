import React from 'react';
import './Footer.css';
import Aux from '../../hoc/Aux/Aux';

const footer = () => (
  <Aux>
    <div className="PreFooter">Check out our latest products and offerings!</div>
    <div className="Footer">
      <div className="FooterInfo">
        <div>Stay in touch. Sign up for our newletter!</div>
        <div>
          <ul> 
            <li>About</li>
            <li>Our Products</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  </Aux>
  
)

export default footer; 
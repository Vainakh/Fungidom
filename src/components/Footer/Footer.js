import React from 'react';
import './Footer.css';
import Aux from '../../hoc/Aux/Aux';
import mushroom from '../../assets/images/mushroom.svg';


const footer = () => (
  <Aux>
    <div className="PreFooter">Check out our latest products and offerings!</div>
    <div className="Footer">
      <div>
        <div className="FooterInfo">Stay in touch. Sign up for our newletter!</div>
        <div className="FooterUl">
          <ul> 
            <li>About</li>
            <li>Our Products</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <img className="FooterImage" src={mushroom} alt="MushroomLogo"></img>
      </div>
     </div>
  </Aux> 
);

export default footer; 
import React from 'react';
import './Logo.css';
import mushroom from "../../../assets/images/mushroom.svg";

const logo = () => (
  <div className="Logo">
    <img src={mushroom} alt="MushroomLogo"></img>
    <div className="Name">Fungidom</div>
  </div>
);

export default logo; 
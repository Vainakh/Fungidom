import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import './NavigationItems.css';
const navigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem link="/" exact>About</NavigationItem>
    <NavigationItem link="/" exact>Product</NavigationItem>
    <NavigationItem link="/" exact>Recipes</NavigationItem>
    <NavigationItem link="/" exact>Contact</NavigationItem>
  </ul>
)

export default navigationItems;
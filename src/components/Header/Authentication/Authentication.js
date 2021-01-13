import React from 'react';
import './Authentication.css';
import Auth from '../../../containers/Auth/Auth';

const authentication = (props) => (
  <div className="Authentication">
    <Auth
    style={props.style}></Auth>
  </div>
)

export default authentication;
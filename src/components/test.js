import React from 'react';
import Aux from './../hoc/Aux/Aux';
import './test.css';

const test = (props) => {
  return <Aux>
      <input onChange={props.onchange} type="text" name="FullName" value={props.value}></input>
      <button onClick={props.onclick}>Submit</button>
  </Aux> 
}

export default test;
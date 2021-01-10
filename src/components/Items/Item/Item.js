import React from 'react';
import './Item.css';

const item = (props) => {
  return (
    <div className="Item">
      <img className="ItemImage" src={props.image} alt="images"/>
      {props.title}
      {props.price}
      {props.rating}
    </div>
  )
};

export default item;
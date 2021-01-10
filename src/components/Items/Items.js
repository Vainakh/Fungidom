import React from 'react';
import Item from './Item/Item';
import './Items.css';

const itemsArray = [
  { label: "first", type: "first"},
  { label: "second", type: "second"},
  { label: "third", type: "third"},
  { label: "first", type: "first"},
  { label: "second", type: "second"},
  { label: "third", type: "third"},
  { label: "first", type: "first"},
  { label: "second", type: "second"},
  { label: "third", type: "third"},
  { label: "third", type: "third"}
]

const items = () => (
  <div className="Items">
    {itemsArray.map(item => (
      <Item></Item>
    ))}
  </div>
);

export default items;
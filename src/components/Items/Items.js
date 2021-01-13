import React from 'react';
import Item from './Item/Item';
import './Items.css';
import Item1 from '../../assets/images/item1.jpg';
import Item2 from '../../assets/images/item2.jpg';
import Item3 from '../../assets/images/item3.jpg';
import Item4 from '../../assets/images/item4.jpg';
import Item5 from '../../assets/images/item5.jpg';
import Item6 from '../../assets/images/item6.jpg';
import Item7 from '../../assets/images/item7.jpg';
import Item8 from '../../assets/images/item8.jpg';
import Item9 from '../../assets/images/item9.jpg';


const itemsArray = [
  { label: "first", type: "first", image: Item1, title: "Mushroom 1", price: 20, rating: 5 },
  { label: "second", type: "second", image: Item2, title: "Mushroom 2", price: 10, rating: 1},
  { label: "third", type: "third", image: Item3, title: "Mushroom 3", price: 30, rating: 5},
  { label: "first", type: "first", image: Item4, title: "Mushroom 4", price: 10, rating: 2},
  { label: "second", type: "second", image: Item5, title: "Mushroom 5", price: 20, rating: 5},
  { label: "third", type: "third", image: Item6, title: "Mushroom 6", price: 20, rating: 3},
  { label: "first", type: "first", image: Item7, title: "Mushroom 7", price: 40, rating: 5},
  { label: "second", type: "second", image: Item8, title: "Mushroom 8", price: 20, rating: 4},
  { label: "third", type: "third", image: Item9, title: "Mushroom 9", price: 50, rating: 4}
]

const items = () => (
  <div className="Items">
    {itemsArray.map((item, key) => (
      <Item
      key={key}
      label={item.label}
      image={item.image}
      title={item.title}
      price={item.price}
      rating={item.rating}
      ></Item>
    ))}
  </div>
);

export default items;
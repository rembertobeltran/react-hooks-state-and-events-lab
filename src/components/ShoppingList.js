import React from "react";
import { useState } from "react/cjs/react.production.min";
import Item from "./Item";

function ShoppingList({ items }) {
  const [categorySet, setCategory] = useState('All');
  const allItems = items.filter((item) => {
    return categorySet === 'All' ? item : item.category === categorySet;
  });
  const handleChange = (e) => setCategory(e.target.value);
  const selectedItems = allItems.map((item) => {
    <Item key={item.id} name={item.name} category={item.category} />
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedItems}
      </ul>
    </div>
  );
}

export default ShoppingList;

import React from "react";
import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";

const ShoppingList = () => {
  return (
    <div>
      <ul>
        {plantList.map((plant) => (
          <li className="lmj-plant-list" key={plant.id}>
            {plant.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;

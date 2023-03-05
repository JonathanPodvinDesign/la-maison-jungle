import React from "react";
import { plantList } from "../datas/plantList";
import CareScale from "./CareScale";
import "../styles/ShoppingList.css";

const ShoppingList = () => {
  return (
    <div>
      <ul>
        {plantList.map((plant) => (
          <li className="lmj-plant-list" key={plant.id}>
            {plant.name}
            <CareScale scaleValue={plant.light} />
            <CareScale scaleValue={plant.water} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;

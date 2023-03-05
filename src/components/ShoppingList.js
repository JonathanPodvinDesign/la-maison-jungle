import React from "react";
import { plantList } from "../datas/plantList";
import SunScale from "./SunScale";
import WaterScale from "./WaterScale";
import "../styles/ShoppingList.css";

const categories = plantList.reduce(
  (acc, cat) => (acc.includes(cat.category) ? acc : acc.concat(cat.category)),
  []
);

const ShoppingList = () => {
  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <li key={plant.id}>
            {plant.name}
            <SunScale SunValue={plant.light} />
            <WaterScale WaterValue={plant.water} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;

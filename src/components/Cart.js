import React from "react";
import { plantList } from "../datas/plantList";
import "../styles/Cart.css";

const Cart = () => {
  return (
    <div className="lmj-cart">
      <h2>Panier</h2>
      <ul className="lmj-plant-list">
        <li className="lmj-plant-item">Monstera</li>
        <li className="lmj-plant-item">Lierres</li>
        <li className="lmj-plant-item">Bouquet de fleurs</li>
      </ul>
    </div>
  );
};

export default Cart;

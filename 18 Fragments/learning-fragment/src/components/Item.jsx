import styles from "./Item.module.css";
import { useState } from "react";

const Item = ({ foodItem, handleBuyButtonClicked }) => {
  /* const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being boight`);
  }
    */

  let [isBought, setBought] = useState(false);

  const onBuyButtonClicked = () => {
    setBought(true);
    handleBuyButtonClicked(foodItem);
  };

  return (
    <li className={`${styles["Kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>

      <button
        className={`${styles.button} btn ${
          isBought ? "btn-success" : "btn-info"
        }`}
        onClick={onBuyButtonClicked}
      >
        {isBought ? "Bought" : "Buy"}
      </button>
    </li>
  );
};

export default Item;

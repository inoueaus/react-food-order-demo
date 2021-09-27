import React, { useContext, useState } from "react";

import styles from "./MenuItem.module.css";

import Button from "../UI/Button/Button";
import CartContext from "../../helpers/cartContext";

const MenuItem = (props) => {
  const [amount, setAmount] = useState(1);

  const context = useContext(CartContext);

  const changeAmount = (event) => {
    const newCount = Number(event.target.value);
    if (newCount > 0 && newCount < 20) {
      setAmount(Number(event.target.value));
    } else if (newCount >= 20) {
      setAmount(20);
    }
  };
  const addItem = (event) => {
    event.preventDefault();
    context.addToOrder(props.id,amount);
  };

  return (
    <div className={styles["menu-item"]}>
      <div className={styles["box"]}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.tanka}>{props.tanka}</div>
      </div>
      <div className={styles["box"]}>
        <div className={styles["amount-group"]}>
          <div className={styles["amount__text"]}>Amount</div>
          <input type="number" value={amount} className={styles["amount__box"]} onChange={changeAmount} />
        </div>
        <Button onClick={addItem}>+ Add</Button>
      </div>
    </div>
  );
};

export default MenuItem;

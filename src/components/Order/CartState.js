import React, { useContext } from "react";
import CartContext from "../../helpers/cartContext";

import styles from "./CartState.module.css";

import Button from "../UI/Button/Button";
import OrderItem from "./OrderItem";

const CartState = (props) => {
  const context = useContext(CartContext);

  return (
    <>
    <h1 style={{ marginTop: "0" }}>Your Cart</h1>
      <div className={styles["item-group"]}>
        {context.items.map((item) => (
          <OrderItem
            key={item.id}
            id={item.id}
            title={item.title}
            tanka={item.tanka}
            count={item.count}
          />
        ))}
      </div>
      {context.items.length > 0 ? (
        <div className={styles.total}>
          <div>Total Amount</div>
          <div>${context.total}</div>
        </div>
      ) : (
        <div style={{ marginBottom: "2rem", textAlign: "center" }}>No items in cart.</div>
      )}
      <div className={styles["button-group"]}>
        <Button className="outline" onClick={props.toggleOrderForm}>
          Close
        </Button>
        <Button
          className={context.items.length === 0 && "disabled"}
          onClick={props.submitOrder}
          disabled={context.items.length === 0}
        >
          Order
        </Button>
      </div>
    </>
  );
};

export default CartState;

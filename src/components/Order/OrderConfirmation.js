import React, { useContext } from "react";

import styles from "./OrderConfirmation.module.css";

import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import OrderItem from "./OrderItem";
import CartContext from "../../helpers/cartContext";

const OrderConfirmation = (props) => {
  const context = useContext(CartContext);

  const submitOrder = () => {};

  return (
    <Modal>
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
        <div>No items in cart.</div>
      )}
      <div className={styles["button-group"]}>
        <Button className="outline" onClick={props.toggleOrderForm}>
          Close
        </Button>
        <Button
          className={context.items.length === 0 && "disabled"}
          onClick={submitOrder}
        >
          Order
        </Button>
      </div>
    </Modal>
  );
};

export default OrderConfirmation;

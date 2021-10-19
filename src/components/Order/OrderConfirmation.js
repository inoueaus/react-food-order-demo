import React, { useContext, useState } from "react";

import Modal from "../UI/Modal/Modal";
import CartContext from "../../helpers/cartContext";
import CartState from "./CartState";
import OrderForm from "./OrderForm";
import OrderSubmitted from "./OrderSubmitted";

const OrderConfirmation = (props) => {
  const context = useContext(CartContext);
  const [orderState, setOrderState] = useState("CART");

  const submitOrder = () => {
    if (context.items.length > 0) {
      setOrderState("FORM");
    }
  };

  return (
    <Modal onBackdropClick={props.toggleOrderForm}>
      {orderState === "CART" && <CartState submitOrder={submitOrder} toggleOrderForm={props.toggleOrderForm} />}
      {orderState === "FORM" && <OrderForm setOrderState={setOrderState} />}
      {orderState === "SUBMITTED" && <OrderSubmitted />}
    </Modal>
  );
};

export default OrderConfirmation;

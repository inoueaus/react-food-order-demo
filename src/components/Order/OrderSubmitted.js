import React, { useContext } from "react";
import CartContext from "../../helpers/cartContext";

const OrderSubmitted = (props) => {
    const context = useContext(CartContext);

    const confirmationNo = context.confirmation ? context.confirmation : "";

    if (context.orderErrors) {
        return (
            <p>{context.orderErrors}</p>
        );
    }
    return (
        <div>
            <h1>Order Submitted!</h1>
            {context.loading ? <p>Sending...</p> : <p>Order Confirmation No. {confirmationNo}</p> }
        </div>
    );
};

export default OrderSubmitted;
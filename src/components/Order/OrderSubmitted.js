import React, { useContext } from "react";
import CartContext from "../../helpers/cartContext";

const OrderSubmitted = (props) => {
    const context = useContext(CartContext);

    console.log(context.confirmation);

    if (context.orderErrors) {
        return (
            <p>{context.orderErrors}</p>
        );
    }
    return (
        <div>
            <h1>Order Submitted!</h1>
            <p>{context.loading ? <p>Sending...</p> : <p>Order Confirmation No. {context.confirmation.name && context.confirmation.name}</p> }</p>
        </div>
    );
};

export default OrderSubmitted;
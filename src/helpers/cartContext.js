import React from "react";

const CartContext = React.createContext({
    items: [],
    addToOrder: (id, amount) => {},
    increaseCount: (action) => {},
    reduceItem: (action) => {},
    menu: [],
    cartCount: 0,
    total: 0,
    loading: false,
    errors: null,
    sendOrder: (order) => {},
    confirmation: null,
    orderErrors: null
});

export default CartContext;
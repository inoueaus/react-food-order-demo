import React from "react";

const CartContext = React.createContext({
    items: [],
    addToOrder: (id, amount) => {},
    increaseCount: (action) => {},
    reduceItem: (action) => {},
    menu: [],
    cartCount: 0,
    total: 0,
});

export default CartContext;
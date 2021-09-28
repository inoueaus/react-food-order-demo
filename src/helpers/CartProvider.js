import React, { useReducer, useCallback, useMemo } from "react";

import orderReducer from "./orderReducer";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const callbackOrderReducer = useCallback(orderReducer,[])
  const [orderItems, setOrderItems] = useReducer(callbackOrderReducer, []);

  const menu = useMemo(() => {return [
    {
      id: "menu1",
      title: "Sushi",
      description: "Finest fresh fish from the Pacific.",
      tanka: 10.99,
    },
    {
      id: "menu2",
      title: "Schnitzel",
      description: "A German speciality!",
      tanka: 16.49,
    },
    {
      id: "menu3",
      title: "Barbecue",
      description: "Grilled on our own grill!",
      tanka: 16.49,
    },
  ]},[]);

  const addToOrder = useCallback((id, amount) => {
    let newItem = menu.filter((item) => item.id === id);
    setOrderItems({
      type: "ADD_TO_ORDER",
      item: { ...newItem[0], count: amount },
    });
    //props.setShowOrder(true);
  },[menu]);
  const increaseCount = (action) => {
    setOrderItems(action);
  };
  const decreaseCount = (action) => {
    setOrderItems(action);
  };
  const cartCount = useCallback(() => {
    if (orderItems.length > 0) {
      return orderItems.map(item => item.count).reduce((prev,next) => prev + next);
    }
    return 0;
  },[orderItems]);
  const orderTotal = useCallback(() => {
    if (orderItems.length === 0) {
      return 0;
    }
    return orderItems
      .map((item) => item.tanka * item.count)
      .reduce((prev, cur) => prev + cur).toFixed(2);
  },[orderItems]);

  const cartContext = useMemo(() => {return {
    items: orderItems,
    addToOrder: addToOrder,
    increaseCount: increaseCount,
    reduceItem: decreaseCount,
    menu: menu,
    cartCount: cartCount(),
    total: orderTotal(),
  }},[menu,orderItems,addToOrder,cartCount,orderTotal]);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

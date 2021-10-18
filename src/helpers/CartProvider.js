import React, { useReducer, useCallback, useEffect, useState } from "react";

import orderReducer from "./orderReducer";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const callbackOrderReducer = useCallback(orderReducer, []);
  const [orderItems, setOrderItems] = useReducer(callbackOrderReducer, []);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  const uri = "https://react-studies-742e1-default-rtdb.firebaseio.com/";

  const menuFetcher = async () => {
    setLoading(true);
    try {
      const result = await fetch(`${uri}/food.json`);

      if (!result.ok) {
        throw new Error("unable to fetch menu");
      }

      const data = await result.json();

      const newMenuList = [];
      for (const key in data) {
        newMenuList.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
          tanka: data[key].tanka,
        });
      }
      setMenu(newMenuList);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    menuFetcher();
  }, []);

  const addToOrder = (id, amount) => {
    let newItem = menu.filter((item) => item.id === id);
    setOrderItems({
      type: "ADD_TO_ORDER",
      item: { ...newItem[0], count: amount },
    });
    //props.setShowOrder(true);
  };
  const increaseCount = (action) => {
    setOrderItems(action);
  };
  const decreaseCount = (action) => {
    setOrderItems(action);
  };
  const cartCount = () => {
    if (orderItems.length > 0) {
      return orderItems
        .map((item) => item.count)
        .reduce((prev, next) => prev + next);
    }
    return 0;
  };
  const orderTotal = () => {
    if (orderItems.length === 0) {
      return 0;
    }
    return orderItems
      .map((item) => item.tanka * item.count)
      .reduce((prev, cur) => prev + cur)
      .toFixed(2);
  };

  const cartContext = {
    items: orderItems,
    addToOrder: addToOrder,
    increaseCount: increaseCount,
    reduceItem: decreaseCount,
    menu: menu,
    cartCount: cartCount(),
    total: orderTotal(),
    loading: loading
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

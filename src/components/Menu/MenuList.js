import React, { useContext } from "react";

import styles from "./MenuList.module.css";

import Card from "../UI/Card/Card";
import MenuItem from "./MenuItem";
import CartContext from "../../helpers/cartContext";

const MenuList = (props) => {
  const context = useContext(CartContext);

  const addToOrder = (id, amount) => {
    props.addToOrder(id, amount);
  };

  return (
    <div className={styles["menu-list"]}>
      <Card>
        <div className={styles["menu-items"]}>
          {context.menu.map((item) => (
            <MenuItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              tanka={item.tanka}
              addToOrder={addToOrder}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default MenuList;
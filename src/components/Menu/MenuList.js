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

  if (context.loading && context.menu.length === 0) {
    return <div className={styles['loading']}><p>Loading</p></div>
  }

  if (context.errors) {
    return <div className={styles['loading']}><p>{context.errors}</p></div>
  }

  return (
    <div className={styles["menu-list"]}>
      <Card>
        <div className={styles["menu-items"]}>
          {context.menu.map((item, index) => (
            <MenuItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              tanka={item.tanka}
              addToOrder={addToOrder}
              last={(index + 1) === context.menu.length}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default MenuList;

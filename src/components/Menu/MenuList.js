import React, { useContext, useMemo } from "react";

import styles from "./MenuList.module.css";

import Card from "../UI/Card/Card";
import MenuItem from "./MenuItem";
import CartContext from "../../helpers/cartContext";

const MenuList = () => {
  console.log("menu load");
  const context = useContext(CartContext);

  return (
    <div className={styles["menu-list"]}>
      <Card>
        <div className={styles["menu-items"]}>
          {useMemo(() => {
            return context.menu.map((item) => (
              <MenuItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                tanka={item.tanka}
              />
            ));
          }, [context.menu])}
        </div>
      </Card>
    </div>
  );
};

export default React.memo(MenuList);

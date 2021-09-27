import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../helpers/cartContext";

import styles from "./Header.module.css";

const Header = (props) => {
  const [btnBump, setBtnBump] = useState(false);

  const context = useContext(CartContext);

  const btnClasses = `${styles['cart-box']} ${btnBump ? styles.bump : ''}`;

  useEffect(() => {
    if (context.cartCount === 0) {
      return;
    }
    setBtnBump(true);

    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  }, [context.cartCount]);
  return (
    <nav className={styles.nav}>
      <div className={styles.items}>
        <div className={styles.title}>React Meals</div>
        <button onClick={props.toggleOrderForm} className={btnClasses}>
          <div className={styles['cart-text']}>Your Cart</div>
          <div className={styles['cart-counter']}>{context.cartCount}</div>
        </button>
      </div>
    </nav>
  );
};

export default Header;

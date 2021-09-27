import React, { useContext } from "react";
import CartContext from "../../helpers/cartContext";

import Button from "../UI/Button/Button";

import styles from "./OrderItem.module.css";

const OrderItem = (props) => {
    const context = useContext(CartContext);

    const reduceItemHandler = () => {
        context.reduceItem({type: 'REDUCE_ONE', id: props.id});
    };
    const increaseItemHandler = () => {
        context.increaseCount({type: 'ADD_ONE', id: props.id});
    };
    return (
        <div className={styles.item}>
            <div className={styles.left}>
                <div className={styles['item-title']}>{props.title}</div>
                <div className={styles['left-box']}>
                    <div className={styles['item-tanka']}>${props.tanka}</div>
                    <div className={styles.counter}>x{props.count}</div>
                </div>
            </div>
            <div className="right">
                <Button onClick={reduceItemHandler} className="plus-minus">-</Button>
                <Button onClick={increaseItemHandler} className="plus-minus">+</Button>
            </div>
        </div>
    );
};

export default OrderItem;
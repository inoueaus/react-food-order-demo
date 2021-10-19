import React, { useContext } from "react";
import CartContext from "../../helpers/cartContext";
import useInput from "../../hooks/use-input";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import styles from "./OrderForm.module.css";

const nameValidator = (value) => {
  return (
    !"!#$%&'*+-/=?^_`{|}~ \"(),:;<>@[\\]"
      .split("")
      .some((char) => value.includes(char)) && value.trim().length > 0
  );
};

const OrderForm = (props) => {
  const context = useContext(CartContext);
  const firstName = useInput(nameValidator);
  const lastName = useInput(nameValidator);
  const phoneNumber = useInput((value) => {
    return /^\d{1,}-\d{1,4}-\d{4}$/.test(value);
  });

  const formValid =
    firstName.isValid && lastName.isValid && phoneNumber.isValid;

  const submitHandler = (e) => {
    e.preventDefault();

    if (formValid) {
      context.sendOrder({
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        phoneNumber: phoneNumber.value.trim(),
        order: context.items.map(item => ({ name: item.id, title: item.title, quantity: item.count })),
        orderTotal: context.total,
        orderTime: new Date().toJSON()
      });
      firstName.reset();
      lastName.reset();
      phoneNumber.reset();
      props.setOrderState("SUBMITTED");
    }
  };

  return (
    <form className={styles["order-form"]} onSubmit={submitHandler}>
      <h1>Order Form</h1>
      <Input
        label="First Name"
        className={!firstName.isValid && firstName.touched && "invalid"}
        type="text"
        name="firstName"
        value={firstName.value}
        onChange={firstName.handleInput}
        onBlur={firstName.handleBlur}
      />
      <Input
        label="Last Name"
        className={!lastName.isValid && lastName.touched && "invalid"}
        type="text"
        name="lastName"
        value={lastName.value}
        onChange={lastName.handleInput}
        onBlur={lastName.handleBlur}
      />
      <Input
        label="Phone Number"
        className={!phoneNumber.isValid && phoneNumber.touched && "invalid"}
        placeholder="080-0000-0000"
        type="text"
        name="phoneNumber"
        value={phoneNumber.value}
        onChange={phoneNumber.handleInput}
        onBlur={phoneNumber.handleBlur}
      />
      <div className={styles.buttons}>
        <Button disabled={!formValid} type="submit">
          Submit
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            props.setOrderState("CART");
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default OrderForm;
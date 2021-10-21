import React from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={`${styles["input-block"]} ${styles[props.className]}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={ref}
        name={props.id}
        type={props.type}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      {props.description && <small>{props.description}</small>}
    </div>
  );
});

export default Input;

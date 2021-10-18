import React from "react";
import ReactDOM from "react-dom";

import Card from "../Card/Card";

import styles from "./Modal.module.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      id="backdrop"
      onClick={props.onBackdropClick}
      className={styles["modal-overlay"]}
    >
      <Card
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.content}
      >
        {props.children}
      </Card>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;

import React from "react";
import ReactDOM from "react-dom";

import Card from "../Card/Card";

import styles from "./Modal.module.css";

const ModalContents = (props) => {
    return (
        <div className={styles['modal-overlay']}>
            <Card className={styles.content}>
                {props.children}
            </Card>
        </div>
    );
};

const Modal = (props) => {
    return (
        <>{ReactDOM.createPortal(<ModalContents children={props.children}/>, document.getElementById('modal'))}</>
    );
};

export default Modal;
import React from "react";
import ReactDOM from "react-dom";

import Card from "../Card/Card";

import styles from "./Modal.module.css";

const ModalContents = (props) => {
    const backdropClick = (e) => {
        if (e.target.id === 'backdrop' && typeof props.onBackdropClick == 'function') {
            props.onBackdropClick();
        }
    };
    return (
        <div id="backdrop" onClick={backdropClick} className={styles['modal-overlay']}>
            <Card className={styles.content}>
                {props.children}
            </Card>
        </div>
    );
};

const Modal = (props) => {
    return (
        <>{ReactDOM.createPortal(<ModalContents onBackdropClick={props.onBackdropClick} children={props.children}/>, document.getElementById('modal'))}</>
    );
};

export default Modal;
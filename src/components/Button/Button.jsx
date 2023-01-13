import React from "react";
import styles from './Button.css';

const typeCss = {
    'plus': styles.Btn_plus,
    'minus': styles.Btn_minus
}

export const Button = ({ title, type }) => {
    return(
        <button className={`${styles.Btn} ${typeCss[type] || styles.Btn_plus}`}>{title}</button>
    );
}

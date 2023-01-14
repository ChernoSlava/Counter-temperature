import React from "react";
import styles from './Button.css';
import { buttonsType } from "@constants";
const typeCss = {
    [buttonsType.typePlus]: styles.Btn_plus,
    [buttonsType.typeMinus]: styles.Btn_minus
}

export const Button = ({ title, type, ...props }) => {
    return(
        <button className={`${styles.Btn} ${typeCss[type] || styles.Btn_plus}`} {...props}>{title}</button>
    );
}

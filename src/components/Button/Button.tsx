import React from "react";
import styles from './Button.css';

// import { buttonsType } from "@constants";
// import { buttonsType } from "@types";

export type ButtonType = 'plus' | 'minus';

const typeCss: {
    [Key in ButtonType]: string
} = {
    'plus': styles.Btn_plus,
    'minus': styles.Btn_minus
};

export const Button: React.FC<{
    title: string;
    type: ButtonType;
    onClick: () => void;
}> = ({ title, type, ...props }): JSX.Element => {
    return(
        <button className={`${styles.Btn} ${typeCss[type] || styles.Btn_plus}`} {...props}>{title}</button>
    );
}

import React from "react";
import styles from './Counter.css';
import { typeCss } from "@constants";

const typeCssCounter = {
    [typeCss.typeZero]: styles.Counter_zero,
    [typeCss.typeLessZero]: styles.Counter_lesszero,
    [typeCss.typeAboveZero]: styles.Counter_abovezero,
    [typeCss.typeAboveTen]: styles.Counter_aboveten,
    [typeCss.typeLessTen]: styles.Counter_lessten,
};

export const Counter = ({ title, type }) => {
    return (
        <div className={`${styles.Counter} ${typeCssCounter[type] || styles.Counter_zero }`} >{title}&#8451;</div>
    );
}

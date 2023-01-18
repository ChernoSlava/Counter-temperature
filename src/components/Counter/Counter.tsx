import React from "react";
import styles from './Counter.css';
// import { typeCss } from "@constants";
// import { typeCss } from "@types";

export type CounterType = 'zero' | 'lesszero' | 'lessten' | 'abovezero' | 'aboveten';

const typeCssCounter: {
    [Key in CounterType ]:string
} = {
    'zero': styles.Counter_zero,
    'lesszero': styles.Counter_lesszero,
    'abovezero': styles.Counter_abovezero,
    'aboveten': styles.Counter_aboveten,
    'lessten': styles.Counter_lessten,
};

export const Counter: React.FC<{
    title: string;
    type: CounterType;
}> = ({ title, type }): JSX.Element => {
    return (
        <div className={`${styles.Counter} ${typeCssCounter[type] || styles.Counter_zero }`} >{title}&#8451;</div>
    );
}

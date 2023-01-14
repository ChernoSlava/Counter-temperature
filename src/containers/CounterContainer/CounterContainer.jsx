import React, { useContext } from "react";
import { Counter } from "@components";
import { CounterContext } from '@contexts';

import { typeCss } from '@constants';

export const CounterContainer = () => {
    const {state} = useContext(CounterContext);
    let counter = state.counterValue;
    
    let type = typeCss.typeZero;
    
    if ( counter < 0 && counter > - 10) {
        type = typeCss.typeLessZero;
    } else if ( counter > 0 && counter < 10 ) {
        type = typeCss.typeAboveZero;
    } else if (counter >= 10 ) {
        type = typeCss.typeAboveTen;
    } else if (counter <= -10 ) {
        type = typeCss.typeLessTen;
    }

    return (
        <Counter title={counter} type={type}/>
    )
}
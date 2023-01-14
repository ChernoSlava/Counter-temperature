import React, { useContext } from "react";
import { Counter } from "@components";
import { CounterContext } from '../../contexts';

export const CounterContainer = () => {
    const {state} = useContext(CounterContext);
    let counter = state.counterValue;
    
    let type = 'zero';
    
    if ( counter < 0 && counter > - 10) {
        type = 'lesszero';
    } else if ( counter > 0 && counter < 10 ) {
        type = 'abovezero';
    } else if (counter >= 10 ) {
        type = 'aboveten'
    } else if (counter <= -10 ) {
        type = 'lessten'
    }

    return (
        <Counter title={counter} type={type}/>
    )
}
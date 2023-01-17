import React, { useContext } from "react";
import { Counter, CounterType } from "@components";
import { CounterContext } from '@contexts';

// import { typeCss } from '@types';

export const CounterContainer: React.FC  = (): JSX.Element => {
    const {state} = useContext(CounterContext);

    let counter = state.counterValue;
    
    let type: CounterType = 'zero';
    
    if ( counter < 0 && counter > - 10) {
        type = 'lesszero';
    } else if ( counter > 0 && counter < 10 ) {
        type = 'abovezero';
    } else if (counter >= 10 ) {
        type = 'aboveten';
    } else if (counter <= -10 ) {
        type = 'lessten';
    }

    return (
        <Counter title={String(counter)} type={type}/>
    )
}
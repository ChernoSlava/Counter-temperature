import React, { useReducer, useState } from "react";
import { CounterContext } from '@contexts';

import { CounterReducer, InitialCounter } from './store';
import { Button } from './components/Button/Button';
import { Counter } from '@components';
import { actionType } from "@constants";

import styles from './App.css';


export const App = () => {
    const [ state, dispatch ] = useReducer(CounterReducer, InitialCounter);
    const [ counter, setCounter ] = useState(0);
    
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

    return(
        <CounterContext.Provider value={{
            state: {
                counterValue: state.value
            },
            dispatch
        }}>
            <div className={styles.App}>
                <div className={styles.App__container}>
                <Counter title={counter} type={type}/>
                <div className={styles.App__buttons}>
                    <Button 
                        title="+" 
                        type='plus' 
                        onClick={() => {dispatch({ type: actionType.plus }); setCounter(counter + 1)}}/>
                    <Button 
                        title="-" 
                        type='minus' 
                        onClick={() => {dispatch({ type: actionType.minus }); setCounter(counter - 1)}}/>
                </div>
                </div>
            </div>
        </CounterContext.Provider>
    )
};

import React, { useReducer } from "react";

import { CounterContext } from '@contexts';
import { CounterReducer, InitialCounter } from './store';
import { CounterContainer, ButtonsContainer } from "@containers";

import styles from './App.css';


export const App = () => {
    const [ state, dispatch ] = useReducer(CounterReducer, InitialCounter);

    return(
        <CounterContext.Provider value={{
            state: {
                counterValue: state.value
            },
            dispatch
        }}>
            <div className={styles.App}>
                <div className={styles.App__container}>
                    <CounterContainer />
                    <div className={styles.App__buttons}>
                        <ButtonsContainer />
                    </div>
                </div>
            </div>
        </CounterContext.Provider>
    )
};

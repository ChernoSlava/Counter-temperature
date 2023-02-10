import React, { useReducer } from "react";

import { CounterContext } from '@contexts';
import { CounterReducer, InitialCounter } from './store';
import { CounterContainer, ButtonsContainer } from "@containers";

import { GlobalStyles } from './styles/GlobalStyles';
import { AppStyled, AppContainer, AppButtonsContainer } from './styled';

export const App = () => {
    const [ state, dispatch ] = useReducer(CounterReducer, InitialCounter);

    return(
      <>  
        <GlobalStyles />
        <CounterContext.Provider value={{
            state: {
                counterValue: state.value
            },
            dispatch
        }}>
            <AppStyled>
                <AppContainer>
                    <CounterContainer />
                    <AppButtonsContainer>
                        <ButtonsContainer />
                    </AppButtonsContainer>
                </AppContainer>
            </AppStyled>
        </CounterContext.Provider>
      </>
    )
};

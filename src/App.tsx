import React, { useReducer } from "react";
import { Provider } from "react-redux";

import { CounterContainer, ButtonsContainer } from "@containers";
import { store } from "@store";

import { GlobalStyles } from './styles/GlobalStyles';
import { AppStyled, AppContainer, AppButtonsContainer } from './styled';

export const App = () => {
    return(
      <>  
        <GlobalStyles />
        <Provider store={store}>
            <AppStyled>
                <AppContainer>
                    <CounterContainer />
                    <AppButtonsContainer>
                        <ButtonsContainer />
                    </AppButtonsContainer>
                </AppContainer>
            </AppStyled>
        </Provider>
      </>
    )
};

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { CounterContainer, ButtonsContainer } from '@containers';
import { store } from '@store';
import { theme } from '@theme';

import { GlobalStyles } from './styles/GlobalStyles';
import { AppStyled, AppContainer, AppButtonsContainer } from './styled';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppStyled>
            <AppContainer>
              <CounterContainer />
              <AppButtonsContainer>
                <ButtonsContainer />
              </AppButtonsContainer>
            </AppContainer>
          </AppStyled>
        </ThemeProvider>
      </Provider>
    </>
  );
};

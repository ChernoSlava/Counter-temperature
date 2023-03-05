import { ButtonsContainer } from "../ButtonsContainer";
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Store, AnyAction } from '@reduxjs/toolkit';

import { theme } from '../../../theme';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { InitialCounter } from "@store";

const mockStore = configureStore();

const getUI = (store: Store<any, AnyAction>): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ButtonsContainer />
      </Provider>
    </ThemeProvider>
  );
};

describe('ButtonsContainer test', () => {
  it('Should render', () => {
    const { container } = render(getUI(mockStore({
      ...InitialCounter,
    }),
    ))
    expect(container).toMatchSnapshot();
  })

  it('Should call Plus action', () => {
    const store = mockStore({
      ...InitialCounter,
    });

    const {getByText} = render(getUI(store));

    const button = getByText('+');

    fireEvent.click(button);

    expect(store.getActions()).toMatchSnapshot();
  })

  it('Should call Minus action', () => {
    const store = mockStore({
      ...InitialCounter,
    });

    const {getByText} = render(getUI(store));

    const button = getByText('-');

    fireEvent.click(button);

    expect(store.getActions()).toMatchSnapshot();
  })
})
import { CounterContainer } from "../CounterContainer";
import { render } from '@testing-library/react';
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
        <CounterContainer />
      </Provider>
    </ThemeProvider>
  );
};

describe('CounterContainer test', () => {
  it('Should render zero', () => {
    const { container } = render(getUI(mockStore({
      ...InitialCounter,
    })))
    expect(container).toMatchSnapshot();
  });

  it('Should render lesszero', () => {
    const { container } = render(getUI(mockStore({
      ...InitialCounter,
      value: -5
    })))
    expect(container).toMatchSnapshot();
  });

  it('Should render lessten', () => {
    const { container } = render(getUI(mockStore({
      ...InitialCounter,
      value: -10
    })))
    expect(container).toMatchSnapshot();
  });

  it('Should render abovezero', () => {
    const { container } = render(getUI(mockStore({
      ...InitialCounter,
      value: 4
    })))
    expect(container).toMatchSnapshot();
  });

  it('Should render aboveten', () => {
    const { container } = render(getUI(mockStore({
      ...InitialCounter,
      value: 2038
    })))
    expect(container).toMatchSnapshot();
  });
})
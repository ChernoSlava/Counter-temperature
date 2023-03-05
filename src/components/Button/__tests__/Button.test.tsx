/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../theme';
import { Button, ButtonProps } from '../Button';

const getUI = (props?: ButtonProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        title="I am button"
        type="plus"
        onClick={jest.fn()}
        {...(props || {})}
      />
    </ThemeProvider>
  );
};

describe('Button tests', () => {
  it('should render correct plus button', () => {
    const { container } = render(getUI());

    expect(container).toMatchSnapshot();
  });
  it('should render correct minus button', () => {
    const { container } = render(getUI({ type: 'minus' }));

    expect(container).toMatchSnapshot();
  });

  it('should handle onClick', () => {
    const onClick = jest.fn();

    const { getByText } = render(
      getUI({
        type: 'plus',
        onClick,
      }),
    );

    const button = getByText('I am button');
    fireEvent.click(button);

    expect(onClick).toBeCalled();
    expect(onClick).toBeCalledTimes(1);
  });
});

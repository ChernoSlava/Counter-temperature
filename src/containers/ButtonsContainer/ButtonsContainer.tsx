import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@components';
import { buttonsTitle } from '@constants';
import { minus, plus } from '@store';

export const ButtonsContainer: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        title={buttonsTitle.titleMinus}
        type="minus"
        onClick={() => dispatch(minus())}
      />
      <Button
        title={buttonsTitle.titlePlus}
        type="plus"
        onClick={() => dispatch(plus())}
      />
    </>
  );
};

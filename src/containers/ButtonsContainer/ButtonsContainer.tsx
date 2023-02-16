import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "@components"
import { buttonsTitle } from "@constants";
import { MinusAction, PlusAction } from '@store';

export const ButtonsContainer: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <>
      <Button 
        title={buttonsTitle.titleMinus} 
        type='minus'
        onClick={() => dispatch(MinusAction())}
      />
      <Button 
        title={buttonsTitle.titlePlus}
        type='plus'
        onClick={() => dispatch(PlusAction())}
      />
    </>
  )
}

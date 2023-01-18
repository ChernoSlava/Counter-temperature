import React, { useContext } from "react";

import { Button } from "@components"
import { CounterContext } from "@contexts";

import { buttonsTitle } from "@constants";
import { ActionKind } from "@types";

export const ButtonsContainer: React.FC = (): JSX.Element => {
    const { dispatch } = useContext(CounterContext);

    return (
        <>
            <Button 
                title={buttonsTitle.titlePlus}
                type='plus'
                onClick={() => dispatch({ type: ActionKind.Plus })}/>
            <Button 
                title={buttonsTitle.titleMinus} 
                type='minus'
                onClick={() => dispatch({ type: ActionKind.Minus })}/>
        </>
    )
}

import React, { useContext } from "react";
import { Button } from "@components"
import { CounterContext } from "@contexts";
import { actionType, buttonsTitle, buttonsType } from "@constants";

export const ButtonsContainer = () => {
    const {dispatch} = useContext(CounterContext);

    return (
        <>
            <Button 
                title={buttonsTitle.titlePlus}
                type={buttonsType.typePlus}
                onClick={() => dispatch({ type: actionType.plus })}/>
            <Button 
                title={buttonsTitle.titleMinus} 
                type={buttonsType.typeMinus}
                onClick={() => dispatch({ type: actionType.minus })}/>
        </>
    )
}

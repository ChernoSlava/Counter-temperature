import React, { useContext } from "react";
import { Button } from "@components"
import { CounterContext } from "../../contexts";
import { actionType } from "@constants";

export const ButtonsContainer = () => {
    const {dispatch} = useContext(CounterContext);

    return (
        <>
            <Button 
                title="+" 
                type='plus' 
                onClick={() => dispatch({ type: actionType.plus })}/>
            <Button 
                title="-" 
                type='minus' 
                onClick={() => dispatch({ type: actionType.minus })}/>
        </>
    )
}

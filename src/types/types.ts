export type CounterContextStateType = {
    counterValue: number
}
export type CounterContextType = {
    dispatch: React.Dispatch<Action>; // можно поставить dispatch? станет не обязательным
    state: CounterContextStateType
}

export type CounterStateType = {
    value: number
}

export enum ActionKind {
    Plus = "PLUS",
    Minus = "MINUS", 
}

export type Action = {
    type: ActionKind
}

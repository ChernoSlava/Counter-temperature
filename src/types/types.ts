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

export type DispatchType = (args: Action) => Action;

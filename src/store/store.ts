import { Action, CounterStateType, DispatchType } from "@types";
import { compose, createStore, Store } from "redux";
import { CounterReducer } from "./CounterReducer";

const composeEnhancers = typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'REACT_COUNTER_TEMPERATURE',
        trace: true,
        traceLimit: 25
    }) :
    compose;

export const store: Store<CounterStateType, Action> & {
    dispatch: DispatchType
} = createStore(
    CounterReducer,
    composeEnhancers()
)
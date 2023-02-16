import { CounterStateType, Action, ActionKind } from '@types';

export const InitialCounter: CounterStateType = {
  value: 0,
};

export const CounterReducer = (
  state: CounterStateType,
  action: Action,
): CounterStateType => {
  const { type } = action;

  switch (type) {
    case ActionKind.Plus: {
      return {
        ...state,
        value: state.value + 1,
      };
    }

    case ActionKind.Minus: {
      return {
        ...state,
        value: state.value - 1,
      };
    }

    default: {
      return state;
    }
  }
};

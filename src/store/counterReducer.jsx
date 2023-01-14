import { actionType } from '@constants';

export const CounterReducer = (state, action) => {
    const { type } = action;

        switch (type) {
        case actionType.plus: {
            return {
                ...state,
                value: state.value + 1
            };
        }

        case actionType.minus: {
            return {
                ...state,
                value: state.value - 1
            };
        }

        default: {
            return state;
        }
    }
}

export const InitialCounter = {
    value: 0
}
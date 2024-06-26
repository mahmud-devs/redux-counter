const InitialState = {
    value: 0,
};

const CounterReducer = (state = InitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "INCREMENT": {
            return {
                ...state,
                value: state.value + 1,
            };
        }
        case "DECREMENT": {
            return {
                ...state,
                value: state.value - 1,
            };
        }
        case "RESET": {
            return {
                ...state,
                value: 0,
            };
        }
    }
};

export { CounterReducer };

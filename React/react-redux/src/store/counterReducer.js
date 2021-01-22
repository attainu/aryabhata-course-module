const initialState = {
    counter: 0,
    value: 10,
}

const counterReducer = (state, action) => {
    state = state || initialState

    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter+action.payload
            }
        case 'DEC_COUNTER':
            return {
                ...state,
                counter: state.counter-action.payload
            }
        case 'INC_VALUE':
            return {
                ...state,
                value: state.value+action.payload
            }
    
        default:
            return state;
    }
};

export default counterReducer;
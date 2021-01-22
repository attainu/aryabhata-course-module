const initialState = {
    counters: {
        counter: 0,
        value: 10,
    },
    todos: ['Revise for the test']
}
const reducer = (state, action) => {
    state = state || initialState

    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counters: {
                    ...state.counters,
                    counter:state.counters.counter+action.payload
                }
            }
        case 'DEC_COUNTER':
            return {
                ...state,
                counters: {
                    ...state.counters,
                    counter:state.counters.counter-action.payload
                }
                
            }
        case 'INC_VALUE':
            return {
                ...state,
                counters: {
                    ...state.counters,
                    value:state.counters.value+action.payload
                }
            }
        case 'ADD_TASK':
            return {
                ...state,
                todos: [ 
                    ...state.todos,
                    action.payload 
                ]
            }
        case 'REMOVE_TASK':
            const todos = state.filter(function(item) {
                return item !== action.payload;
            });
            return {
                ...state,
                todos: [ 
                    ...todos
                ]
            }
        default:
            return state;
    }
};

export default reducer;